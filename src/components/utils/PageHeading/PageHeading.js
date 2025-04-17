import PropTypes from "prop-types";
import "./PageHeading.css";
import "../../";
function PageHeading({ heading }) {
  return (
    <section className="page-heading">
      <div className="page-heading__title-div">
        <h1 className="page-heading__title">{heading}</h1>
      </div>

      <div className="page-heading__sub-title">
        <h3>All Stories</h3>
      </div>
    </section>
  );
}

PageHeading.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default PageHeading;
