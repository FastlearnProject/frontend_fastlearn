// utilsSideBar.js

// Importación de la función jwtDecode y los íconos de FontAwesome
import { jwtDecode } from "jwt-decode";
import {
  faSchool,
  faSearch,
  faNoteSticky,
  faCubes,
  faGear,
  faCalendar,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

/**
 * Función para obtener los enlaces de la barra lateral según el rol del usuario.
 * @param {string} token - El token JWT del usuario.
 * @returns {Array} - Lista de enlaces de la barra lateral.
 */
const getSidebarLinks = (token) => {
  // Decodificación del token JWT para obtener los datos del usuario
  const decodedToken = jwtDecode(token);
  
  // Enlaces para usuarios con rol "student"
  if (decodedToken.rol === "student") {
    return [
      { text: "Dashboard", href: "/student", icon: faSchool },
      { text: "Buscar", href: "/search", icon: faSearch },
      { text: "Personalizar", href: "/custom", icon: faCubes },
      { text: "Mis notas", href: "/my-notes", icon: faNoteSticky },
      { text: "Ajustes", href: "/settings", icon: faGear },
    ];
  } 
  
  // Enlaces para usuarios con rol "teacher"
  else if (decodedToken.rol === "teacher") {
    return [
      { text: "Dashboard", href: "/teacher", icon: faSchool },
      { text: "Asignar", href: "/assign", icon: faCalendar },
      { text: "Buscar", href: "/search", icon: faSearch },
      { text: "Mis temas", href: "/my-themes", icon: faSchool },
      { text: "Crear tema", href: "/create-theme", icon: faUserPlus },
      { text: "Ajustes", href: "/settings", icon: faGear },
    ];
  }  
  
  // Enlaces para usuarios con rol "admin"
  else if (decodedToken.rol === "admin") {
    return [
      { text: "Dashboard", href: "/admin", icon: faSchool },
      { text: "Asignar", href: "/assign", icon: faCalendar },
      { text: "Buscar", href: "/search", icon: faSearch },
      { text: "Mis temas", href: "/my-themes", icon: faSchool },
      { text: "Crear tema", href: "/create-theme", icon: faUserPlus },
      { text: "Ajustes", href: "/settings", icon: faGear },
    ];
  } 
  
  // Devolver un array vacío si no coincide ningún rol
  return [];
};

// Exportación de la función para su uso en otros módulos
export default getSidebarLinks;
