type UserDataType = {
  avatar_url: string;
  bio: string;
  blog: string;
  company: string;
  email: string | null;
  followers: number;
  following: number;
  hirable: boolean | null;
  location: string;
  login: string;
  name: string;
  public_gists: number;
  public_repos: number;
  twitter_username: string;
  url: string;
};

type SourceLicenseType = {
  key: string;
  name: string;
  spdx_id: string;
  url: string;
};

type RepositoryDataType = {
  id: number;
  name: string;
  full_name: string;
  description: string;
  fork: boolean;
  html_url: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  forks_count: number;
  open_issues_count: number;
  license: SourceLicenseType;
  watchers: number;
  forks: number;
  default_branch: string;
  open_issues: number;
  topics: string[];
  is_template: boolean;
  subscribers_count: number;
  homepage: null | string;
};

export async function getUserInfo(user: string): Promise<UserDataType | null> {
  const req = await fetch(`https://api.github.com/users/${this.user}`);
  if (req.ok) return await req.json();
  return null;
}

export async function getRepositoryInfo(
  login: string,
  repo: string
): Promise<RepositoryDataType | null> {
  const req = await fetch(`https://api.github.com/repos/${login}/${repo}`);
  if (req.ok) return await req.json();
  return null;
}
