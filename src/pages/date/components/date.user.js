import {inject, observer} from "mobx-react";
import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  inputGroup: {
    marginBottom: theme.spacing(2) // theme.spacing(number) - функция которая умножает 4 на number. marginBottom = (4 * 2) = 8
  },
  input: {
    width: '100%',

    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#fff'
    },

    '& .MuiFormLabel-root': {
      color: '#fff'
    },

    '& input': {
      color: '#fff'
    },

    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#FFB900'
    },

    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#FFB900'
    }
  }
}));


export const DateUser = inject('store')(observer(({store}) => {
  const {auth} = store;
  const classes = useStyles();

  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  React.useEffect(
      () => {
        if (auth.user.full_name && fullName === "") {
          setFullName(auth.user.full_name);
        }

        if (auth.user.phone_number && phoneNumber !== "") {
          setPhoneNumber(auth.user.phone_number);
        }

        if (auth.user.email && email === "") {
          setEmail(auth.user.email);
        }
      },
      [auth.user]
  );

  const updateProfile = () => {
    store.auth.updateUser({
      full_name: fullName,
      email: email,
      phone_number: phoneNumber
    });
  };

  return <div className="data-personal">
    <h3 className="title">Личные данные</h3>
    {/*<div className="item_data">*/}
    {/*  <div className="sub-title">ФИО</div>*/}
    {/*  <h5>{auth.user.full_name}</h5>*/}
    {/*</div>*/}
    {/*<div className="item_data">*/}
    {/*  <div className="sub-title">E-mail</div>*/}
    {/*  <h5>{auth.user.email}</h5>*/}
    {/*</div>*/}
    {/*<div className="item_data">*/}
    {/*  <div className="sub-title">Телефон</div>*/}
    {/*  <h5>{auth.user.phone_number}</h5>*/}
    {/*</div>*/}
    <div className={classes.inputGroup}>
      <TextField
          variant="outlined"
          color="primary"
          label="ФИО"
          className={classes.input}
          value={fullName}
          onChange={e => setFullName(e.target.value)}
      />
    </div>
    <div className={classes.inputGroup}>
      <TextField
          variant="outlined"
          color="primary"
          label="Email"
          className={classes.input}
          value={email}
          onChange={e => setEmail(e.target.value)}
      />
    </div>
    <div className={classes.inputGroup}>
      <TextField
          variant="outlined"
          color="primary"
          label="Телефон"
          className={classes.input}
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
      />
    </div>
    {/* Some commentary */}
    <Button className="btn btn-save __blue" variant="contained" disabled={!Boolean(auth.user)} onClick={updateProfile}>Сохранить</Button>
  </div>
}));
