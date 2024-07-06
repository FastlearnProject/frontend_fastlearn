import { useState } from "react";
import PropTypes from "prop-types";

const Form = ({ initialFields, linkText, linkHref, onSubmit, formType }) => {
  const [formData, setFormData] = useState(
    initialFields.reduce((acc, field) => {
      acc[field.id] = "";
      return acc;
    }, {})
  );

  // Función para cambiar el tipo formulario

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Función para cambiar cual función se va a ejectutar según la propiedad pasada

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // Estilos para el botón de registro como propiedades

  const buttonStyle = {
    backgroundImage:
      "radial-gradient(circle, #2253F0 0%, #B765E8 50%, #2253F0 100%)",
    backgroundSize: "200% auto",
    transition: "background-position 0.5s",
    padding: "10px 20px",
    borderRadius: "4px",
    border: "none",
    color: "white",
    cursor: "pointer",
    outline: "none",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mx-auto bg-white p-8 rounded-md"
      >
        {/* Agregar inputs según el número de keys enviadas desde SignUpPage || LoginPage */}
        {initialFields.map((field) => (
          // Agregar los atributos según las propiedades extraidas de la página
          <div key={field.id} className="mb-4">
            <input
              type={field.type}
              id={field.id}
              pattern={field.pattern}
              required  
              placeholder={field.placeholder}
              value={formData[field.id]}
              onChange={handleChange}
              className="mt-1 block w-full px-3 p-3 border border-gray-300 rounded-md shadow-lg text-black border-none"
            />
          </div>
        ))}
        {/* Paso de estilos al botón */}
        <button
          style={buttonStyle}
          type="submit"
          className="w-full py-2 px-4 border border-transparent font-medium rounded-md text-white"
        >
          {formType === "register" ? "Crear cuenta" : "Iniciar sesión"}
        </button>
      </form>
      <div className="my-4">
        {/* Propiedades extraidas de SignUpPage || LoginPage */}
        <a href={linkHref}>{linkText}</a>
      </div>
    </div>
  );
};

Form.propTypes = {
  // Propiedades de los inputs
  initialFields: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  formType: PropTypes.string.isRequired, //Indicar el atributo onSubmit al formulario
  onSubmit: PropTypes.func.isRequired, //Indicar que tipo de formulario se utiliza
  linkText: PropTypes.string.isRequired,
  linkHref: PropTypes.string.isRequired,
};

export default Form;
