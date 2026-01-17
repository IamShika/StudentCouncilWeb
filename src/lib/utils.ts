// Hardcoded for GitHub Pages - change this if deploying elsewhere
export const BASE_PATH = '/StudentCouncilWeb';

export function getImagePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
