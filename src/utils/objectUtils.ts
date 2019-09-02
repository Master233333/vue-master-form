export function getNames(obj: any) {
  if (!obj) {
    return [];
  }
  return Object.keys(obj);
}
