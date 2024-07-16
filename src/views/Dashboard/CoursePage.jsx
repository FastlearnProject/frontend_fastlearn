import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Sidebar } from "../../components";
import { getSidebarLinks } from "../../utils";

const URL = import.meta.env.VITE_BACKEND_URL;

const CoursePage = () => {
  const { id } = useParams();
  const [cursoData, setCursoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  const sidebarLinks = getSidebarLinks(token);

  useEffect(() => {
    const fetchCursoData = async () => {
      try {
        if (!token) {
          throw new Error("Token no encontrado en localStorage");
        }

        const response = await fetch(`${URL}/cursos/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(
            `Error al obtener los datos del curso: ${response.statusText}`
          );
        }

        const responseData = await response.json();

        if (Array.isArray(responseData) && responseData.length > 0) {
          const cursoData = responseData[0][0]; // Accede al primer elemento del primer array
          setCursoData(cursoData);
          setLoading(false);
        } else {
          setError("No se encontraron datos de cursos.");
          setLoading(false);
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCursoData();
  }, [id, token]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!cursoData) {
    return <div>No se encontraron datos del curso.</div>;
  }

  return (
    <>
      <Helmet>
        <title>{cursoData.titulo}</title>
      </Helmet>
      <div className="flex h-screen">
        <Sidebar links={sidebarLinks} />
        <main className="flex flex-col m-5">
          <section className="flex flex-wrap gap-5">
            <div className="w-6/12 shadow-lg">
              <video className="w-full h-full object-cover" controls>
                <source src={cursoData.video} type="video/mp4" />
                Tu navegador no soporta este formato de video.
              </video>
            </div>
            <div className="flex flex-col space-y-5">
              <p>
                Tags: {cursoData.tags}
              </p>
              <p>
                Categoria: {cursoData.categoria}
              </p>
              <a
                href={cursoData.video}
                className="btn"
                download={cursoData.titulo}
              >
                Descargar video
              </a>
            </div>
          </section>
          <article className="my-4">
            <h1 className="text-sm md:text-md lg:text-lg">
              {cursoData.titulo}
            </h1>
            <p>{cursoData.descripcion}</p>
          </article>
        </main>
      </div>
    </>
  );
};

export default CoursePage;
