import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { Helmet } from "react-helmet-async";
import { Footer } from "../../components/Footer";
import { Sidebar } from "../../components/Sidebar";

import {
  faGear,
  faPlus,
  faRightFromBracket,
  faSchool,
  faSearch,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const StudentPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        if (decodedToken.rol !== "admin") {
          navigate("/login");
        }
      } catch (error) {
        console.error("Error al decodificar el token:", error);
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const sidebarLinks = [
    { text: "Dashboard", href: "/", icon: faSchool },
    { text: "Buscar", href: "/search", icon: faSearch },
    { text: "Grupos", href: "/group", icon: faUserGroup },
    { text: "Crear", href: "/create", icon: faPlus },
    { text: "Ajustes", href: "/settings", icon: faGear },
  ];
  const btnsLinks = [
    { text: "Cerrar sesión", href: "/", icon: faRightFromBracket },
  ];

  const services = {
    title: "Información",
    links: [
      { text: "Explorar", href: "/explore" },
      { text: "Articulos", href: "/articles" },
      { text: "Cursos", href: "/courses" },
      { text: "Soporte", href: "/support" },
      { text: "FAQS", href: "/faqs" },
      { text: "Reportar un problema", href: "/report" },
    ],
  };

  const company = {
    title: "Compañia",
    links: [
      { text: "Documentación", href: "/docs" },
      { text: "Manual de usuario", href: "/manual-user" },
      { text: "Manual técnico", href: "/manual-tech" },
    ],
  };

  const legal = {
    title: "Legal",
    links: [
      { text: "Términos y condiciones", href: "/terms" },
      { text: "Política de privacidad", href: "/policy" },
      { text: "Derechos de autor", href: "/rights-autor" },
    ],
  };

  const companyName = "FastLearn INC";
  const companyDescription = "Todos los derechos reservados";

  return (
    <>
      <Helmet>
        <title>Dashboard | Admin</title>
      </Helmet>
      <div className="flex h-screen">
        <Sidebar links={sidebarLinks} btns={btnsLinks} />
        <div className="flex flex-col w-full">
          <main className="p-4">
            <h1 className="text-xl font-bold">Admin</h1>
            <p className="mt-2">Bienvenido al panel de control Administrador.</p>
          </main>
          <Footer
            services={services}
            company={company}
            legal={legal}
            companyName={companyName}
            companyDescription={companyDescription}
          />
        </div>
      </div>
    </>
  );
};

export default StudentPage;
