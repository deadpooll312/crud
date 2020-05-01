import AuthStore from "./auth/auth.store";
import AttributeStore from './attribute/attribute.store';

class RootStore {
  constructor() {
    this.auth = AuthStore;
    this.attribute = AttributeStore;
  }
}

export default new RootStore();
