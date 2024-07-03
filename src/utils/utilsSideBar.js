// utilsSideBar.js
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

const getSidebarLinks = (token) => {
  const decodedToken = jwtDecode(token);
  if (decodedToken.rol === "student") {
    return [
      { text: "Dashboard", href: "/student", icon: faSchool },
      { text: "Buscar", href: "/search", icon: faSearch },
      { text: "Personalizar", href: "/custom", icon: faCubes },
      { text: "Mis notas", href: "/my-notes", icon: faNoteSticky },
      { text: "Ajustes", href: "/settings", icon: faGear },
    ];
  } else if (decodedToken.rol === "teacher") {
    return [
      { text: "Dashboard", href: "/teacher", icon: faSchool },
      { text: "Asignar", href: "/assign", icon: faCalendar },
      { text: "Buscar", href: "/search", icon: faSearch },
      { text: "Mis temas", href: "/my-themes", icon: faSchool },
      { text: "Crear tema", href: "/create-theme", icon: faUserPlus },
      { text: "Ajustes", href: "/settings", icon: faGear },
    ];
  }  else if (decodedToken.rol === "admin") {
    return [
      { text: "Dashboard", href: "/teacher", icon: faSchool },
      { text: "Asignar", href: "/assign", icon: faCalendar },
      { text: "Buscar", href: "/search", icon: faSearch },
      { text: "Mis temas", href: "/my-themes", icon: faSchool },
      { text: "Crear tema", href: "/create-theme", icon: faUserPlus },
      { text: "Ajustes", href: "/settings", icon: faGear },
    ];
  } 
  return [];
};

export default getSidebarLinks;
