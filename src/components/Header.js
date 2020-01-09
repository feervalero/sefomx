import React from 'react';
import Menu from '../components/Menu';
export default class Header extends React.Component {
    render() {
        return (
            <>
            <div className="site-wrap" id="home-section">
                <div className="site-mobile-menu site-navbar-target">
                    <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                        <span className="icon-close2 js-menu-toggle"></span>
                    </div>
                    </div>
                    <div className="site-mobile-menu-body"></div>
                </div>
                <header className="site-navbar site-navbar-target" role="banner" id="home">
                    <div className="container mb-3">
                        <div className="d-flex align-items-center">
                            <div className="site-logo mr-auto">
                            <a href="index.html">SEF<span className="text-primary">.</span></a>
                            </div>
                            <div className="site-quick-contact d-none d-lg-flex ml-auto ">
                            <div className="d-flex site-info align-items-center mr-5">
                                <span className="block-icon mr-3"><span className="icon-map-marker"></span></span>
                                <span>Monterrey, Nuevo Leon<br /> Mexico</span>
                            </div>
                            <div className="d-flex site-info align-items-center">
                                <span className="block-icon mr-3"><span className="icon-clock-o"></span></span>
                                <span>Lunes - Viernes 9:00AM - 6:00PM <br />Sabado - Domingo Cerrado</span>
                            </div>
                            </div>
                        </div>
                    </div>
                    <Menu />     
                </header>   
            </div>
            </>
        )
    }
}
