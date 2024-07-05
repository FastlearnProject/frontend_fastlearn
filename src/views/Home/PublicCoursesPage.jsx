import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AlertWarning } from "../../components/Alerts"
import { Breadcrumbs } from "../../components/Layout/Breadcrumbs"
import { Footer } from "../../components/Footer";
import { Loader } from "../../components/Loader";
import { FilterBar } from "../../components/Layout/FilterBar";

const URL = import.meta.env.VITE_BACKEND_URL;

const PublicCoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    name: "",
    category: "",
    tags: "",
  });

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${URL}/cursos-free/`);
        if (response.ok) {
          const responseData = await response.json();
          const coursesData = Array.isArray(responseData) ? responseData[0] : [];
          setCourses(coursesData);
          setFilteredCourses(coursesData);
          setLoading(false);
        } else {
          console.error("Error al obtener los cursos:", response.statusText);
        }
      } catch (error) {
        console.error("Error en la conexión:", error);
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      let updatedCourses = [...courses];
      if (filters.name) {
        updatedCourses = updatedCourses.filter((course) =>
          course.nombre_curso.toLowerCase().includes(filters.name.toLowerCase())
        );
      }
      if (filters.category) {
        updatedCourses = updatedCourses.filter((course) =>
          course.categoria_curso?.toLowerCase().includes(filters.category.toLowerCase())
        );
      }
      if (filters.tags) {
        updatedCourses = updatedCourses.filter((course) =>
          course.tags_curso.toLowerCase().includes(filters.tags.toLowerCase())
        );
      }
      setFilteredCourses(updatedCourses);
    };

    applyFilters();
  }, [filters, courses]);

  const services = {
    title: "Información",
    links: [
      { text: "Explorar", href: "/explore" },
      { text: "Artículos", href: "/articles" },
      { text: "Soporte", href: "/support" },
      { text: "FAQS", href: "/faqs" },
      { text: "Reportar un problema", href: "/report" },
    ],
  };

  const company = {
    title: "Compañía",
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

  if (loading) {
    return <Loader />; // Mostrar indicador de carga mientras se cargan los datos
  }

  return (
    <>
      <Helmet>
        <title>Cursos Disponibles</title>
      </Helmet>
      <div className="flex flex-col">
        <main className="p-4 flex-grow">
          <h1 className="text-3xl font-bold mb-8">Cursos Disponibles</h1>
          <FilterBar filters={filters} setFilters={setFilters} />
          <Breadcrumbs />
          <AlertWarning />

          <div className="flex flex-col sm:flex-row justify-around">
            {filteredCourses.map((course) => (
              <div
                key={course.id_cursos}
                className="card bg-base-100 w-72 shadow-xl transition-shadow duration-300"
              >
                <figure>
                  <img
                    src={course.imagen_curso}
                    alt={course.nombre_curso}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{course.nombre_curso}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>{course.desc_curso}</p>
                  <p className="badge badge-outline">{course.tags_curso}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
        <Footer
          services={services}
          company={company}
          legal={legal}
          companyName={companyName}
          companyDescription={companyDescription}
        />
      </div>
    </>
  );
};

export default PublicCoursesPage;
