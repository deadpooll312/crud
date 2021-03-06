import React, {Fragment, useCallback} from 'react';
import {inject, observer} from "mobx-react";
import {useHistory} from "react-router";
import {Header} from '../../components/header';
import {Footer} from "../../components/footer";

export const TermsPage = inject('store')(observer(({store}) => {
  const history = useHistory();

  const home = useCallback(() => {
    history.push('/');
  }, [history]);

  return <Fragment>
    <Header/>
    <div className="secondary-page_block">
      <div className="container __medium">
        <h2>УСЛОВИЯ И ПОЛОЖЕНИЯ</h2>
        <p>
          Игра BeFree Bingo (далее - Игра) является аналогом тиражной лотереи, в которой розыгрыш призового фонда между
          участниками проводится в неопределенное время после выполнения прогноза по факту достижения выигрышного
          события.
        </p>

        <p>
          Выигрышным событием является фактическое выполнение первого коммерческого воздушного рейса из/в Российской
          Федерации с соответствующим документальным подтверждением открытия государственных границ. Обязательным
          условием наступления выигрышной ситуации является свершение обоих событий.
          Игра проводится с целью формирования внушительного призового фонда (джекпота) для победителя (победителей).
          Призовой фонд формируется из всех ставок участников за вычетом маркетинговых и реферальных издержек.
        </p>

        <p>
          Организатором игры (далее - Организатор) является E-Commerce Park (регистрационный номер 147666), а
          регулятором Игры являются республиканские органы государственного управления Curaçao, утвердившие условия ее
          проведения и несущие ответственность за учреждение и проведение лотереи.
          Ставка в Игре не подлежит использованию для проведения других розыгрышей и лотерей, а также передаче ее
          третьему лицу для какой-либо другой цели.
        </p>

        <p>
          Организатор Игры обязан до ее проведения в установленном законодательством порядке получить в
          Оперативно-аналитическом центре Curaçao экспертное заключение на комплексы программных, программно-аппаратных,
          аппаратных средств, используемых при проведении Игры, о защищенности от несанкционированного доступа
          посредством технологии блокчейн, а также модификации, копирования, хищения, уничтожения информации и иных
          подобных действий и обеспечить наличие такого экспертного заключения в течение периода проведения Игры.
        </p>

        <p>Пополнение баланса игрового счета осуществляется за безналичный расчет посредством пластиковых карт.
          Выполненная ставка подтверждает факт заключения договора между Организатором и участником Игры, в соответствии
          с которым участник лотереи соглашается с условиями проведения Игры, а признанный выигравшим участник Игры
          вправе требовать от организатора выдачу выигрыша.
          В Призовой фонд Игры направляется каждый доллар с каждой выполненной ставки (в эквиваленте) вне зависимости от
          количества выполненных ставок, числа участников и фактических победителей.
          К участию в Игре допускаются лица старше 18 лет, которые, выполняя ставки, соглашаются с тем, что они изучили
          настоящие Условия и Положения, а также Правила игры.
        </p>

        <p> Выплата денежных выигрышей по ставкам и реферальных вознаграждений на текущий игровой счет начинается в
          течение 24 часов после опубликования официальной информации в средствах массовой информации. Вывод средств с
          игрового счета можно выполнить через 24 часа после опубликования официальной информации и далее в течение 1
          месяца со дня проведения розыгрыша. По истечении этого срока претензии по невостребованным выигрышам не
          принимаются и указанные выигрыши передаются в соответствующий бюджет на цели Игры.
        </p>

        <p>Выигрыши выдаются в размере денежных сумм, определенных в перечне выигрышей по данному тиражу, без учета
          индексации и других форс-мажорных обстоятельств.
          Выигрыши по ставкам налогом не облагаются и в декларации о доходах не указываются.
          Утрата доступа к игровому счету лишает владельца билета права на получение выигрыша.
          Проверить результаты розыгрыша и изучить статистику ваших ставок вы можете в личном кабинете.
        </p>

        <p className="__gold">
          ВНИМАНИЕ! Пожалуйста, тщательно проверяйте правильность введенных данных! Неверно указанные данные при
          регистрации могут стать причиной отказа в верификации, что повлечет невозможность проведения выплаты выигрыша.
        </p>

      </div>
    </div>
    <Footer />
  </Fragment>
}));
