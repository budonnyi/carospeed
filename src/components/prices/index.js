import React from 'react';

const Priceing = () => {
    return (
        <section id="priceing" className="light-bg">
            <div className="container">
                <div className="row">

                    <div className="section-title ">
                        <div className="text-center">
                            <h2>Стоимость оборудования</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 text-center">
                        <a href="http://handycars.com.ua/ru/product/carospeed-classic.html" target="_blank">
                            <div className="panel panel-default">
                                <div className="panel-body params">
                                    <h3 style={{
                                        fontWeight: 400,
                                        minHeight: 50
                                    }}
                                    >Carospeed Classic</h3>
                                    <h3>26 000 грн</h3>
                                    <img className="img-responsive" src="images/slider/sl-7.jpg" height="250"
                                         alt=""/>
                                    <p style={{margin: '0 5px'}}>Модель Standart с базовыми функциями газа и
                                        тормоза.
                                        Противооткатный тормоз</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-md-3 text-center">
                        <a href="http://handycars.com.ua/ru/product/carospeed-classic-e.html" target="_blank">
                            <div className="panel panel-default">
                                <div className="panel-body params">
                                    <h3 style={{
                                        fontWeight: 400,
                                        minHeight: 50,
                                        margin: '20px -5px',

                                    }}
                                    >Carospeed
                                        Classic
                                        E</h3>
                                    <h3>38 000 грн</h3>
                                    <img className="img-responsive" src="images/slider/sl-8.jpg" height="250"
                                         alt=""/>
                                    <p style={{
                                        margin: '0 5px'
                                    }}
                                    >Модель E с встроенными функциями индикатора
                                        правого и левого
                                        поворота, управления щетками стеклоочистителя, омывателя стекла,
                                        ближнего и дальнего
                                        света, звукового сигнала и круиз-контроля.</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-md-3 text-center">
                        <a href="http://handycars.com.ua/ru/product/carospeed-menox.html" target="_blank">
                            <div className="panel panel-default">
                                <div className="panel-body params">
                                    <h3 style={{
                                        fontWeight: 400,
                                        minHeight: 50
                                    }}
                                    >Carospeed Menox</h3>
                                    <h3>26 000 грн</h3>

                                    <img className="img-responsive" src="images/slider/sl-9.jpg" height="250"
                                         alt=""/>
                                    <p style={{
                                        margin: '0 5px'
                                    }}
                                    >Модель Standart с базовыми функциями газа и
                                        тормоза.
                                        Противооткатный тормоз</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-md-3 text-center">
                        <div className="panel panel-default">
                            <div className="panel-body params">
                                <h3 style={{
                                    fontWeight: 400,
                                    minHeight: 50
                                }}
                                >Установка</h3>
                                <h3>1 300 грн</h3>
                                <img className="img-responsive" src="images/install.png" height="250" alt=""/>
                                <p style={{
                                    margin: '0 5px'
                                }}
                                >Установка оборудования проводится опытным мастером.
                                    Возможен выезд
                                    мастера в другой город Украины.</p>
                            </div>
                        </div>
                    </div>
                    {/*</div>*/}
                </div>
            </div>
        </section>
    )
}

export default Priceing