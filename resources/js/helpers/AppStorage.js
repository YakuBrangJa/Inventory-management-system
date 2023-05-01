class AppStorage {
  storeToken(token) {
    localStorage.setItem("token", token);
  }

  storeUser(user) {
    localStorage.setItem("user", user);
  }

  store(token, user) {
    this.storeToken(token);
    this.storeUser(user);
  }

  get(item) {
    const readedItem = localStorage.getItem(item);
    return readedItem;
  }

  clear(items = ["token", "user"]) {
    items.forEach((item) => {
      localStorage.removeItem(item);
    });
  }
}

export default AppStorage = new AppStorage();
