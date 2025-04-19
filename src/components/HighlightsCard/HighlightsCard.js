import PropTypes from "prop-types";
import "./HighlightsCard.css";
import { trimText } from "../../utilFunc";
function HighlightsCard({ item, itemIndex }) {
  return (
    <article className="highlights-card">
      <img
        src={item.Image}
        alt={item.Title}
        className="highlights-card__image"
      />
      <div className="highlights-card__content">
        <p className="highlights-card__index">0{itemIndex + 1}</p>
        <h4 className="highlights-card__heading">
          {trimText(item?.Title, 50)}
        </h4>
        <p className="highlights-card__description">
          {trimText(item?.Description, 100)}
        </p>
      </div>
    </article>
  );
}

HighlightsCard.propTypes = {
  item: PropTypes.object,
  itemIndex: PropTypes.number,
};

export default HighlightsCard;
