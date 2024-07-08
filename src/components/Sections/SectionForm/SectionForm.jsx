import PropTypes from "prop-types";
import { Form } from "../../Layout/";

const SectionForm = ({
  title,
  text,
  linkRecovery,
  textRecovery,
  formFields,
  linkText,
  linkHref,
  onSubmit,
  formType,
}) => {
  return (
    <section className="relative flex flex-col md:flex-row w-full bg-gray-900 text-white py-12 px-6">
      <article className="md:w-1/2 flex flex-col justify-center items-start p-6">
        <div className="md:mx-16">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">{title}</h1>
          <p className="mb-4 hidden md:block">{text}</p>
          <div className="my-4">
            <a href={linkRecovery}>{textRecovery}</a>
          </div>
        </div>
      </article>
      <div className="md:w-1/2 flex justify-center items-center">
        <Form
          initialFields={formFields}
          onSubmit={onSubmit}
          formType={formType}
          linkText={linkText}
          linkHref={linkHref}
        />
      </div>
    </section>
  );
};

// Propiedades del componente sectionform

SectionForm.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  linkRecovery: PropTypes.string.isRequired,
  textRecovery: PropTypes.string.isRequired,
  // Propiedades del componente Form
  formFields: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired, //Indicar el atributo onSubmit al formulario
  formType: PropTypes.string.isRequired, //Indicar que tipo de formulario se utiliza
  linkText: PropTypes.string.isRequired,
  linkHref: PropTypes.string.isRequired,
};

export default SectionForm;
