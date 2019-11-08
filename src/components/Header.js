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
                <header class="site-navbar site-navbar-target" role="banner" id="home">
                    <div class="container mb-3">
                        <div class="d-flex align-items-center">
                            <div class="site-logo mr-auto">
                            <a href="index.html">Sefo<span class="text-primary">.</span></a>
                            </div>
                            <div class="site-quick-contact d-none d-lg-flex ml-auto ">
                            <div class="d-flex site-info align-items-center mr-5">
                                <span class="block-icon mr-3"><span class="icon-map-marker"></span></span>
                                <span>Monterrey, Nuevo Leon<br /> Mexico</span>
                            </div>
                            <div class="d-flex site-info align-items-center">
                                <span class="block-icon mr-3"><span class="icon-clock-o"></span></span>
                                <span>Lunes - Viernes 8:00AM - 4:00PM <br />Sabado - Domingo Cerrado</span>
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
