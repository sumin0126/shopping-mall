interface IProductInfo {
  name: string;
  color: string;
  price: number;
  texture?: string;
  description: string;
}

/**
 * @description 상품 정보 컴포넌트
 *
 * @param name - 상품 이름
 * @param color - 상품 색상
 * @param price - 상품 가격
 * @param texture - 상품 소재
 * @param description - 상품 소개
 *
 */
const ProductInfo = ({ name, color, price, description }: IProductInfo) => {
  return (
    <div className="product-info-container">
      <div className="name">{name}</div>
      <div className="color">{color}</div>
      {/* <div className="texture">{texture}</div> */}
      <div className="price">{price.toLocaleString('ko-KR')}</div>
      <div className="description">{description}</div>
    </div>
  );
};

export default ProductInfo;
