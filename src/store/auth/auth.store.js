import { decorate, observable } from "mobx";
import { AuthAction } from "./auth.action";

class AuthStore extends AuthAction {
  user = {}
  token = null;
  data = {};
}

AuthStore = decorate(AuthStore, {
  user: observable,
  token: observable,
  data: observable,
});

export default new AuthStore();
