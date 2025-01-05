import Image from 'next/image';

interface IProductDetailMainProps {
  ProductImage: string[];
}

/**
 * @description 상품 메인 이미지 컴포넌트
 *
 * @param ProductImage - 이미지 URL들
 */
const ProductDetailMain = ({ ProductImage }: IProductDetailMainProps) => {
  return (
    <div className="product-detail-main-container">
      <div className="image-wrapper">
        {ProductImage.map(src => (
          <Image key={src} src={src} alt="img" width={800} height={1000} style={{ objectFit: 'cover' }} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetailMain;
