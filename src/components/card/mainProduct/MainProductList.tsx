import MainProductCard from '@/components/card/mainProduct/MainProductCard';
import MainProductSlider from '@/components/card/mainProduct/MainProductSlider';

import type { IProduct } from '@/apis/products/type';

interface IMainProductListProps {
  products: IProduct[];
  category: string;
  isSlider?: boolean;
}

/**
 * @description 메인상품 리스트 컴포넌트
 *
 * @param id - 상품 아이디
 * @param img - 상품 대표이미지
 * @param itemName - 상품 이름
 * @param itemColor - 상품 컬러
 * @param category - 상품 카테고리
 * @param isSlider - 상품 이미지슬라이더 상태
 */
const MainProductList = ({ products, category, isSlider }: IMainProductListProps) => {
  return (
    <div className="product-list-container">
      <p className="category">{category}</p>

      <div className="product-list">
        {isSlider ? (
          <MainProductSlider products={products} />
        ) : (
          products.map(product => (
            <MainProductCard
              key={product.id}
              img={product.image_url}
              itemName={product.name}
              itemColor={product.color}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MainProductList;
