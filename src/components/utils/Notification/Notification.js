import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Notification.css";

const Notification = ({ message, type = "info", duration = 3000, onClose }) => {
  const [show, setShow] = useState(false); // State to control visibility

  useEffect(() => {
    // Slide in the notification
    setShow(true);

    // Slide out the notification after the duration
    const timer = setTimeout(() => {
      setShow(false);
      // Call onClose after the slide-out animation completes
      setTimeout(() => {
        if (onClose) onClose();
      }, 300); // Match the CSS transition duration
    }, duration);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case "success":
        return "✔️";
      case "warning":
        return "⚠️";
      case "error":
        return "❌";
      case "info":
      default:
        return "ℹ️";
    }
  };

  return (
    <div
      className={`notification notification-${type} ${show ? "show" : "hide"}`}
    >
      <h4 className="notification-heading">{type.toUpperCase()}</h4>
      <p>
        <span className="notification-icon">{getIcon()}</span> {message}
      </p>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["info", "success", "warning", "error"]),
  duration: PropTypes.number,
  onClose: PropTypes.func,
};

export default Notification;
