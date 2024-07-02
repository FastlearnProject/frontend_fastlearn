import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ links, btns }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () =>{
    localStorage.removeItem('token');
    window.location.reload();
  }

  return (
    <aside className="flex h-screen">
      <div className={`relative inset-y-0 left-0 z-50 bg-primary shadow-lg transform ${isOpen ? 'w-64' : 'w-16 sm:w-20'} transition-all duration-300 flex flex-col justify-between text-white`}>
        <div className="flex items-center justify-start p-4">
          <button onClick={toggleSidebar} className="text-gray-600 focus:outline-none">
            <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
          </button>
        </div>
        <nav className="p-4 h-full flex flex-col justify-start">
          <ul>
            {links.map((link, index) => (
              <li key={index} className="mb-6">
                <a href={link.href} className="flex justify-start items-center hover:text-gray-300">
                  <FontAwesomeIcon icon={link.icon} className="w-5 h-5" />
                  <span className={`ml-4 ${isOpen ? '' : 'hidden'}`}>{link.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="flex flex-col justify-center items-start p-4">
          <ul>
            {btns.map((btn, index) => (
              <li key={index} className="mb-4">
                <button onClick={btn.text === 'Cerrar sesión' ? handleLogout : undefined } className="flex justify-center items-center hover:text-gray-300">
                  <FontAwesomeIcon icon={btn.icon} className="w-5 h-5" />
                  <span className={`ml-4 ${isOpen ? '' : 'hidden'}`}>{btn.text}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      icon: PropTypes.object.isRequired,
    })
  ).isRequired,

  btns: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      icon: PropTypes.object.isRequired,
    })
  ).isRequired,
};

export default Sidebar;
