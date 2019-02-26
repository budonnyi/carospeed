import React from 'react';
import Classes from './Advantages.module.css'

const Advantages = () => {
    return(
        <section id="about" className={Classes.dark_bg}>
            <div className="container block-height">
                <div className="row">
                    <div className="col-md-12 col-xs-12 text-center">
                        <div className="section-title">
                            <h2>О нас</h2>
                            <p>Почему необходимо купить именно у нас:</p>
                        </div>
                    </div>
                </div>

                <div className="row">

                    <div className="col-md-3 col-xs-12 col-sm-6 text-center">
                        <div className="mz-module-about">
                            <i className="fa fa-graduation-cap ot-circle" style={{fontSize: 40}}></i>
                            <h3>Надежность</h3>
                            <p>Надежность устройств Carospeed подтверждена многолетним опытом использования во всем
                                мире. </p>
                        </div>
                    </div>

                    <div className="col-md-3 col-xs-12 col-sm-6 text-center">
                        <div className="mz-module-about">
                            <i className="fa fa-thumbs-o-up ot-circle" style={{fontSize: 40}}></i>
                            <h3>Качество</h3>
                            <p>Производится ТОЛЬКО в Швеции. Шведское качество устройства в каждой детали.
                                Квалифицированный
                                мастер-установщик.</p>
                        </div>
                    </div>

                    <div className="col-md-3 col-xs-12 col-sm-6 text-center">
                        <div className="mz-module-about">
                            <i className="fa fa-umbrella ot-circle" style={{fontSize: 40}}></i>
                            <h3>Гарантия</h3>
                            <p>Гарантия производителя на все устройстваручного управления. Каждое устройство маркируется
                                специальным номером и вносится в базу данных производителя.</p>
                        </div>
                    </div>

                    <div className="col-md-3 col-xs-12 col-sm-6 text-center">
                        <div className="mz-module-about">
                            <i className="fa fa-wrench ot-circle" style={{fontSize: 40}}></i>
                            <h3>Инсталяция</h3>
                            <p>Устройство ручного управления педалями газа и тормоза устанавливается на <span
                                style={{color: 'red'}}><b>любой</b></span> автомобиль менее чем за 4 часа. Для установки
                                устройства ручного управления не сверлятся отвори в салоне. Внутренний дизайн остается
                                без
                                изменений</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advantages