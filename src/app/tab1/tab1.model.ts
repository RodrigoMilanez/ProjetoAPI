export type GitResponse = {
    "login": string, 
    "name": string,
    "bio":string,
    "avatar_url": string
}
export type GitRepository = {
    name: string;
    stargazers_count: number;
    watchers_count: number;
    forks_count: number;
    svn_url: string;
}