import React, { useState, useEffect, lazy, Suspense, useRef } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import Circuits from "./components/Circuits";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import "./styles/style.css"

const Location = lazy(() => import("./components/Location"))

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [showMap, setShowMap] = useState(false)
  const mapRef = useRef(null)

  useEffect(() => {
    setLandingPageData(JsonData);

    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries;
        if(entry.isIntersecting) {
          setShowMap(true);
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    );

    if(mapRef.current) observer.observe(mapRef.current)

      return () => observer.disconnect()

  }, []);

  return (
    <div >
      <Circuits/>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <div id="location" ref={mapRef}>
        { showMap && (
          <Suspense fallback={<div>Cargando mapa...</div>}>
            <Location data={landingPageData.Team} />
          </Suspense>
        ) }
      </div>
      <Testimonials data={landingPageData.Testimonials} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
