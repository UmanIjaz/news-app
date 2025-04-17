import "./CategoryPage.css";
import { fullArticles } from "../../data";
import { ArticlesGrid, PageHeading } from "../../components";
import PropTypes from "prop-types";
function CategoryPage({ title }) {
  const getArticles = () => {
    const allArticles = [...fullArticles.trending, ...fullArticles.featured];
    return allArticles;
  };

  const articles = getArticles();
  return (
    <main className="category-page container">
      <PageHeading heading={title} />
      <ArticlesGrid articles={articles} />
    </main>
  );
}

CategoryPage.propTypes = {
  title: PropTypes.string,
};

export default CategoryPage;
