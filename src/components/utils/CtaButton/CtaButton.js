import PropTypes from "prop-types";
import "./CtaButton.css";

function CtaButton({
  label,
  onClick,
  type = "button",
  loading = false,
  size = "normal",
  varient = "primary",
}) {
  return (
    <button
      className={`cta-btn cta-btn__${size} cta-btn__${varient}`}
      onClick={onClick}
      type={type}
      disabled={loading}
    >
      {loading ? <span className="cta-btn__spinner"></span> : label}
    </button>
  );
}

CtaButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  loading: PropTypes.bool,
  size: PropTypes.oneOf(["small", "normal"]),
  varient: PropTypes.oneOf(["primary", "secondary"]),
};
export default CtaButton;
