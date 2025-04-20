import "./SkeletonMimic.css";

function SkeletonMimic() {
  return (
    <div className="skeleton-mimic">
      {/* Top Section: Hero and Sidebar */}
      <div className="skeleton-mimic__top-section">
        {/* Hero Section */}
        <div className="skeleton-mimic__hero">
          <div className="skeleton skeleton-hero-image"></div>
          <div className="skeleton skeleton-hero-title"></div>
          <div className="skeleton skeleton-hero-text"></div>
        </div>

        {/* Sidebar Section */}
        <div className="skeleton-mimic__sidebar">
          <div className="skeleton skeleton-sidebar-title"></div>
          {[...Array(3)].map((_, index) => (
            <div key={index} className="skeleton-mimic__sidebar-item">
              <div className="skeleton skeleton-sidebar-item-title"></div>
              <div className="skeleton skeleton-sidebar-item-text"></div>
              {index !== 2 && (
                <div className="skeleton skeleton-sidebar-divider"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Highlights Section */}
      <div className="skeleton-mimic__highlights">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="skeleton-mimic__highlight-item">
            <div className="skeleton skeleton-highlight-number"></div>
            <div className="skeleton skeleton-highlight-title"></div>
            <div className="skeleton skeleton-highlight-text"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkeletonMimic;
