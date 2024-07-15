import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { SectionForm } from "../../components/";

const URL = import.meta.env.VITE_BACKEND_URL;

const LoginPage = () => {
  const [initialFields] = useState([
    { type: "email", placeholder: "Correo electrónico", id: "correo" },
    { type: "password", placeholder: "Contraseña", id: "contrasena" },
  ]);
  const [errorMessage, setErrorMessage] = useState(""); // Estado para manejar errores

  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const response = await axios.post(
        `${URL}/login`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Respuesta del servidor:", response.data);

      const { token } = response.data;
      if (token) {
        localStorage.setItem("token", token);

        const decodedToken = jwtDecode(token);

        console.log("Token decodificado", decodedToken);

        const role = decodedToken.rol;

        if (role === "student") {
          navigate("/student");
        } else if (role === "teacher") {
          navigate("/teacher");
        } else if (role === "admin") {
          navigate("/admin");
        } else {
          navigate("/login");
        }
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setErrorMessage("Datos de inicio de sesión incorrectos. Por favor, verifica tus credenciales e intenta de nuevo."); // Establece el mensaje de error
    }
  };

  return (
    <>
      <Helmet>
        <title>Iniciar sesión | FastLearn</title>
      </Helmet>

      <main
        className="h-screen bg-center bg-cover flex justify-center items-center relative"
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
        {errorMessage && (
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded">
            {errorMessage}
          </div>
        )}
      </main>
    </>
  );
};

export default LoginPage;
