export function getNames(obj: any): string[] {
  if (!obj) {
    return [];
  }
  return Object.keys(obj);
}
