import propTypes from "prop-types";

const SectionArticle = ({ titulo1 }) => {
  return (
    <>
      <h1>{titulo1}</h1>
      <h1>Hola</h1>
      <h1>Hola</h1>
      <h1>Hola</h1>
    </>
  );
};

SectionArticle.propTypes = {
  titulo1: propTypes.string,
};

export default SectionArticle;
