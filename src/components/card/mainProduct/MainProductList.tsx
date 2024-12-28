import MainProductCard from '@/components/card/mainProduct/MainProductCard';
import MainProductSlider from '@/components/card/mainProduct/MainProductSlider';

interface IProduct {
  id: number;
  img: string;
  itemName: string;
  itemColor: string;
}

interface IMainProductListProps {
  MainProducts: IProduct[];
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
const MainProductList = ({ MainProducts, category, isSlider }: IMainProductListProps) => {
  return (
    <div className="product-list-container">
      <p className="category">{category}</p>

      <div className="product-list">
        {isSlider ? (
          <MainProductSlider MainProducts={MainProducts} />
        ) : (
          MainProducts.map(product => (
            <MainProductCard
              key={product.id}
              img={product.img}
              itemName={product.itemName}
              itemColor={product.itemColor}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MainProductList;
