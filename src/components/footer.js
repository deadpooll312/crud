import React, { useCallback } from "react";
import { useHistory } from "react-router";

export const Footer = () => {
  const history = useHistory();
  const push = useCallback(
    (path) => {
      window.scrollTo({top:0})
      history.push(`/${path}`);
    },
    [history]
  );

  return (
    <div className="footer">
      <div className="container">
        <div className="brand_wrapper">
          <a onClick={() => push('')} className="brand-link">
            BEFREE. BINGO
          </a>
        </div>
        <div className="flex-wrapper">
          <a onClick={() => push('terms')}>Условия и положения</a>
          <a onClick={() => push('politica')}>Политика конфиденциальности</a>
          <a onClick={() => push('contacts')}>Контакты</a>
          <a onClick={() => push('change')}>Блокчейн</a>
          <a onClick={() => push('rules')}>Правила</a>
        </div>
      </div>
    </div>
  );
};
