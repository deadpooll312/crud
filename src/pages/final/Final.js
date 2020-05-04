import React, { Fragment } from 'react';
import { inject, observer } from "mobx-react";

export const Final = inject("store")(observer(({store, props}) => {
  return <Fragment>
    <div className="final">
      <h1>hello final page</h1>
    </div>
  </Fragment>
}));
