import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Navbar } from "../Navbar";
import Hero from "./Hero";

// Componente Header que recibe varias propiedades
const Header = ({ images, interval, heroProps, menuItems }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [, setFade] = useState(true);

  useEffect(() => {
    if (images.length === 0) return;

    const changeImage = () => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 1000); // Duración de la transición (Igual a la duración de la transición CSS)
    };

    const intervalId = setInterval(changeImage, interval);

    return () => clearInterval(intervalId);
  }, [images, interval]);

  return (
    <header className="h-screen bg-cover bg-right bg-no-repeat sm:bg-cover sm:bg-right relative md:bg-right">
      {images.length > 0 &&
        images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-right transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      <div className="relative z-20">
        <Navbar
          imageLogo="/img/logo/logoWhite.webp"
          imageAlt="Logo"
          hrefImg="/"
          items={menuItems}
        />
      </div>
      <div className="relative">
        <Hero
          titleHero={heroProps.titleHero}
          textHero={heroProps.textHero}
          btn1Hero={heroProps.btn1Hero.label}
          btn2Hero={heroProps.btn2Hero.label}
          btn1Href={heroProps.btn1Hero.href}
          btn2Href={heroProps.btn2Hero.href}
        />
      </div>
    </header>
  );
};

// Definición de PropTypes para el componente Header
Header.propTypes = {
  // Propiedades para las imágenes de fondo
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  // Propiedad para el intervalo de cambio de imagen
  interval: PropTypes.number.isRequired,
  // Propiedades para el componente Hero
  heroProps: PropTypes.shape({
    titleHero: PropTypes.string.isRequired,
    textHero: PropTypes.string.isRequired,
    btn1Hero: PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }).isRequired,
    btn2Hero: PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  // Propiedades para los elementos del menú
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Header;
