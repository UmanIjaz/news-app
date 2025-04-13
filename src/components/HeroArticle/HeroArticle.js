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
          className="hero-image"
        />
      </picture>
      <div className="bottom-section">
        <h1>{articles.hero.title}</h1>
        <div className="hero__right-section">
          <p>{articles.hero.description}</p>
          <CtaButton label="Read More" onClick={() => console.log("hy")} />
        </div>
      </div>
    </article>
  );
}

export default HeroArticle;
