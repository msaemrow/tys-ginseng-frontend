import "../css/SkeletonProduct.css";

const SkeletonProduct = () => {
  return (
    <div className="Product d-flex flex-wrap flex-column border border-dark rounded m-3 p-2 w-25 justify-content-start align-items-center">
      <div className="skeleton skeleton-title mb-2" />
      <div className="skeleton skeleton-image mb-2" />
      <div className="skeleton skeleton-text mb-1" />
      <div className="skeleton skeleton-text short mb-3" />

      <div className="skeleton skeleton-text mb-1" />
      <div className="skeleton skeleton-text short mb-1" />
      <div className="skeleton skeleton-price mt-3 mb-1" />
      <div className="skeleton skeleton-button" />
    </div>
  );
};

export default SkeletonProduct;
