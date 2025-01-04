interface IProductInfo {
  name: string;
  color: string;
  price: number;
  texture: string;
  description: string;
}

/**
 * @description 상품 정보 컴포넌트
 */
const ProductInfo = ({ name, color, price, texture, description }: IProductInfo) => {
  return (
    <div className="product-detail-info-container">
      <div className="name">{name}</div>
      <div className="color">{color}</div>
      <div className="texture">{texture}</div>
      <div className="price">{price.toLocaleString('ko-KR')}</div>
      <div className="description">{description}</div>
    </div>
  );
};

export default ProductInfo;
