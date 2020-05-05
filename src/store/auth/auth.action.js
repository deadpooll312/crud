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

  signIn(formData, history) {
    const data = {...formData, email: formData.email.toLocaleLowerCase()};
    axiosInstance.post(`auth/sign-in/`, data)
      .then(({data}) => {
        history.push('/date');
        this.updateToken(data && data.token);
      });
  }

  signUp(formData, history) {
    const data = {...formData, email: formData.email.toLocaleLowerCase()};
    axiosInstance.post(`auth/sign-up/`, data)
      .then(({data}) => {
        history.push('/final');
        this.updateToken(data && data.token);
      });
  }

  updateToken(token) {
    this.token = token;
    localStorage.setItem(TOKEN, this.token);
  }

  getUser() {
    axiosInstance.get(`auth/me/`).then(({data}) => this.user = data);
  }
  
  fill(balance) {
    axiosInstance.post(`auth/balance/fill/`, {balance}).then(({data}) => {
      window.open(data.data.url, '_blank');
    });
  }

}
