import { decorate, observable } from "mobx";
import { AuthAction } from "./auth.action";

class AuthStore extends AuthAction {
  user = {}
  token = null;
}

AuthStore = decorate(AuthStore, {
  user: observable,
  token: observable,
});

export default new AuthStore();
