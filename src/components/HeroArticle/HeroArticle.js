import "./HeroArticle.css";
import { CtaButton } from "../index";
import articles from "../../data";
import { Link } from "react-router-dom";
function HeroArticle() {
  return (
    <article className="hero-article">
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet={articles.hero.image.mobile}
        />
        <img
          src={articles.hero.image.desktop}
          alt="The Bright Future of Web 3.0"
          className="hero-article__image"
        />
      </picture>
      <div className="hero-article__content">
        <h1 className="hero-article__heading">{articles.hero.title}</h1>
        <div className="hero-article__content-bottom">
          <p className="hero-article__content-para">
            {articles.hero.description}
          </p>
          <Link to={`articles/trend-01`}>
            <CtaButton label="Read More" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default HeroArticle;
