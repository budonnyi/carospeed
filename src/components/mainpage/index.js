import React from 'react';
import {NavLink} from 'react-router-dom'

const MainPage = () => {
    return (
        <header>
            <div className="container">
                <div className="slider-container">
                    <div className="intro-text">
                        <div className="intro-lead-in">Надежное устройство ручного управления для водителей с
                            инвалидностью
                        </div>
                        <div className="intro-heading">Carospeed</div>
                        <NavLink to="/about" className="page-scroll btn btn-xl">Далее</NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default MainPage;