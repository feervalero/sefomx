import React from "react";
import Headhunter from "../components/Headhunter";
import SiteSectionPruebasPsi from "../components/SiteSectionPruebasPsi";
import Quality from "../components/Quality";
import CulturaOrg from "../components/CulturaOrg";
import SiteSectionBanner from "../components/SiteSectionBanner";
import BienestarIntegral from "../components/BienestarIntegral";

class ServicesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <SiteSectionBanner />
        <Headhunter />
        <Quality />
        <SiteSectionPruebasPsi />
        <CulturaOrg />
        <BienestarIntegral />
      </>
    );
  }
}

export default ServicesPage;
