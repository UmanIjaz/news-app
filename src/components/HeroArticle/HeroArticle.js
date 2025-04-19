import "./HeroArticle.css";
import { CtaButton } from "../index";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { trimText } from "../../utilFunc";
function HeroArticle({ item }) {
  return (
    <article className="hero-article">
      <picture>
        <source media="(max-width: 768px)" srcSet={item?.Image} />
        <img
          src={item?.Image}
          alt="The Bright Future of Web 3.0"
          className="hero-article__image"
        />
      </picture>
      <div className="hero-article__content">
        <h1 className="hero-article__heading">{trimText(item?.Title, 50)}</h1>
        <div className="hero-article__content-bottom">
          <p className="hero-article__content-para">
            {trimText(item?.Description, 100)}
          </p>
          <Link to={`articles/${item?.Title}`}>
            <CtaButton label="Read More" />
          </Link>
        </div>
      </div>
    </article>
  );
}

HeroArticle.propTypes = {
  item: PropTypes.object.isRequired,
};

export default HeroArticle;
