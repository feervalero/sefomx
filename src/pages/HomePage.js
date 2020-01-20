import React from "react";
import SiteSectionCover from "../components/SiteSectionCover";
import SiteSectionGrid from "../components/SiteSectionGrid";
import SiteSectionCounter from "../components/SiteSectionCounter";
import SiteSectionCards from "../components/SiteSectionCards";
import Beneficios from '../components/Beneficios';
import ContactUs from "../components/ContactUs";
import ReactGA from "react-ga";


class HomePage extends React.Component {


  componentDidMount(){
      ReactGA.initialize("UA-150643977-2");
      ReactGA.pageview("/homepage")
  }
  render() {
    return (
      <>
        <SiteSectionCover />
        <SiteSectionCards />
        <SiteSectionCounter />
        
        <SiteSectionGrid /> {/* Seccion de bullets de servicios */}
        <Beneficios />
        <ContactUs />
      </>
    );
  }
}

export default HomePage;
