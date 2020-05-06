import axiosInstance from "../../api";
import { TOKEN } from "../../const/auth";

export class AuthAction {
  setToken(token) {
    this.token = token;
  }

  clearToken() {
    localStorage.removeItem(TOKEN);
    this.token = null;
    this.user = {};
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
        history.push('/date');
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
      window.open(data.url, '_blank');
    });
  }

  getHistory(params) {
    axiosInstance.get(`auth/transactions/`, {params})
      .then(({data}) => this.data = data);
  }
}
