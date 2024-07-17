import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Sidebar } from "../../components";
import { getSidebarLinks } from "../../utils";

const URL = import.meta.env.VITE_BACKEND_URL;

const UserPage = () => {
  const { id } = useParams();
  const [userData, setuserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  const sidebarLinks = getSidebarLinks(token);

  useEffect(() => {
    const fetchuserData = async () => {
      try {
        if (!token) {
          throw new Error("Token no encontrado en localStorage");
        }

        const response = await fetch(`${URL}/usuario/${id}`, {
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
          const userData = responseData[0]; // Accede al primer elemento del primer array
          setuserData(userData);
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

    fetchuserData();
  }, [id, token]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>No se encontraron datos del usuario.</div>;
  }

  return (
    <>
      <Helmet>
        <title>Perfil | {userData.nombre}</title>
      </Helmet>
      <div className="flex h-screen">
        <Sidebar links={sidebarLinks} />
        <main className="flex flex-col m-5 w-full">
            <h1>{userData.nombre}</h1>
        </main>
      </div>
    </>
  );
};

export default UserPage;
