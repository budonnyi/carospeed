import React from 'react';

const Downloads = () => {
    return (
        <section id="manuals" style={{background: '#f1f1f1'}}>
            <div className="container block-height">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="section-title">
                            <h2>Информация для скачивания</h2>
                            <p>Нажмите на ссылку для скачивания:</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="owl-partners owl-carousel">

                            {/*<?php foreach ($brochures as $item) : ?>*/}
                            <div className="item">
                                <div className="partner-logo">
                                    <a className="text-center" href="images/downloads/*//<?= $item['link'] ?>*/"
                                       target="_blank">
                                        <img className="text-center"
                                             src="images/downloads/{*<?= $item['image'] ?>"
                                             style={{margin: '0 auto'}} />
{/*
                                             <?= $item['name'] ?>
*/}
                                    </a>
                                </div>
                            </div>
                            {/*<?php endforeach ?>*/}

                        </div>
                    </div>
                </div>
            </div>
        </section>
)
}

export default Downloads;