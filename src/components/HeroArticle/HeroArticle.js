import "./HeroArticle.css";
import { CtaButton } from "../index";
import articles from "../../data";
function HeroArticle() {
  return (
    <article className="hero-article">
      <picture>
        <source media="(max-width: 768px)" srcSet={articles.hero.img.mobile} />
        <img
          src={articles.hero.img.desktop}
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
          <CtaButton label="Read More" />
        </div>
      </div>
    </article>
  );
}

export default HeroArticle;
