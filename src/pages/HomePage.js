import React, { Component } from 'react'
import Header from '../components/Header';
import SiteSectionCover from '../components/SiteSectionCover';
import SiteSectionGrid from '../components/SiteSectionGrid';
import SiteSectionBanner from '../components/SiteSectionBanner';
import SiteSectionCounter from '../components/SiteSectionCounter';
import SiteSectionBanner2 from '../components/SiteSectionBanner2';
import SiteSectionCarousel from '../components/SiteSectionCarousel';
import SiteSectionProgress from '../components/SiteSectionProgress';
import SiteSectionCards from '../components/SiteSectionCards';
import SiteSectionCards2 from '../components/SiteSectionCards2';
import SiteSectionColumns from '../components/SiteSectionColumns';

class HomePage extends React.Component {
    render() {
        return (
            <>
            
                

                
                
                
                <SiteSectionCover />
                <SiteSectionCards />
                <SiteSectionProgress />
                <SiteSectionBanner2 />
                <SiteSectionCounter />
                <SiteSectionCarousel />
                <SiteSectionGrid />
                <SiteSectionCards2 />
                <SiteSectionBanner />                
                <SiteSectionColumns />
                
                



    
                

            </>
        )
    }
}

export default HomePage;
