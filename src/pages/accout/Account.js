import React, { Fragment } from 'react';
import { inject, observer } from "mobx-react";

export const Account = inject("store")(observer(({store, props}) => {
  return <Fragment>
    <div className="account">
      <h1>Account page</h1>
    </div>
  </Fragment>
}));
