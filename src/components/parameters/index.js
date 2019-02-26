import React from 'react';
import {NavLink} from "react-router-dom";

const Parameters = () => {
    return (

        <section id="services" className="light-bg">
            <div className="container block-height">
                <div className="row">
                    <div className="col-md-7">
                        <div className="section-title">
                            <h2>Характеристики</h2>
                        </div>
                        <div className="">
                            <h3>Ручное управление Carospeed</h3>
                            <p className="">Это универсальное устройство монтируемое к кронштейну на полу. Позволяет
                                управлять
                                педалями газа и тормоза рукойЖ просто потянуть на себя для набора скорости и так же
                                просто
                                нажать для торможения.</p>
                            <h4>Модели Carospeed</h4>
                            <p className="">
                                - Модель Standart с базовыми функциями газа і тормоза. <br/>
                                - Модель Indicator с встроенными переключателями индикатора правого и левого
                                поворота <br/>
                                - Модель E с встроенными функциями индикатора правого и левого поворота, управления
                                щетками
                                стеклоочистителя, омывателя стекла, ближнего и дальнего света, звукового сигнала и
                                круиз-контроля.</p>
                            <h4>Противооткатный тормоз</h4>
                            <p className="">Каждое устойство Carospeed по умолчанию поставляется с встроенным
                                устройством
                                противооткатного тормоза (удерживает педаль тормоза в нажатом состоянии). Таким образом
                                руки
                                водителя свободны для регулировки магнитолы или выбора селектора переключения
                                передач.<br/>
                                    Круиз-контроль включается этой же кнопкой.</p>
                        </div>
                        <NavLink to="/contacts" className="page-scroll btn btn-xl">Купить</NavLink>
                    </div>
                    {/*<div style={{marginTop: 50}} className="col-md-5">*/}

                        {/*<div className="owl-portfolio owl-carousel">*/}

{/*/!**/}
                            {/*<?php for ($i = 1; $i <= 9; $i++) : ?>*/}
{/**!/*/}
                            {/*/!*<div className="item">*!/*/}
                                {/*/!*<div className="owl-portfolio-item">*!/*/}
                                    {/*/!*<img src="images/slider/sl-<?= $i ?>.jpg" className="img-responsive" alt="portfolio" />*!/*/}
                                {/*/!*</div>*!/*/}
                            {/*/!*</div>*!/*/}
{/*/!**/}
                            {/*<?php endfor ?>*/}
{/**!/*/}

                        {/*</div>*/}

                    {/*</div>*/}
                </div>
            </div>
        </section>
);
};

export default Parameters;