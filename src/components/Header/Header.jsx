import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Navbar, Hero} from "../";

// Props del header

const Header = ({ images, interval, heroProps, menuItems }) => {
  // Creación de Slider automático con use state y use Effect
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [, setFade] = useState(true);

  useEffect(() => {
    if (images.length === 0) return;

    // Constante de cambio de imagen
    const changeImage = () => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 1000); // Duración de la transición (Igual a CSS transition duration)
    };

    const intervalId = setInterval(changeImage, interval);

    return () => clearInterval(intervalId);
  }, [images, interval]);

  return (
    <header className="h-screen bg-cover bg-right bg-no-repeat sm:bg-cover sm:bg-right relative md:bg-right">
      {/* Ciclo por cada elemento que contenga una imagen */}
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
        {/* Importar el navbar y pasar propiedades por encima del Header */}
        <Navbar
          imageLogo="/img/logo/logoWhite.webp"
          imageAlt="Logo"
          hrefImg="/"
          items={menuItems}
        />
      </div>
      <div className="relative">
        {/* Importar Sección Hero con propiedades dinámicas del */}
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

Header.propTypes = {
  // Props para las imagenes, intervalos
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  interval: PropTypes.number.isRequired,

  // Props para la sección Hero
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
  
  // Props para los items del navbar
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Header;
