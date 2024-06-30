import PropTypes from "prop-types";

const SectionBenefits = ({
  titleBen,
  textBen,
  btnTextBen,
  btnHrefBen,
  imageBen,
  altBen,
  imageTitleBen,
}) => {
  return (
    <section className="bg-gray-100 py-20">
      <article className="container mx-auto flex flex-wrap items-center">
        <div className="w-full md:w-6/12 px-6 mb-12 md:mb-0">
          <h2 className="text-lg font-bold sm:text-4xl text-label mb-5">
            {titleBen}
          </h2>
          <p className="text-md sm:text-lg mb-6">{textBen}</p>
          <a
            href={btnHrefBen}
            className="inline-block bg-primary text-white text-sm sm:text-md py-2 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            {btnTextBen}
          </a>
        </div>
        <div className="w-full md:w-6/12 px-6">
          <div className="relative">
            <img
              src={imageBen}
              alt={altBen}
              title={imageTitleBen}
              className="w-full h-auto rounded-2xl shadow-lg transform transition duration-300 hover:scale-105"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary via-transparent to-transparent opacity-30 rounded-2xl"></div>
          </div>
        </div>
      </article>
    </section>
  );
};

SectionBenefits.propTypes = {
  titleBen: PropTypes.string.isRequired,
  textBen: PropTypes.string.isRequired,
  btnTextBen: PropTypes.string.isRequired,
  btnHrefBen: PropTypes.string.isRequired,
  imageBen: PropTypes.string.isRequired,
  altBen: PropTypes.string.isRequired,
  imageTitleBen: PropTypes.string.isRequired,
};

export default SectionBenefits;
