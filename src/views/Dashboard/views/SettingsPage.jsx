import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { jwtDecode } from "jwt-decode"; 
import { Sidebar } from "../../../components/Sidebar";
import { HeroDash } from "../../../components/HeroDash";
import { Footer } from "../../../components/Footer";

import {
  faGear,
  faPlus,
  faRightFromBracket,
  faSchool,
  faSearch,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const SettingsPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUserData = async (id_usuario) => {
      try {
        console.log(`Fetching data for user ID: ${id_usuario}`);
        const response = await fetch(
          `http://localhost:3000/usuario/${id_usuario}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.ok) {
          const userArray = await response.json();
          console.log("User data received:", userArray);
          if (userArray.length > 0) {
            setUserData(userArray[0]);
          } else {
            console.error("No se encontraron datos del usuario.");
          }
        } else {
          console.error(
            "Error al obtener los datos del usuario:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error en la conexión:", error);
      }
    };

    if (token) {
      try {
        const decodedToken = jwtDecode(token);

        const userId = decodedToken.id_usuario;

        if (decodedToken.rol !== "student" && decodedToken.rol !== "teacher" && decodedToken.rol !== "admin") {
          console.error("Rol no autorizado:", decodedToken.rol);
          navigate("/login");
        } else {
          fetchUserData(userId);
        }
      } catch (error) {
        console.error("Error al decodificar el token:", error);
        navigate("/login");
      }
    } else {
      console.error("Token no encontrado en localStorage.");
      navigate("/login");
    }
  }, [navigate, token]);

  const sidebarLinks = [
    { text: "Dashboard", href: "/student", icon: faSchool },
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
        <title>Ajustes | Sección</title>
      </Helmet>
      <div className="flex h-screen">
        <Sidebar links={sidebarLinks} btns={btnsLinks} />
        <div className="flex flex-col w-full">
          <main className="p-4">
            <h1 className="text-xl font-bold">Ajustes</h1>
            <HeroDash userData={userData} />
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

export default SettingsPage;
