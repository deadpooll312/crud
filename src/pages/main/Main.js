import React, {Fragment, useRef, useCallback, useState, useEffect} from "react";
import {inject, observer} from "mobx-react";
import {useHistory} from "react-router";
import {LoginPopup} from "./components/login.popup";
import {SignUpPopup} from "./components/signup.popup";

export const MainPage = inject("store")(observer(({store}) => {
    const [show, setShow] = useState(null);
    const history = useHistory();
    const banner = useRef(null);
    const programRef = useRef(null);

    const scrollToRef = (ref) => window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });

    useEffect(() => store.auth.getUser(), [])
    
    const scroll = useCallback((value) => {
      scrollToRef(value);
    }, [banner, programRef]);
    
    const push = useCallback((path) => {
      history.push(`/${path}`);
    }, [history]);
    
    const toggleModal = useCallback(value => setShow(value), []);
  
    const getDate = useCallback(() => {
      if (store.auth.user.email) {
        history.push('/date');
      } else {
        setShow('signup');
      }
    }, []);
    
    return (
      <Fragment>
        <LoginPopup show={show === 'login'} toggleModal={toggleModal}/>
        <SignUpPopup show={show === 'signup'} toggleModal={toggleModal}/>
        
        <div className="header">
          <div className="container">
            <div className="flex-wrapper">
              <div className="links-wrapper_header">
                <a href="#" className="brand-link">BEFREE. BINGO</a>
                <a href="#" className="link-item" onClick={() => scroll(banner)}>Сделать ставку</a>
                <a href="#" className="link-item" onClick={() => scroll(banner)}>Правила</a>
                <a href="#" className="link-item" onClick={() => scroll(programRef)}>Реферальная программа</a>
              </div>
              
              <div className="registration-wrapper_header">
                {!store.auth.user.email ? <Fragment>
                    <button className="btn btn-sing-in" onClick={() => setShow('signup')}>Регистрация</button>
                    <button className="btn btn-log-in" onClick={() => setShow('login')}>Вход</button>
                  </Fragment>
                  : <button className="btn btn-log-in" onClick={() => push('date')}>Сделать ставку</button>}
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
            {/*<h4>Твой шанс воплотить свои мечты!</h4>*/}
            
            {/*<div className="form_main-banner">*/}
            {/*  <form action="">*/}
            {/*    <input className="field_form" type="text" placeholder="ФИО"/>*/}
            {/*    <input className="field_form" type="text" placeholder="E-mail"/>*/}
            {/*    <input className="field_form" type="text" placeholder="Телефон"/>*/}
            {/*    <div className="btn-wrapper">*/}
            {/*      <button className="btn btn-save">Сохранить</button>*/}
            {/*    </div>*/}
            {/*  </form>*/}
            {/*</div>*/}
            
            <div className="btn_wrapper">
              <button className="btn btn-banner" onClick={() => getDate()}>Угадай дату и забирай деньги</button>
            </div>
          </div>
        </div>
        
        <div className="to-win_section">
          <div className="container">
            <h3 className="title_to-win">Чтобы выиграть</h3>
            <div className="flex-wrapper">
              
              <div className="item_to-win">
                <div className="item-inner_block">
                  <div className="img-wrapper">
                    <svg width="84" height="92" viewBox="0 0 84 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_d)">
                        <path
                          d="M65.8675 21.7155L42.8987 12.1792C42.3233 11.9403 41.6766 11.9402 41.1013 12.1792L18.1325 21.7155C17.2577 22.0788 16.6875 22.9329 16.6875 23.8801V35.4729C16.6875 51.4353 26.3354 65.794 41.1143 71.8262C41.682 72.0579 42.3179 72.0579 42.8857 71.8262C57.6643 65.7941 67.3125 51.4355 67.3125 35.4729V23.8801C67.3125 22.9329 66.7424 22.0788 65.8675 21.7155ZM62.625 35.4729C62.625 49.0426 54.6562 61.5344 42 67.1105C29.682 61.6834 21.375 49.4103 21.375 35.4729V25.4448L42 16.8814L62.625 25.4448V35.4729ZM39.4095 43.373L49.4834 33.2992C50.3986 32.3839 51.8825 32.3838 52.7979 33.2992C53.7132 34.2145 53.7131 35.6985 52.7978 36.6137L41.0667 48.3448C40.1512 49.2602 38.6673 49.2599 37.7522 48.3448L31.2021 41.7947C30.2868 40.8793 30.2868 39.3954 31.2021 38.4801C32.1175 37.5649 33.6014 37.5648 34.5166 38.4801L39.4095 43.373Z"
                          fill="#E39600"/>
                      </g>
                      <defs>
                        <filter id="filter0_d" x="-4" y="0" width="92" height="92" filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                          <feColorMatrix in="SourceAlpha" type="matrix"
                                         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                          <feOffset dy="4"/>
                          <feGaussianBlur stdDeviation="8"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0.890196 0 0 0 0 0.588235 0 0 0 0 0 0 0 0 1 0"/>
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <h4>Lorem ipsum dolor</h4>
                  <p>Твой выбор нельзя подделать или изменить!</p>
                </div>
              </div>
              
              <div className="item_to-win">
                <div className="item-inner_block">
                  <div className="img-wrapper">
                    <svg width="84" height="92" viewBox="0 0 84 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_d)">
                        <path
                          d="M65.8675 21.7155L42.8987 12.1792C42.3233 11.9403 41.6766 11.9402 41.1013 12.1792L18.1325 21.7155C17.2577 22.0788 16.6875 22.9329 16.6875 23.8801V35.4729C16.6875 51.4353 26.3354 65.794 41.1143 71.8262C41.682 72.0579 42.3179 72.0579 42.8857 71.8262C57.6643 65.7941 67.3125 51.4355 67.3125 35.4729V23.8801C67.3125 22.9329 66.7424 22.0788 65.8675 21.7155ZM62.625 35.4729C62.625 49.0426 54.6562 61.5344 42 67.1105C29.682 61.6834 21.375 49.4103 21.375 35.4729V25.4448L42 16.8814L62.625 25.4448V35.4729ZM39.4095 43.373L49.4834 33.2992C50.3986 32.3839 51.8825 32.3838 52.7979 33.2992C53.7132 34.2145 53.7131 35.6985 52.7978 36.6137L41.0667 48.3448C40.1512 49.2602 38.6673 49.2599 37.7522 48.3448L31.2021 41.7947C30.2868 40.8793 30.2868 39.3954 31.2021 38.4801C32.1175 37.5649 33.6014 37.5648 34.5166 38.4801L39.4095 43.373Z"
                          fill="#E39600"/>
                      </g>
                      <defs>
                        <filter id="filter0_d" x="-4" y="0" width="92" height="92" filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                          <feColorMatrix in="SourceAlpha" type="matrix"
                                         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                          <feOffset dy="4"/>
                          <feGaussianBlur stdDeviation="8"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0.890196 0 0 0 0 0.588235 0 0 0 0 0 0 0 0 1 0"/>
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <h4>Lorem ipsum dolor</h4>
                  <p>Твой выбор нельзя подделать или изменить!</p>
                </div>
              </div>
              
              <div className="item_to-win">
                <div className="item-inner_block">
                  <div className="img-wrapper">
                    <svg width="84" height="92" viewBox="0 0 84 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_d)">
                        <path
                          d="M65.8675 21.7155L42.8987 12.1792C42.3233 11.9403 41.6766 11.9402 41.1013 12.1792L18.1325 21.7155C17.2577 22.0788 16.6875 22.9329 16.6875 23.8801V35.4729C16.6875 51.4353 26.3354 65.794 41.1143 71.8262C41.682 72.0579 42.3179 72.0579 42.8857 71.8262C57.6643 65.7941 67.3125 51.4355 67.3125 35.4729V23.8801C67.3125 22.9329 66.7424 22.0788 65.8675 21.7155ZM62.625 35.4729C62.625 49.0426 54.6562 61.5344 42 67.1105C29.682 61.6834 21.375 49.4103 21.375 35.4729V25.4448L42 16.8814L62.625 25.4448V35.4729ZM39.4095 43.373L49.4834 33.2992C50.3986 32.3839 51.8825 32.3838 52.7979 33.2992C53.7132 34.2145 53.7131 35.6985 52.7978 36.6137L41.0667 48.3448C40.1512 49.2602 38.6673 49.2599 37.7522 48.3448L31.2021 41.7947C30.2868 40.8793 30.2868 39.3954 31.2021 38.4801C32.1175 37.5649 33.6014 37.5648 34.5166 38.4801L39.4095 43.373Z"
                          fill="#E39600"/>
                      </g>
                      <defs>
                        <filter id="filter0_d" x="-4" y="0" width="92" height="92" filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                          <feColorMatrix in="SourceAlpha" type="matrix"
                                         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                          <feOffset dy="4"/>
                          <feGaussianBlur stdDeviation="8"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0.890196 0 0 0 0 0.588235 0 0 0 0 0 0 0 0 1 0"/>
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <h4>Lorem ipsum dolor</h4>
                  <p>Твой выбор нельзя подделать или изменить!</p>
                </div>
              </div>
              
              <div className="item_to-win">
                <div className="item-inner_block">
                  <div className="img-wrapper">
                    <svg width="84" height="92" viewBox="0 0 84 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_d)">
                        <path
                          d="M65.8675 21.7155L42.8987 12.1792C42.3233 11.9403 41.6766 11.9402 41.1013 12.1792L18.1325 21.7155C17.2577 22.0788 16.6875 22.9329 16.6875 23.8801V35.4729C16.6875 51.4353 26.3354 65.794 41.1143 71.8262C41.682 72.0579 42.3179 72.0579 42.8857 71.8262C57.6643 65.7941 67.3125 51.4355 67.3125 35.4729V23.8801C67.3125 22.9329 66.7424 22.0788 65.8675 21.7155ZM62.625 35.4729C62.625 49.0426 54.6562 61.5344 42 67.1105C29.682 61.6834 21.375 49.4103 21.375 35.4729V25.4448L42 16.8814L62.625 25.4448V35.4729ZM39.4095 43.373L49.4834 33.2992C50.3986 32.3839 51.8825 32.3838 52.7979 33.2992C53.7132 34.2145 53.7131 35.6985 52.7978 36.6137L41.0667 48.3448C40.1512 49.2602 38.6673 49.2599 37.7522 48.3448L31.2021 41.7947C30.2868 40.8793 30.2868 39.3954 31.2021 38.4801C32.1175 37.5649 33.6014 37.5648 34.5166 38.4801L39.4095 43.373Z"
                          fill="#E39600"/>
                      </g>
                      <defs>
                        <filter id="filter0_d" x="-4" y="0" width="92" height="92" filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                          <feColorMatrix in="SourceAlpha" type="matrix"
                                         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                          <feOffset dy="4"/>
                          <feGaussianBlur stdDeviation="8"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0.890196 0 0 0 0 0.588235 0 0 0 0 0 0 0 0 1 0"/>
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <h4>Lorem ipsum dolor</h4>
                  <p>Твой выбор нельзя подделать или изменить!</p>
                </div>
              </div>
            
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
                <h3>Правила <br/>конкурса <br/>просты</h3>
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
        
        <div className="referral_section" ref={programRef}>
          <div className="container container_medium">
            <h3>реферальная программа</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.</p>
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
