import React from 'react';
import Classes from './Contacts.module.css'

const Contacts = () => {
    return (
        <section id="contact" className={Classes.dark_bg}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="section-title">
                            <h2>Оставить сообщение</h2>
                            <p className="lead">Если Вас заинтересовала информация или у Вас остались вопросы,
                                воспользуйтесь формой
                                обратной связи!</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="section-text">
                            <h4>Наш адрес</h4>
                            <p>03028, г.Киев, <br/>ул.Салерно-Cлободская, 22</p>
                            <p><i className="fa fa-phone"></i> <a href="tel:+380962010191">+380 96 2010191</a></p>
                            <p><i className="fa fa-phone"></i> <a href="tel:+380660679771">+380 66 0679771</a></p>
                            <p><i className="fa fa-phone"></i> <a href="tel:+380994960655">+380 99 4960655</a></p>
                            <p><i className="fa fa-envelope"></i> <a
                                href="mailto:info@handycars.com.ua">info@handycars.com.ua</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <form id="form" action="index.php" method="post">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input name="name" type="text" className="form-control" placeholder="Ваше имя *"
                                               id="name"
                                               required
                                               data-validation-required-message="Пожалуйста, введите Ваше имя."/>
                                            <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input name="email" type="email" className="form-control"
                                               placeholder="Ваш E-mail *"
                                               id="email" required
                                               data-validation-required-message="Пожалуйста, введите Ваш e-mail."/>
                                            <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                <textarea rows="7" name="message" className="form-control"
                                          placeholder="Ваше сообщение *"
                                          id="message" required
                                          data-validation-required-message="Пожалуйста, введите Ваше сообщение и номер телефона для связи."></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <div id="success"></div>
                                    <button className="btn">Отправить</button>
                                </div>
                            </div>
                        </form>

                        <script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
                        <script src="mail/common.js"></script>

                    </div>
                </div>
            </div>
        </section>

);
};

export default Contacts;