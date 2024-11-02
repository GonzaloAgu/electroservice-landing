import { useEffect, useState } from "react";

export default function BrandLogo() {
  const [showBrand, setShowBrand] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBrand(true);
      } else {
        setShowBrand(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showBrand) {
    return (
      <div className="brand-subtitle">
        <span>Eduardo Price 19, Trelew</span>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column">
      <div>
        <a
          className={`navbar-brand`}
          href="#page-top"
          style={{ zIndex: 1 }}
        >
          <span>ELECTROSERVICE</span>
        </a>
      </div>
      <div>
        <span style={{ lineHeight: 2 }}>Eduardo Price 19, Trelew</span>
      </div>
    </div>
  );

  /* return (
    <div className="d-flex flex-column">
      <a
        className={`navbar-brand scroll-element ${showBrand ? "show" : ""}`}
        href="#page-top"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <span>ELECTROSERVICE</span>
      </a>
      <span style={{ lineHeight: 2 }}>
        {showBrand ? "" : "Encontranos en Eduardo Price 19, Trelew"}
      </span>
    </div>
  ); */
}
