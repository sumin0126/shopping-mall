import CartProduct from '@/components/card/cart/CartProduct';

import type { TProductCategory } from '@/apis/products/type';

interface IProducts {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: TProductCategory;
  isNew: boolean;
  isBest: boolean;
  description?: string;
  color?: string;
}

interface ICartProductList {
  wishList: IProducts[];
}

/**
 * @description 장바구니 아이템 목록 컴포넌트
 *
 * @param wishList - 장바구니에 담긴 모든 상품의 배열
 */
const CartProductList = ({ wishList }: ICartProductList) => {
  return (
    <div className="cart-product-list-container">
      {/* 헤더 */}
      <div className="cart-header">
        <p>CART({wishList.length})</p>
      </div>

      {/* 상품 목록 */}
      {wishList.length > 0 ? (
        wishList.map(product => (
          <CartProduct
            key={product.id}
            id={product.id}
            name={product.name}
            color={product.color || ''}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))
      ) : (
        <p className="wish-list-info">장바구니가 비어 있습니다.</p>
      )}

      {/* 버튼 */}
      {wishList.length > 0 && (
        <div className="button-container">
          <button>선택상품주문</button>
          <button>전체상품주문</button>
        </div>
      )}
    </div>
  );
};

export default CartProductList;
