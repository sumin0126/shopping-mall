import Image from 'next/image';

import ProductAction from '@/components/button/ProductAction';
import ProductInfo from '@/components/card/productDetail/ProductInfo';

import type { IProduct } from '@/apis/products/type';

interface IProductDetailHeaderProps {
  product: IProduct;
}

/**
 * @description 상품 상세 헤더 컴포넌트
 *
 * @param product - 상품 데이터
 */
const ProductDetailHeader = ({ product }: IProductDetailHeaderProps) => {
  return (
    <div className="product-detail-header">
      <div className="product-thumbnail">
        <Image src={product.imageUrl} alt={product.imageUrl} width={480} height={480} style={{ objectFit: 'cover' }} />
      </div>

      <div className="info-action-wrapper">
        <ProductInfo
          name={product.name}
          color={product.color}
          price={product.price}
          // texture={product.texture}
          description={product.description}
        />
        <ProductAction product={product} />
      </div>
    </div>
  );
};

export default ProductDetailHeader;
