import axiosInstance from "../../api";
import { TOKEN } from "../../const/auth";

export class AuthAction {
  setToken(token) {
    this.token = token;
  }

  clearToken() {
    localStorage.removeItem(TOKEN);
    this.token = null;
  }

  signIn(data) {
    console.log('signIn', data);
    axiosInstance.post(`auth/sign-in/`, data)
      .then(({data}) => this.updateToken(data && data.token));
  }

  signUp(data) {
    axiosInstance.post(`auth/sign-up/`, data)
      .then(({data}) => this.updateToken(data && data.token));
  }

  updateToken(token) {
    this.token = token;
    localStorage.setItem(TOKEN, this.token);
  }

  getUser() {
    axiosInstance.get(`auth/me/`).then(({data}) => this.user = data);
  }

}
