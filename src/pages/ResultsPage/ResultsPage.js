import "./ResultsPage.css";
import { fullArticles } from "../../data";
import { ArticlesGrid, PageHeading } from "../../components";
import PropTypes from "prop-types";
function CategoryPage({ title, description = "" }) {
  const getArticles = () => {
    const allArticles = [...fullArticles.trending, ...fullArticles.featured];
    return allArticles;
  };

  const articles = getArticles();
  return (
    <main className="category-page container">
      <PageHeading heading={title} description={description} />
      <ArticlesGrid articles={articles} />
    </main>
  );
}

CategoryPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default CategoryPage;
