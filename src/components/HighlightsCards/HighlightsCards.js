import "./HighlightsCards.css";
import { HighlightsCard } from "..";
import { PropTypes } from "prop-types";
function HighlightsCards({ items }) {
  return (
    <section className="highlights-cards">
      {items.map((item, index) => (
        <HighlightsCard item={item} itemIndex={index} key={item.id || index} />
      ))}
    </section>
  );
}

HighlightsCards.propTypes = {
  items: PropTypes.array,
};

export default HighlightsCards;
