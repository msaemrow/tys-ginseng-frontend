import "../css/SkeletonProduct.css";

const SkeletonProduct = () => {
  return (
    <div className="product d-flex flex-column align-items-center">
      <div className="product-content text-center w-100">
        <div className="skeleton skeleton-image product-image-top" />
        <div className="skeleton skeleton-title mt-2" />
      </div>

      <div className="product-footer text-center">
        <div className="skeleton skeleton-text mb-1" />
        <div className="skeleton skeleton-text short mb-2" />
        <div className="skeleton skeleton-price mb-2" />
        <div className="skeleton skeleton-button" />
      </div>
    </div>
  );
};

export default SkeletonProduct;
