import PropTypes from "prop-types";

/**
 * Componente Hero
 * 
 * Muestra una sección con un título, un texto descriptivo y dos botones.
 * 
 * @param {string} titleHero - El título a mostrar en el componente.
 * @param {string} textHero - El texto descriptivo a mostrar en el componente.
 * @param {string} btn1Hero - El texto del primer botón.
 * @param {string} btn2Hero - El texto del segundo botón.
 * @param {string} btn1Href - El enlace del primer botón.
 * @param {string} btn2Href - El enlace del segundo botón.
 */
const Hero = ({
  titleHero,
  textHero,
  btn1Hero,
  btn2Hero,
  btn1Href,
  btn2Href,
}) => {
  return (
    <section className="flex flex-col my-36 mx-2 p-8 backdrop-blur-sm bg-black/70 rounded-lg shadow-lg md:shadow-none lg:backdrop-filter-none lg:bg-black/0 sm:m-20 xl:m-20 2xl:m-40">
      <h1 className="text-white text-lg font-bold w-full sm:text-4xl mb-4">
        {titleHero}
      </h1>
      <p className="text-white text-md w-full sm:text-lg md:w-3/6 2xl:w-4/5 mb-6">
        {textHero}
      </p>
      <div className="flex space-x-4">
        <a
          href={btn1Href}
          className="btn bg-btn-pri border-none text-secondary"
        >
          {btn1Hero}
        </a>
        <a
          href={btn2Href}
          className="btn bg-btn-sec border-none text-white hover:text-secondary"
        >
          {btn2Hero}
        </a>
      </div>
    </section>
  );
};

// Definición de PropTypes para el componente Hero
Hero.propTypes = {
  titleHero: PropTypes.string.isRequired, // Título del héroe
  textHero: PropTypes.string.isRequired,  // Texto descriptivo del héroe
  btn1Hero: PropTypes.string.isRequired,  // Texto del primer botón
  btn2Hero: PropTypes.string.isRequired,  // Texto del segundo botón
  btn1Href: PropTypes.string.isRequired,  // Enlace del primer botón
  btn2Href: PropTypes.string.isRequired,  // Enlace del segundo botón
};

export default Hero;
