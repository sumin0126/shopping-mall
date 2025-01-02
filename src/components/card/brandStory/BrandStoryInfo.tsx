import Image from 'next/image';

/**
 * @description 브랜드스토리 정보 컴포넌트
 */
const BrandStoryInfo = () => {
  return (
    <div className="brand-info">
      <div className="img-box">
        <Image
          src="/img/brandstory/brandstory.jpg"
          alt="brandInfoImg"
          width={340}
          height={580}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className="text-wrapper">
        <p className="title">
          미닛뮤트는 2015년 설립되었으며, <br />
          미니멀하지만 실용적인 가방을 만드는 브랜드입니다. <br />
          시간이 지날수록 아름다워지는 가방을 생각하며 만들고 있습니다.
        </p>
        <p className="sub-title">
          여행을 하며 사용할 수 있는 가볍고 작은 크기의 <br />
          실용적인 가죽 가방을 만들고 싶다는 생각으로 시작한 브랜드입니다. <br />
          여권 포함 여행 필수품이 들어가는 크기와, 심플한 디자인 그리고 가벼운 무게감을 <br />
          유지하며 다양한 가죽과 컬러감을 선보이고 있습니다. <br />
          최신유행을 따르기 보다는 레트로적인 감성을 기반으로 심플한 디자인에 <br />그 가방만의 멋을 살릴 수 있는 가죽을
          셀렉합니다. <br /> 이미 포화상태인 디자인 시장에서 다양하고 독특한 디자인을 추구하기 보다는 <br />
          소재와 퀄리티의 차별성을 두고 집중하고 있습니다.
        </p>
      </div>
    </div>
  );
};

export default BrandStoryInfo;
