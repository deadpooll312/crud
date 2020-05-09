import React, {Fragment, useCallback} from 'react';
import {inject, observer} from "mobx-react";
import {useHistory} from "react-router";

export const ProgramPage = inject('store')(observer(({store}) => {
  const history = useHistory();
  
  const home = useCallback(() => {
    history.push('/');
  }, [history]);
  
  return <Fragment>
    <div className="failed-banner reposes-banner">
      <div className="center-box">
        <h3>Реферальная программа</h3>
      </div>
    </div>
  </Fragment>
}));

