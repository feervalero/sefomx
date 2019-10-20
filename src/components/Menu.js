import React from 'react';

export default function Menu() {
    return (
        <div class="container">
            <div class="menu-wrap d-flex align-items-center">
                <span class="d-inline-block d-lg-none"><a href="#" class="text-black site-menu-toggle js-menu-toggle py-5"><span class="icon-menu h3 text-black"></span></a></span>
                <nav class="site-navigation text-left mr-auto d-none d-lg-block" role="navigation">
                    <ul class="site-menu main-menu js-clone-nav mr-auto ">
                    <li class="active"><a href="index.html" class="nav-link">Home</a></li>
                    <li><a href="services.html" class="nav-link">Services</a></li>
                    <li><a href="projects.html" class="nav-link">Projects</a></li>
                    <li><a href="about.html" class="nav-link">About</a></li>
                    <li><a href="blog.html" class="nav-link">Blog</a></li>
                    <li><a href="contact.html" class="nav-link">Contact</a></li>
                    </ul>
                </nav>
                <div class="top-social ml-auto">
                    <a href="#"><span class="icon-facebook"></span></a>
                    <a href="#"><span class="icon-twitter"></span></a>
                    <a href="#"><span class="icon-linkedin"></span></a>
                </div>
            </div>
        </div>
    )
}
