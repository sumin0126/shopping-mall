import ProductAction from '@/components/card/productDetail/ProductAction';
import ProductImageSlider from '@/components/card/productDetail/ProductImageSlider';
import ProductInfo from '@/components/card/productDetail/ProductInfo';

interface IProps {
  imageUrl: string[];
  name: string;
  color: string;
  price: number;
  texture: string;
  description: string;
}

interface IProductDetailHeaderProps {
  product: IProps;
}

/**
 * @description 상품 상세 헤더 컴포넌트
 *
 * @param product - 상품 상세 정보
 */
const ProductDetailHeader = ({ product }: IProductDetailHeaderProps) => {
  return (
    <div className="product-detail-header">
      <ProductImageSlider images={product.imageUrl} />

      <div className="info-action-wrapper">
        <ProductInfo
          name={product.name}
          color={product.color}
          price={product.price}
          texture={product.texture}
          description={product.description}
        />
        <ProductAction />
      </div>
    </div>
  );
};

export default ProductDetailHeader;
