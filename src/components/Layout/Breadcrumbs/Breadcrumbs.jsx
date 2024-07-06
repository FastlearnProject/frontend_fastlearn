import PropTypes from "prop-types";

const Breadcrumbs = ({ items }) => {
  return (
    <div className="breadcrumbs text-md mx-4">
      <ul>
        {items.map((item, index) => (
          <li key={index} className="">
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Breadcrumbs;
