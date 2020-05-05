import React, {Fragment, useRef, useCallback, useState} from "react";
import {inject, observer} from "mobx-react";
import {useHistory} from "react-router";
import {LoginPopup} from "./components/login.popup";

export const MainPage = inject("store")(observer(({store}) => {
    const [show, setShow] = useState(false);
    const history = useHistory();
    const banner = useRef(null);
    const scrollToRef = (ref) => window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
    
    const scroll = useCallback(() => {
      scrollToRef(banner);
    }, []);
    
    const registration = useCallback(() => {
      history.push('/account');
    }, []);
    
    return (
      <Fragment>
        <LoginPopup show={show} toggleModal={() => setShow(false)}/>
        <div className="header">
          <div className="container">
            <div className="flex-wrapper">
              <div className="links-wrapper_header">
                <a href="#" className="brand-link">BEFREE. BINGO</a>
                <a href="#" className="link-item" onClick={scroll}>Сделать ставку</a>
                <a href="#" className="link-item">Правила</a>
              </div>
              <div className="registration-wrapper_header">
                <button className="btn btn-sing-in" onClick={registration}>Регистрация</button>
                <button className="btn btn-log-in" onClick={() => setShow(true)}>Вход</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="main-banner">
          <div className="container">
            <h1>Угадай дату <br/>открытия границ <br/>и стань миллионером!</h1>
            <ul>
              <li><span className="circle"></span>Хочешь улететь за границу</li>
              <li><span className="circle"></span>Устал от карантина?</li>
            </ul>
            <h4>Твой шанс воплотить свои мечты!</h4>
            <div className="btn_wrapper">
              <button className="btn btn-banner" onClick={scroll}>Угадай дату и забирай деньги</button>
            </div>
          </div>
        </div>
        
        <div className="regulations_section" ref={banner}>
          <div className="container container_custom">
            <div className="flex-wrapper">
              <div className="left-block item-regulations">
                <h3>Команда befree.bingo</h3>
                <h5>дает каждому возможность выйти с карантина РЕАЛЬНО ДРУГИМ ЧЕЛОВЕКОМ!</h5>
              </div>
              <div className="center-block item-regulations">
                <h3>Правила <br/>конкурс <br/>просты</h3>
              </div>
              <div className="right-block item-regulations">
                <ul>
                  <li><span>1. </span>Ты выбираешь дату открытия границ РФ с другими странами (авиасообщение)</li>
                  <li><span>2. </span>Твои данные вносятся в децентрализованный реестр, в котором нельзя вносить
                    изменения
                  </li>
                  <li><span>3. </span>Если ты выбрал дату, которая совпала с той, что подтвердится в официальных
                    источниках*, то забираешь <a href="#">JACKPOT</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer">
          <div className="container">
            <div className="brand_wrapper">
              <a href="#" className="brand-link">BEFREE. BINGO</a>
            </div>
            <div className="flex-wrapper">
              <a href="#">Условия и положения</a>
              <a href="#">Политика конфиденциальности</a>
              <a href="#">Контакты</a>
              <a href="#">Блокчейн</a>
              <a href="#">Правила</a>
            </div>
          </div>
        </div>
      
      </Fragment>
    );
  })
);
