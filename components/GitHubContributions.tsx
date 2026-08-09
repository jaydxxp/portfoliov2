const GITHUB_USERNAME = "jaydxxp";
const CELL = 11;
const GAP = 3;
const STEP = CELL + GAP;

const LEVEL_COLORS = [
  "#EBF0F5",
  "#C5DCF0",
  "#7EB8E0",
  "#3A94CF",
  "#006EC9",
] as const;

type Contribution = {
  date: string;
  count: number;
  level: number;
};

type ContributionsResponse = {
  total: { lastYear: number };
  contributions: Contribution[];
};

function groupByWeeks(contributions: Contribution[]): Contribution[][] {
  if (contributions.length === 0) return [];

  const weeks: Contribution[][] = [];
  let currentWeek: Contribution[] = [];

  const firstDayOfWeek = new Date(contributions[0].date + "T00:00:00").getDay();
  for (let i = 0; i < firstDayOfWeek; i++) {
    currentWeek.push({ date: "", count: 0, level: 0 });
  }

  for (const day of contributions) {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) {
      currentWeek.push({ date: "", count: 0, level: 0 });
    }
    weeks.push(currentWeek);
  }

  return weeks;
}

function getMonthLabels(weeks: Contribution[][]) {
  const labels: { label: string; col: number }[] = [];
  const seen = new Set<number>();

  weeks.forEach((week, col) => {
    for (const day of week) {
      if (!day.date) continue;
      const d = new Date(day.date + "T00:00:00");
      const key = d.getFullYear() * 12 + d.getMonth();
      if (!seen.has(key)) {
        seen.add(key);
        labels.push({
          label: d.toLocaleDateString("en-US", { month: "short" }),
          col,
        });
        break;
      }
    }
  });

  return labels;
}

async function getContributions(): Promise<ContributionsResponse | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

function formatDate(date: string) {
  return new Date(date + "T00:00:00").toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function ContributionGrid({
  weeks,
  monthLabels,
}: {
  weeks: Contribution[][];
  monthLabels: { label: string; col: number }[];
}) {
  const gridWidth = weeks.length * STEP - GAP;

  return (
    <>
      <div
        className="relative h-4 mb-2 font-satoshi text-xs text-[#666]"
        style={{ width: gridWidth }}
      >
        {monthLabels.map(({ label, col }) => (
          <span
            key={`${label}-${col}`}
            className="absolute top-0"
            style={{ left: col * STEP }}
          >
            {label}
          </span>
        ))}
      </div>

      <div className="inline-flex gap-[3px]" style={{ width: gridWidth }}>
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-[3px]">
            {week.map((day, dayIndex) => (
              <div
                key={`${weekIndex}-${dayIndex}`}
                title={
                  day.date
                    ? `${day.count} contribution${day.count === 1 ? "" : "s"} on ${formatDate(day.date)}`
                    : undefined
                }
                className="rounded-[2px]"
                style={{
                  width: CELL,
                  height: CELL,
                  backgroundColor: LEVEL_COLORS[Math.min(day.level, 4)],
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

function ContributionLegend() {
  return (
    <div className="flex items-center gap-1 font-satoshi text-xs text-[#666]">
      <span>Less</span>
      {LEVEL_COLORS.map((color, i) => (
        <div
          key={i}
          className="rounded-[2px]"
          style={{ width: CELL, height: CELL, backgroundColor: color }}
        />
      ))}
      <span>More</span>
    </div>
  );
}

export default async function GitHubContributions() {
  const data = await getContributions();
  const weeks = data ? groupByWeeks(data.contributions) : [];
  const monthLabels = getMonthLabels(weeks);
  const total = data?.total.lastYear ?? 0;

  return (
    <div className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-12 px-6 md:px-12 py-6 justify-center">
      <div className="flex flex-col items-start max-w-lg md:max-w-xl w-full">
        <h2 className="font-satoshi font-bold text-2xl text-center md:text-left mb-4 text-[#666]">
          GitHub Contributions
        </h2>

        {weeks.length > 0 ? (
          <>
            <div className="w-full overflow-x-auto">
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View GitHub profile"
                className="inline-block no-underline"
              >
                <ContributionGrid weeks={weeks} monthLabels={monthLabels} />
              </a>
            </div>

            <div className="flex w-full items-center justify-between gap-4 mt-3 font-satoshi text-sm text-[#666]">
              <span className="text-left">
                {total.toLocaleString()} contributions in the last year
              </span>
              <ContributionLegend />
            </div>
          </>
        ) : (
          <div className="w-full text-left">
            <p className="font-satoshi text-sm text-[#666] mb-3">
              Unable to load contribution data right now.
            </p>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-satoshi text-sm text-[#006EC9] hover:underline"
            >
              View activity on GitHub →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
