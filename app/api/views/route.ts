import { NextResponse } from "next/server";

const VERCEL_ANALYTICS_URL =
  "https://api.vercel.com/v1/query/web-analytics/visits/count";

type VisitsCountResponse = {
  data?: {
    pageviews?: number;
    visitors?: number;
  };
  error?: { message?: string };
};

export async function GET() {
  const token = process.env.VERCEL_TOKEN;
  const projectId = process.env.VERCEL_PROJECT_ID;

  if (!token || !projectId) {
    return NextResponse.json(
      {
        count: null,
        error: "Missing VERCEL_TOKEN or VERCEL_PROJECT_ID",
      },
      { status: 500 }
    );
  }

  const params = new URLSearchParams({ projectId });

  const teamId = process.env.VERCEL_TEAM_ID;
  if (teamId) {
    params.set("teamId", teamId);
  }

  const path = process.env.VERCEL_ANALYTICS_PATH ?? "/";
  if (path) {
    params.set("filter", `requestPath eq '${path}'`);
  }

  try {
    const res = await fetch(`${VERCEL_ANALYTICS_URL}?${params}`, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 3600 },
    });

    const data: VisitsCountResponse = await res.json().catch(() => ({}));

    if (!res.ok) {
      const message = data.error?.message ?? `Vercel Analytics API failed (${res.status})`;
      console.error("Vercel Analytics API error:", message);

      const isDev = process.env.NODE_ENV === "development";

      return NextResponse.json(
        { count: null, ...(isDev && { error: message }) },
        { status: res.status }
      );
    }

    const visitors = data.data?.visitors;

    return NextResponse.json({
      count: typeof visitors === "number" ? visitors : null,
    });
  } catch (error) {
    console.error("Vercel Analytics fetch failed:", error);

    return NextResponse.json(
      { count: null, error: "Failed to reach Vercel Analytics API" },
      { status: 500 }
    );
  }
}
