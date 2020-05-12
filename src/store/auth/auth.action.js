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
    if (localStorage.getItem(TOKEN)) {
      axiosInstance.get(`auth/me/`).then(({data}) => this.user = data);
    }
  }

  updateUser(formData) {
    if (localStorage.getItem(TOKEN)) {
      axiosInstance.put(`auth/me/update/`, formData).then(({data}) => this.user = {...this.user, ...data})
    }
  }
  
  fill(balance) {
    axiosInstance.post(`auth/balance/fill/`, {balance}).then(({data}) => {
      window.open(data.payment_url, '_blank');
    });
  }

  getHistory(params) {
    axiosInstance.get(`auth/transactions/`, {params})
      .then(({data}) => this.data = data);
  }

  balanceFill(data) {
    axiosInstance.post('auth/balance/fill/callback/', data)
      .then(() => {
        this.getUser();
      });
  }
}
