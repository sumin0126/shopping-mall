type TTotalPriceContainerProps = {
  price: number;
};

const TotalPriceContainer = ({ price }: TTotalPriceContainerProps) => {
  return (
    <div className="total-price-container">
      <p>
        상품금액 <span>{price.toLocaleString()}원</span>
      </p>
      <p>+</p>
      <p>
        배송비 <span>(무료)</span>
      </p>
      <p>=</p>
      <p>
        총 결제금액 <span>{price.toLocaleString()}원</span>
      </p>
    </div>
  );
};

export default TotalPriceContainer;
