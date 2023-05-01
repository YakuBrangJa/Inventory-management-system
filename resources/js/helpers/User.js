import Token from "./Token";
import AppStorage from "./AppStorage";

class User {
  responseAfterLogin(data) {
    const access_token = data.access_token;
    const username = data.user.name;

    if (Token.isValid(access_token)) {
      AppStorage.store(access_token, username);
    }
  }

  hasToken() {
    const storedToken = AppStorage.get("token");

    if (storedToken) return Token.isValid(storedToken);

    // return false;
  }

  loggedIn() {
    return this.hasToken();
  }

  logout() {
    AppStorage.clear();
  }

  name() {
    if (this.loggedIn()) {
      return AppStorage.get("user");
    }
  }
}

export default User = new User();
