type LatestCommit = {
  sha: string;
  shortSha: string;
  message: string;
  date: string;
  relativeAgo: string;
};

function relativeAgo(iso: string): string {
  const then = new Date(iso).getTime();
  const now = Date.now();
  const diffSec = Math.max(1, Math.floor((now - then) / 1000));
  if (diffSec < 60) return `${diffSec}s ago`;
  const m = Math.floor(diffSec / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  if (d < 30) return `${d}d ago`;
  const mo = Math.floor(d / 30);
  if (mo < 12) return `${mo}mo ago`;
  const y = Math.floor(d / 365);
  return `${y}y ago`;
}

export async function getLatestCommit(
  owner = "at-n3tt0",
  repo = "portfolio-antonio",
): Promise<LatestCommit | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`,
      {
        next: { revalidate: 300 },
        headers: { Accept: "application/vnd.github+json" },
      },
    );
    if (!res.ok) return null;
    const data = await res.json();
    const c = Array.isArray(data) ? data[0] : null;
    if (!c) return null;
    return {
      sha: c.sha,
      shortSha: c.sha.slice(0, 7),
      message: (c.commit?.message ?? "").split("\n")[0].slice(0, 80),
      date: c.commit?.author?.date ?? c.commit?.committer?.date ?? "",
      relativeAgo: relativeAgo(c.commit?.author?.date ?? c.commit?.committer?.date ?? new Date().toISOString()),
    };
  } catch {
    return null;
  }
}
