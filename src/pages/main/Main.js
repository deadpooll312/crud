import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import axiosInstance from '../../api';
import Modal from '../../components/modal';

export const MainPage = inject('store')(observer(({store, props}) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    store.auth.getUser();
  }, []);

  const press = e => {
    if (e.key === 'Enter') {
      axiosInstance
        .post(`/auth/balance/fill/`, {balance: e.target.value})
        .then(({data}) => sendToPayment(data));
    }
  }

  const sendToPayment = ({data}) => {
    console.log(data.html);
    // window.open(data.url, '_blank');
    // axiosInstance
    //   .get(`${data.url}`)
    //   .then(({data}) => {
    //     console.log(data);
    //   });
  }

  const showModal = () => {
    setShow(!show)
  }

  return <div className="container">
    <Modal show={show}>
      <h1>Hello World!!!</h1>
    </Modal>

    <h1 onClick={showModal}>Email {store.auth.user.email}</h1>
    <h1>Balance {store.auth.user.balance}</h1>
    <div className="form-group">
      <label htmlFor="email">Email address:</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter email"
        id="email"
        onKeyPress={press}
      />
    </div>
    
  </div>
}));

