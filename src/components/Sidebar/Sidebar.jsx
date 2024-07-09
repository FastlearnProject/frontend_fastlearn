import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

/**
 * Componente Sidebar
 * 
 * Muestra un sidebar con enlaces y botones, incluyendo funcionalidad para expandirse y contraerse.
 * 
 * @param {Object} props - Propiedades del componente Sidebar.
 * @param {Array} props.links - Lista de enlaces del sidebar, cada uno con href, texto y icono.
 * @param {Array} props.btns - Lista de botones del sidebar, cada uno con texto y icono.
 */
const Sidebar = ({ links, btns }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  // Función para alternar la apertura y cierre del sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Función para manejar el logout, limpia el token y recarga la página
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <aside className="flex h-screen">
      <div
        className={`relative inset-y-0 left-0 z-50 bg-primary shadow-lg transform ${
          isOpen ? "w-64" : "w-16 sm:w-20"
        } transition-all duration-300 flex flex-col justify-between text-white`}
      >
        {/* Barra superior del sidebar */}
        <div className="flex items-center justify-start p-4">
          {/* Botón para abrir/cerrar el sidebar */}
          <button
            onClick={toggleSidebar}
            className="text-gray-600 focus:outline-none"
          >
            <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
          </button>
        </div>

        {/* Navegación con enlaces del sidebar */}
        <nav className="p-4 h-full flex flex-col justify-start">
          <ul>
            {links.map((link, index) => (
              <li key={index} className="mb-6">
                <a
                  href={link.href}
                  className="flex justify-start items-center hover:text-gray-300"
                >
                  <FontAwesomeIcon icon={link.icon} className="w-5 h-5" />
                  <span className={`ml-4 ${isOpen ? "" : "hidden"}`}>
                    {link.text}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Navegación con botones del sidebar */}
        <nav className="flex flex-col justify-center items-start p-4">
          <ul>
            {btns.map((btn, index) => (
              <li key={index} className="mb-4">
                <button
                  onClick={
                    btn.text === "Cerrar sesión" ? handleLogout : undefined
                  }
                  className="flex justify-center items-center hover:text-gray-300"
                >
                  <FontAwesomeIcon icon={btn.icon} className="w-5 h-5" />
                  <span className={`ml-4 ${isOpen ? "" : "hidden"}`}>
                    {btn.text}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

// Definición de PropTypes para el componente Sidebar
Sidebar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired, // URL del enlace
      text: PropTypes.string.isRequired, // Texto del enlace
      icon: PropTypes.object.isRequired, // Icono del enlace (object de FontAwesomeIcon)
    })
  ).isRequired,

  btns: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired, // Texto del botón
      icon: PropTypes.object.isRequired, // Icono del botón (object de FontAwesomeIcon)
    })
  ).isRequired,
};

export default Sidebar;
