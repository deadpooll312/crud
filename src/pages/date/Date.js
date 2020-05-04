import React, { Fragment } from 'react';
import { inject, observer } from "mobx-react";

export const Date = inject("store")(observer(({store, props}) => {
  return <Fragment>
    <div className="date">
      <h1>Date page</h1>
    </div>
  </Fragment>
}));
