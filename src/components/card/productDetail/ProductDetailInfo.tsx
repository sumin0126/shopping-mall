interface IProps {
  width: number;
  height: number;
  strap: number;
  weight: number;
}

interface IProductDetailInfoProps {
  ProductSize: IProps;
}

/**
 * @description 상품 상세정보 컴포넌트
 *
 * @param width - 상품 가로 사이즈
 * @param height - 상품 세로 사이즈
 * @param strap - 상품 스트랩 길이
 * @param weight - 상품 무게
 *
 */
const ProductDetailInfo = ({ ProductSize }: IProductDetailInfoProps) => {
  const { width, height, strap, weight } = ProductSize;

  return (
    <div className="product-detail-info-container">
      <div className="size-guide">
        <p className="title">SIZE GUIDE</p>
        <p>
          가로 {width}cm / 세로 {height}cm / 스트랩 {strap}cm / 무게 {weight}g
        </p>
      </div>

      <div className="tip">
        <p className="title">TIP</p>
        <p>- 원단 특성 상 정전기가 발생할 수 있으며 브러시를 이용하여 관리하는 것을 권장드립니다.</p>
        <p>
          - 배송 중 원단 눌림이 발생할 수 있으나 브러시를 이용하여 결 방향으로 빗어준 후 통풍이 잘되는 곳에 하루 정도
          걸어 보관하시면 복원됩니다.
        </p>
        <p>- 비나 눈에 젖었을 경우 부드러운 천으로 눌러 신속히 물기를 제거한 후 그늘에서 건조해 주시기 바랍니다.</p>
        <p>- 장기간 보관하게 될 경우 퍼가 구겨지지 않게 정돈하여 실리카겔과 함께 더스트백에 넣어 보관해 주세요.</p>
        <p>- 고온에서 형태 변형이 쉬운 소재 특성상 열을 이용한 세탁 및 아이론을 피하여 주십시오.</p>
        <p>- 소재 특성상 잡사가 있을 수 있으며 봉제 공정에서 굴곡이 생길 수 있으나 불량이 아님을 알려드립니다.</p>
        <p>
          - 집에서 오염 제거를 시도하시는 경우 완벽히 제거되지 않아 얼룩이 남을 수 있사오니 가방 전문 클리닝 센터로
          문의하시는 방법을 추천드립니다.
        </p>
        <p>- 원단 염색 과정에서 미세한 자국이 있을 수 있으며 이는 불량 사유에 해당되지 않는 점 참고 부탁드립니다.</p>
        <p>- 볼펜자국, 긁힘 또는 직접적인 다양한 오염에 대한 수리는 어려우니 이 점 유의하여 사용 부탁드립니다.</p>
        <p>- 보관 시 직사광선을 피해주십시오.</p>
      </div>

      <div className="shopping-guide">
        <p className="title">SHOPPING GUIDE</p>
        <div className="delivery">
          <p className="sub-title">배송</p>
          <p>배송사 : CJ대한통운 (배송 기간 : 2~14일)</p>
          <p>배송비 : 3,000원 / 10만 원 이상 주문 시 무료 배송 (산간 지역 및 제주도 지역 +3,000원)</p>
        </div>

        <div className="exchange">
          <p className="sub-title">교환 및 반품</p>
          <p>
            - 교환 및 반품은 사전에 신청 접수 후 가능하며, 수령 후 7일 이내 미닛뮤트로 교환 및 반품 의사를 표현해 주셔야
            처리 가능합니다. 단순 변심일 경우 상품을 받으신 그대로 안전 포장하여 보내주셔야 합니다.
          </p>
          <p>
            - 미닛뮤트의 제품은 제작 과정 중 수작업이 포함되어 이로 인해 제품마다 박음질 및 마감 처리가 상이할 수
            있으며, 이는 불량이 아닌 점 참고 부탁드립니다.{' '}
          </p>
          <p>
            - 회수 신청은 사이트 채널톡을 통하여 요청해 주시는 경우 상품 회수 접수 도와드리고 있으며, 고객님께서 직접
            발송해 주시는 경우 cj대한통운을 통하여 반품 접수 부탁드립니다.
          </p>
          <p>
            - 타택배/편의점택배 이용 시 반드시 선불 발송 부탁드립니다. 편의점 택배 또는 타택배사를 통하여 보내주시는
            경우 초과되는 금액은 고객님께서 부담하셔야 합니다.
          </p>
          <p>* 반품 주소지 : 서울 성동구 상원1길 22 굿타워 302호</p>
        </div>

        <div className="refund">
          <p className="sub-title">환불</p>
          <p>- 현금으로 결제하신 경우 일괄 환불 처리되어 최대 3일이 소요됩니다.</p>
          <p>- 신용카드로 결제하신 경우 신용카드 승인 취소 시 3~7일(카드사 영업일 기준)정도의 기간이 소요됩니다.</p>
        </div>
      </div>

      <div className="quality">
        <p className="title">QUALITY</p>
        <p>- 원산지 KOREA 제조사 미닛뮤트 협력업체 A/S 정보 및 담당자 미닛뮤트 고객센터 070-8843-0042</p>
        <p>- 전자상거래 소비자 보호법에 규정되어 있는 소비자 청약 철회 가능 범위를 준수합니다</p>
      </div>
    </div>
  );
};

export default ProductDetailInfo;
