export const siteConfig = {
  name: "Ivan Serdiuk",
  title: "Ivan Serdiuk — Portfolio",
  description:
    "Portfolio and resume for Ivan Serdiuk, M.S. CIS candidate at NYU Courant specializing in machine learning, Python, SQL, and cloud fundamentals.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export const absoluteUrl = (path: string) => {
  if (path.startsWith("http")) {
    return path;
  }
  return `${siteConfig.url.replace(/\/$/, "")}${path}`;
};
