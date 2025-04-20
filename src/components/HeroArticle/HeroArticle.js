import "./HeroArticle.css";
import { CtaButton } from "../index";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { trimText } from "../../utilFunc";
function HeroArticle({ article }) {
  return (
    <article className="hero-article">
      <picture>
        <source media="(max-width: 768px)" srcSet={article?.Image} />
        <img
          src={article?.Image}
          alt="The Bright Future of Web 3.0"
          className="hero-article__image"
        />
      </picture>
      <div className="hero-article__content">
        <h1 className="hero-article__heading">
          {trimText(article?.Title, 50)}
        </h1>
        <div className="hero-article__content-bottom">
          <p className="hero-article__content-para">
            {trimText(article?.Description, 100)}
          </p>
          <Link to={`/articles/${article?.Title}`} state={{ article }}>
            <CtaButton label="Read More" />
          </Link>
        </div>
      </div>
    </article>
  );
}

HeroArticle.propTypes = {
  article: PropTypes.object.isRequired,
};

export default HeroArticle;
