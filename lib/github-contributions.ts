const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";

const CONTRIBUTION_LEVEL_MAP: Record<string, number> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

export type Contribution = {
  date: string;
  count: number;
  level: number;
};

export type ContributionsData = {
  total: number;
  weeks: Contribution[][];
};

type GraphQLResponse = {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: {
          totalContributions: number;
          weeks: Array<{
            contributionDays: Array<{
              date: string;
              contributionCount: number;
              contributionLevel: string;
            }>;
          }>;
        };
      };
    };
  };
  errors?: Array<{ message: string }>;
};

const CONTRIBUTIONS_QUERY = `
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

export async function getGitHubContributions(
  username: string
): Promise<ContributionsData | null> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return null;

  try {
    const res = await fetch(GITHUB_GRAPHQL_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: CONTRIBUTIONS_QUERY,
        variables: { username },
      }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    const json: GraphQLResponse = await res.json();
    if (json.errors?.length || !json.data?.user) return null;

    const calendar =
      json.data.user.contributionsCollection?.contributionCalendar;
    if (!calendar?.weeks?.length) return null;

    const weeks = calendar.weeks.map((week) =>
      week.contributionDays.map((day) => ({
        date: day.date,
        count: day.contributionCount,
        level: CONTRIBUTION_LEVEL_MAP[day.contributionLevel] ?? 0,
      }))
    );

    return {
      total: calendar.totalContributions,
      weeks,
    };
  } catch {
    return null;
  }
}
