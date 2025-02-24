import classNames from 'classnames';

import MainProductCard from '@/components/card/mainProduct/MainProductCard';
import MainProductSlider from '@/components/slider/MainProductSlider';

import type { IProduct } from '@/apis/products/type';

interface IMainProductListProps {
  products: IProduct[];
  category: string;
  isSlider?: boolean;
  isVisibleList?: boolean;
}

/**
 * @description 메인상품 리스트 컴포넌트
 *
 * @param products - 상품 목록
 * @param category - 상품 카테고리
 * @param isSlider - 상품 이미지슬라이더 상태
 */
const MainProductList = ({ products, category, isSlider, isVisibleList }: IMainProductListProps) => {
  return (
    <div
      className={classNames('product-list-container', {
        'only-pc': isVisibleList,
      })}
    >
      <p className="category">{category}</p>

      <div className="product-list">
        {isSlider ? (
          <MainProductSlider products={products} />
        ) : (
          products.map(product => (
            <MainProductCard
              key={product.id}
              productId={product.id}
              img={product.imageUrl}
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
