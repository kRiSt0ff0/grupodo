import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Contact } from "./components/contact";
import { Offer } from "./components/offer";
import { Confidence } from "./components/confidence";
import { Insurance } from "./components/insurance";
import { Ramos } from "./components/ramos";
import { Types } from "./components/types";
import { Rinsurance } from "./components/rinsurance";
import { Finance } from "./components/finance";
import { Oservices } from "./components/oservices";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import WhatsAppButton from './components/WhatsAppButton';
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Offer data={landingPageData.Offer} />
      <Confidence data={landingPageData.Confidence} />
      <Insurance data={landingPageData.Insurance} />
      <Ramos data={landingPageData.Ramos} />
      <Types data={landingPageData.Types} />
      <Rinsurance data={landingPageData.Rinsurance} />
      <Finance data={landingPageData.Finance} />
      <Oservices data={landingPageData.Oservices} />
      <Contact data={landingPageData.Contact} />
      <WhatsAppButton />
    </div>
  );
};

export default App;
