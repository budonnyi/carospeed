import React from 'react';

const Media = () => {
    return (
        <section id="portfolio">
            <div className="container block-height">
                {/*<div className=" text-center">*/}
                <div className="section-title">
                    <h2>Медиа</h2>
                    <p>Фотографии и видео установленных устройств ручного управления.</p>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe src="//player.vimeo.com/video/128142292"></iframe>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe src="https://www.youtube.com/embed/-RjxrWNRZ-U?rel=0&amp;showinfo=0"></iframe>
                        </div>
                    </div>
                    {/*</div>*/}
                </div>

                <div className="row" style={{paddingTop: '1em'}}>
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <h3 className="text-center" style={{fontWeight: 500}}>{/*<?= $item['vehicle'] ?>*/}</h3>
                            <a href="images/portfolio_b/<?= $item['image'] ?>" class="fancybox">
                                <img className="img-responsive" src="images/portfolio/{/*<?= $item['image'] ?>*/}"
                                     alt=""/>
                            </a>
                            <p className="text-center" style={{paddingTop: 10}}>{/*<?= $item['device'] ?>*/}</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Media;