import React, {Fragment} from 'react';
import {inject, observer} from "mobx-react";
import {SignUpPopup} from "../main/components/signup.popup";

export const Account = inject("store")(observer(({store, props}) => {
  return <Fragment>
    <div className="account-section">
      <div className="container">
        <div className="flex-wrapper">
          <SignUpPopup />
          
          <div className="date_block">
            <h3>Ты можешь <br/>выбрать любое <br/>количество дат!</h3>
            <div className="number_wrapper">
              <span>01. 07. 2020</span>
            </div>
          </div>
          
          <div className="info_block">
            <div className="info-item">
              <div className="img-wrapper">
                <svg width="52" height="60" viewBox="0 0 52 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M49.8675 9.71553L26.8987 0.179165C26.3233 -0.0596631 25.6766 -0.0597803 25.1013 0.179165L2.13254 9.71553C1.25773 10.0788 0.6875 10.9329 0.6875 11.8801V23.4729C0.6875 39.4353 10.3354 53.794 25.1143 59.8262C25.682 60.0579 26.3179 60.0579 26.8857 59.8262C41.6643 53.7941 51.3125 39.4355 51.3125 23.4729V11.8801C51.3125 10.9329 50.7424 10.0788 49.8675 9.71553ZM46.625 23.4729C46.625 37.0426 38.6562 49.5344 26 55.1105C13.682 49.6834 5.375 37.4103 5.375 23.4729V13.4448L26 4.88143L46.625 13.4448V23.4729ZM23.4095 31.373L33.4834 21.2992C34.3986 20.3839 35.8825 20.3838 36.7979 21.2992C37.7132 22.2145 37.7131 23.6985 36.7978 24.6137L25.0667 36.3448C24.1512 37.2602 22.6673 37.2599 21.7522 36.3448L15.2021 29.7947C14.2868 28.8793 14.2868 27.3954 15.2021 26.4801C16.1175 25.5649 17.6014 25.5648 18.5166 26.4801L23.4095 31.373Z"
                    fill="#FFB900"/>
                </svg>
              </div>
              <p>Твой выбор нельзя подделать или изменить!</p>
            </div>
            <div className="info-item">
              <div className="img-wrapper">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M29.4022 31.8626C29.6004 31.87 29.7991 31.875 29.9996 31.875C30.1854 31.875 30.3704 31.8709 30.5548 31.864C34.7516 31.9547 38.8793 33.0652 42.5263 35.0949C43.6574 35.7243 45.0847 35.3178 45.7141 34.1867C46.3436 33.0556 45.9371 31.6283 44.8059 30.9988C43.1269 30.0645 41.3622 29.2946 39.5403 28.6958C43.4212 25.7863 45.9371 21.1501 45.9371 15.9375C45.9371 7.14935 38.7873 0 29.9996 0C21.2114 0 14.0621 7.14935 14.0621 15.9375C14.0621 21.1533 16.5807 25.7922 20.4657 28.7013C16.9066 29.8727 13.5668 31.6951 10.6435 34.0993C5.28445 38.5075 1.55825 44.6562 0.151546 51.4128C-0.28928 53.53 0.238979 55.7043 1.60037 57.3788C2.95489 59.0446 4.96402 60 7.11184 60H25.4293C26.7234 60 27.773 58.9508 27.773 57.6562C27.773 56.3617 26.7234 55.3125 25.4293 55.3125H7.11184C6.11117 55.3125 5.50784 54.754 5.23684 54.4212C4.76947 53.8463 4.58865 53.0983 4.74063 52.3682C7.17456 40.6773 17.4916 32.1396 29.4022 31.8626ZM18.7496 15.9375C18.7496 9.73434 23.796 4.6875 29.9996 4.6875C36.2027 4.6875 41.2496 9.73434 41.2496 15.9375C41.2496 21.9539 36.5026 26.8817 30.5576 27.1738C30.3713 27.1701 30.1854 27.1678 29.9996 27.1678C29.8165 27.1678 29.6338 27.1706 29.4512 27.1738C23.5016 26.8872 18.7496 21.9571 18.7496 15.9375ZM59.9996 43.5736C60.0019 45.1392 59.3898 46.6104 58.277 47.7173L53.9177 52.0523C53.4604 52.5073 52.8626 52.7344 52.2652 52.7344C51.6632 52.7344 51.0613 52.5037 50.6031 52.0432C49.6903 51.1253 49.6944 49.6417 50.6122 48.7289L53.5341 45.8231H40.2521C37.6355 45.8231 35.5074 47.9517 35.5074 50.5678C35.5074 53.1839 37.6099 55.3125 40.1949 55.3125C41.489 55.3125 42.5386 56.3617 42.5386 57.6562C42.5386 58.9508 41.489 60 40.1949 60C37.674 60 35.3119 59.0158 33.5445 57.2282C31.7871 55.4512 30.8199 53.0859 30.8199 50.5678C30.8199 45.3667 35.051 41.1356 40.2521 41.1356H53.319L50.6168 38.4636C49.6967 37.5531 49.688 36.069 50.5985 35.1489C51.5085 34.2288 52.9926 34.2201 53.9131 35.1306L58.2656 39.4345C59.3816 40.5382 59.9973 42.0081 59.9996 43.5736Z"
                    fill="#FFB900"/>
                </svg>
              </div>
              <p>Каждый привлеченный участник получает 50% от выигрыша того, кто привлек и наоборот, в случае
                ПОБЕДЫ!</p>
            </div>
            <div className="info-item">
              <div className="img-wrapper">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M56.5719 3.42773C52.0015 -1.14258 44.5661 -1.14258 39.9958 3.42773L30.8277 12.5954C27.5203 15.9032 26.5146 20.8603 28.2038 25.1656L25.1652 28.2047C20.8594 26.5155 15.9023 27.5212 12.595 30.8286L3.42641 39.9966C-1.14344 44.5665 -1.14344 52.0024 3.42641 56.5727C7.99673 61.1426 15.4322 61.1426 20.0025 56.5727L29.1706 47.4046C32.4784 44.0968 33.4836 39.1397 31.7945 34.8344L34.8331 31.7958C39.1732 33.4982 44.1202 32.455 47.4033 29.1714L56.5719 20.0034C61.1417 15.4335 61.1417 7.99759 56.5719 3.42773ZM27.513 45.7471L18.3449 54.9147C14.6805 58.5796 8.74929 58.58 5.08443 54.9147C1.41958 51.2503 1.41912 45.3195 5.08443 41.6542L14.2525 32.4861C16.6462 30.092 20.1201 29.2062 23.3108 30.0591L20.0515 33.3183C18.8004 33.4964 17.6377 34.0732 16.7382 34.9731L7.57146 44.1408C5.28356 46.4273 5.2831 50.1411 7.57101 52.4277C9.85754 54.7156 13.5714 54.7165 15.8584 52.4281L25.0265 43.2614C25.926 42.3615 26.5032 41.1987 26.6808 39.9481L29.9405 36.6888C30.7929 39.8795 29.9071 43.353 27.513 45.7471ZM18.3962 41.602C19.3369 42.5436 20.6251 43.0499 22.008 42.9643L14.2003 50.7706C12.8298 52.142 10.6 52.1425 9.22857 50.7701C7.85757 49.4 7.85665 47.1703 9.22903 45.7988L17.0353 37.9912C16.9488 39.3842 17.4628 40.6696 18.3962 41.602ZM24.7307 38.5831L23.3684 39.9449C22.4566 40.8572 20.9702 40.8618 20.0538 39.9445C19.1396 39.0317 19.1396 37.5449 20.0542 36.6307L36.6298 20.0551C37.5417 19.1432 39.0281 19.1382 39.9445 20.0555C40.8587 20.9688 40.8587 22.4551 39.9441 23.3693L24.7307 38.5831ZM45.7462 27.5139C43.3521 29.9075 39.8786 30.7938 36.688 29.9409L39.9473 26.6817C41.1974 26.5041 42.3597 25.9273 43.2592 25.0282C43.2596 25.0278 43.2601 25.0273 43.2601 25.0269L52.4268 15.8592C54.7143 13.5732 54.7156 9.85931 52.4273 7.57233C50.5372 5.68085 47.6079 5.30914 45.304 6.66824C44.7465 6.99692 44.5615 7.71561 44.8902 8.27316C45.2193 8.83072 45.938 9.01611 46.4951 8.68744C47.8776 7.8717 49.6354 8.09464 50.7697 9.22989C52.1412 10.6004 52.1416 12.8302 50.7697 14.2017L42.9635 22.0088C43.0495 20.6163 42.5359 19.3309 41.6021 18.398C40.7181 17.5131 39.5412 17.0256 38.2874 17.0256C38.1881 17.0256 38.0892 17.0302 37.9908 17.0361L39.9962 15.0307C40.454 14.5729 40.454 13.8309 39.9962 13.3731C39.5385 12.9153 38.7964 12.9153 38.3387 13.3731L34.9723 16.739C34.0723 17.639 33.4955 18.8017 33.3175 20.0523L30.0582 23.3116C29.2054 20.121 30.0916 16.647 32.4853 14.2534L41.6533 5.0853C45.3177 1.4209 51.249 1.41998 54.9143 5.0853C58.5787 8.75015 58.5792 14.6809 54.9143 18.3463L45.7462 27.5139Z"
                    fill="#FFB900"/>
                </svg>
              </div>
              <p>Данные всех пользователей в распределенном реестре. Их нельзя удалить или подделать данные публично
                доступны по ссылке:</p>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  
  </Fragment>
}));
