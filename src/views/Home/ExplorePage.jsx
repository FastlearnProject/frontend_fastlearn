import { Helmet } from "react-helmet-async";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

const ExplorePage = () => {
  const headerImages = [
    "/img/header/HeaderExp1.webp",
    "/img/header/HeaderExp2.webp",
  ];

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/articles", label: "Artículos" },
    { href: "/signup", label: "Crear cuenta" },
    { href: "/support", label: "Soporte" },
  ];

  const headerProps = {
    titleHero: "¿Estás listo para explorar con nosotros?",
    textHero:
      "Esta sección es dedicada para que encuentres lo que te motive y te lleva a aprender",
    btn1Hero: {
      label: "Explorar",
      href: "/login",
    },
    btn2Hero: {
      label: "Top tendencias",
      href: "/course",
    },
  };

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
      { text: "Manual de usuario", href: "/manual-usewr" },
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
        <title>Explorar | FastLearn</title>
      </Helmet>

      <Header
        images={headerImages}
        interval={5000}
        heroProps={headerProps}
        menuItems={navItems}
      />

      <Footer
        services={services}
        company={company}
        legal={legal}
        companyName={companyName}
        companyDescription={companyDescription}
      />
    </>
  );
};

export default ExplorePage;
