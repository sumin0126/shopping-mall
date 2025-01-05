import ProductAction from '@/components/card/productDetail/ProductAction';
import ProductImageSlider from '@/components/card/productDetail/ProductImageSlider';
import ProductInfo from '@/components/card/productDetail/ProductInfo';

interface IProps {
  image_url: string[];
  name: string;
  color: string;
  price: number;
  texture: string;
  description: string;
}

interface IProductDetailHeaderProps {
  products: IProps[];
}

/**
 * @description 상품 상세 헤더 컴포넌트
 *
 * @param products - 상품 상세 정보
 */
const ProductDetailHeader = ({ products }: IProductDetailHeaderProps) => {
  return (
    <div className="product-detail-header">
      <ProductImageSlider images={products[0].image_url} />

      <div className="info-action-wrapper">
        <ProductInfo
          name={products[0].name}
          color={products[0].color}
          price={products[0].price}
          texture={products[0].texture}
          description={products[0].description}
        />
        <ProductAction />
      </div>
    </div>
  );
};

export default ProductDetailHeader;
