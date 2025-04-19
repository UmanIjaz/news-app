import "./HighlightsCards.css";
import { HighlightsCard } from "..";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
function HighlightsCards({ items }) {
  return (
    <section className="highlights-cards">
      {items.map((item, index) => (
        <Link to={`articles/${item.Title}`} key={item.Title || index}>
          <HighlightsCard item={item} itemIndex={index} />
        </Link>
      ))}
    </section>
  );
}

HighlightsCards.propTypes = {
  items: PropTypes.array,
};

export default HighlightsCards;
