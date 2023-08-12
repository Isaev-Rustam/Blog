class LocalStorage {
  public static get<O extends object>(key: string): O | null {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  public static remove(key: string) {
    localStorage.removeItem(key);
  }

  public static set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  // static clear(static) {}
}

export default LocalStorage;
