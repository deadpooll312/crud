import React from 'react';
import { inject, observer } from 'mobx-react';

export const MainPage = inject('store')(observer(({store, props}) => {
  return <div className="container">
    <h1>Hello World</h1>
  </div>
}));
