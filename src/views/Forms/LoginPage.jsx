import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { SectionForm } from "../../components/Sections/SectionForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Asegúrate de que jwt-decode esté instalado

const LoginPage = () => {
  const [initialFields] = useState([
    { type: "email", placeholder: "Correo electrónico", id: "correo" },
    { type: "password", placeholder: "Contraseña", id: "contrasena" },
  ]);

  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { token } = response.data;
      if (token) {
        localStorage.setItem("token", token); // Guardar el token en el almacenamiento local

        const decodedToken = jwtDecode(token); // Decodificar el token para obtener el rol
        const role = decodedToken.rol;

        // Redirigir según el rol
        if (role === "student") {
          navigate("/student");
        } else if (role === "teacher") {
          navigate("/teacher");
        } else if (role === "admin") {
          navigate("/admin");
        } else {
          console.log("Rol no valido"); // En caso de que no haya un rol válido
        }
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Iniciar sesión | FastLearn</title>
      </Helmet>

      <main
        className="h-screen bg-center bg-cover flex justify-center items-center"
        style={{ backgroundImage: "url(/img/forms/img2.webp)" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <SectionForm
          title="Inicia sesión en tu cuenta"
          text="Introduce tus credenciales para acceder a tu cuenta."
          textRecovery="Olvidé mi contraseña"
          linkRecovery="/recovery"
          formFields={initialFields}
          linkText="No tengo una cuenta"
          linkHref="/signup"
          onSubmit={handleLogin}
          formType="login"
        />
      </main>
    </>
  );
};

export default LoginPage;
