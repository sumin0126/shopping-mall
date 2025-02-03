// 장바구니 상품 데이터 타입
export interface ICartResponse {
  productId: number;
  productName: string;
  productPrice: number;
  productImageUrl: string;
  productColor: string;
  quantity: number;
  createdAt: string;
}

// 장바구니 상품 조회 요청 시 응답 데이터 타입
export interface ICartListResponse {
  data: ICartResponse[];
}

// 장바구니에 상품 추가시 요청 데이터 타입
export interface ICartRequest {
  productId: number;
  quantity: number;
}
