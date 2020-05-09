import React, {Fragment, useCallback} from 'react';
import {inject, observer} from "mobx-react";
import {useHistory} from "react-router";

export const TermsPage = inject('store')(observer(({store}) => {
  const history = useHistory();
  
  const home = useCallback(() => {
    history.push('/');
  }, [history]);
  
  return <Fragment>
    <div className="failed-banner reposes-banner">
      <div className="center-box">
        <h3> Условия</h3>
      </div>
    </div>
  </Fragment>
}));
