import PropTypes from "prop-types";
import "./HighlightsCard.css";
function HighlightsCard({ item, itemIndex }) {
  return (
    <article className="highlights-card">
      <img
        src={item.image}
        alt={item.title}
        className="highlights-card__image"
      />
      <div className="highlights-card__content">
        <p className="highlights-card__index">0{itemIndex + 1}</p>
        <h4 className="highlights-card__heading">{item.title}</h4>
        <p className="highlights-card__description">{item.description}</p>
      </div>
    </article>
  );
}

HighlightsCard.propTypes = {
  item: PropTypes.object,
  itemIndex: PropTypes.number,
};

export default HighlightsCard;
