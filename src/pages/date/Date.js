import React, {Fragment} from 'react';
import {inject, observer} from "mobx-react";

export const Date = inject("store")(observer(({store, props}) => {
    return <Fragment>

        <div className="date-section">
            <div className="container">
                <div className="flex-wrapper">
                    <div className="history-block">
                        <h3 className="title">История ставок</h3>
                        <div className="history-inner">
                            <div className="list_date">
                                <div className="item_date">
                                    <p>Пополнение баланса на <b>135$</b></p>
                                    <span>04.05.2020</span>
                                </div>
                                <div className="item_date">
                                    <p>Пополнение баланса на <b>135$</b></p>
                                    <span>04.05.2020</span>
                                </div>
                                <div className="item_date">
                                    <p>Ставка 10$ на <b>01.07.20</b></p>
                                    <span>04.05.2020</span>
                                </div>
                            </div>
                            <ul className="pagination" role="menubar" aria-label="Pagination">
                                <li><a href=""><span>First</span></a></li>
                                <li><a href=""><span>Previous</span></a></li>
                                <li><a href="">1</a></li>
                                <li><a href="">2</a></li>
                                <li><a href="">3</a></li>
                                <li className="active"><a href="">4</a></li>
                                <li><a href=""><span>Next</span></a></li>
                                <li><a href=""><span>Last</span></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="info-block">
                        <h3 className="title balance-title">баланс: <span>150$</span></h3>
                        <p>Минимальная сумма пополнения баланса - 750 рублей.</p>
                        <div className="btn_wrapper">
                            <button className="btn btn-pour-in">Пополнить баланс</button>
                        </div>
                        <h3 className="title date-title">Последние Выбранные даты</h3>
                        <ul className="list_last-date">
                            <li className='item_last-date'>01.07.20</li>
                            <li className='item_last-date'>01.07.20</li>
                            <li className='item_last-date'>01.07.20</li>
                            <li className='item_last-date'>01.07.20</li>
                            <li className='item_last-date'>01.07.20</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container container_medium">
                <div className="field-wrapper">
                    <div className="field-inline-block">
                        <input type="text" pattern="[0-9]*" maxLength="1" size="1" className="date-field"/>
                    </div>
                    <div className="field-inline-block">
                        <input type="text" pattern="[0-9]*" maxLength="1" size="1" className="date-field"/>
                    </div>
                    <div className="field-inline-block">
                        <input type="text" pattern="[0-9]*" maxLength="1" size="1" className="date-field"/>
                    </div>
                    <div className="field-inline-block">
                        <input type="text" pattern="[0-9]*" maxLength="1" size="1" className="date-field"/>
                    </div>
                    <div className="field-inline-block">
                        <input type="text" pattern="[0-9]*" maxLength="1" size="1" className="date-field"/>
                    </div>
                    <div className="field-inline-block">
                        <input type="text" pattern="[0-9]*" maxLength="1" size="1" className="date-field"/>
                    </div>
                </div>
                <div className="btns_wrapper">
                    <button className="btn btn-bet">Введите сумму ставки</button>
                    <button className="btn btn-date active">Выбрать дату</button>
                </div>
            </div>
        </div>

        <div className="information-tooltip">
            <div className="close-icon">x</div>
            <p><span>i</span> Для этого вам необходимо пополнить баланс</p>
        </div>

    </Fragment>
}));
