import "./ErrorComponent.css";
import PropTypes from "prop-types";

function ErrorComponent({ message }) {
  return (
    <div className="error-component">
      <p>{message}</p>
    </div>
  );
}

ErrorComponent.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorComponent;
