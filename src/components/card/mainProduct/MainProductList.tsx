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
  title: string;
  isSlider?: boolean;
}

const MainProductList = ({ MainProducts, title, isSlider }: IMainProductListProps) => {
  return (
    <div className="product-list-container">
      <p className="category">{title}</p>

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
