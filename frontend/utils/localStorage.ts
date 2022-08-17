/* export const LocalStorage = {
  clear: () => localStorage.clear(),
  set: (key: string, object: object) =>
    localStorage.setItem(key, JSON.stringify(object)),
  get: (key: string) => {
    const item = localStorage.getItem(key);
    if (item) return JSON.parse(item);
    return null;
  },
}; 
Haha Next can't use localstorage on ssr
 */
