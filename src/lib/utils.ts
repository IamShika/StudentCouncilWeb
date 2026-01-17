// Base path is determined at build time
const BASE_PATH = process.env.NODE_ENV === 'production' ? '/StudentCouncilWeb' : '';

export function getImagePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
