import PropTypes from "prop-types";

const SectionCourses = ({ titleCourses, textCourses }) => {
  return (
    <section className="flex flex-col justify-center items-center p-5 bg-gray">
      <h2 className="text-lg font-bold sm:text-4xl text-label">
        {titleCourses}
      </h2>
      <p className="text-md sm:text-lg">{textCourses}</p>
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-center items-start sm:justify-center">
          
        </div>
      </div>
    </section>
  );
};

SectionCourses.propTypes = {
  titleCourses: PropTypes.string,
  textCourses: PropTypes.string,
};

export default SectionCourses;
