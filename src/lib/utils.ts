export function getImagePath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/StudentCouncilWeb' : '';
  return `${basePath}${path}`;
}
