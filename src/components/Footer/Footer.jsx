import PropTypes from "prop-types";

const Footer = ({
  services,
  company,
  legal,
  companyName,
  companyDescription,
}) => {
  return (
    <footer>
      <footer className="footer bg-base-200 text-base-content p-10">
        <nav>
          <h6 className="footer-title">{services.title}</h6>
          {services.links.map((link, index) => (
            <a key={index} href={link.href} className="link link-hover">
              {link.text}
            </a>
          ))}
        </nav>
        <nav>
          <h6 className="footer-title">{company.title}</h6>
          {company.links.map((link, index) => (
            <a key={index} href={link.href} className="link link-hover">
              {link.text}
            </a>
          ))}
        </nav>
        <nav>
          <h6 className="footer-title">{legal.title}</h6>
          {legal.links.map((link, index) => (
            <a key={index} href={link.href} className="link link-hover">
              {link.text}
            </a>
          ))}
        </nav>
      </footer>
      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <img
            src="/img/logo/logo.webp"
            alt="Logo"
            title="Logo FastLearn"
            className="w-36"
          />
          <p>
            {companyName}
            <br />
            {companyDescription}
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end"></nav>
      </footer>
    </footer>
  );
};

Footer.propTypes = {
  services: PropTypes.shape({
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,

  company: PropTypes.shape({
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  legal: PropTypes.shape({
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  companyName: PropTypes.string.isRequired,
  companyDescription: PropTypes.string.isRequired,
};

export default Footer;
