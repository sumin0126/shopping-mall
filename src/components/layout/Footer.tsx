import { useRouter } from 'next/router';

import { useRecoilState } from 'recoil';

import { PATHNAME } from '@/constants/pathname';
import { footerShowRoomState } from '@/stores/footer';

/**
 * @description 푸터 컴포넌트
 */
const Footer = () => {
  const [showRoom, setShowRoom] = useRecoilState(footerShowRoomState);
  const router = useRouter();

  // 쇼룸 버튼 클릭 시, 버튼에 있는 텍스트를 리코일 상태에 업데이트하고,
  // 쇼룸 페이지로 이동시켜주는 함수
  const handleClickShowRoom = (title: string) => {
    setShowRoom(title);
    router.push(PATHNAME.SHOWROOM);
  };

  // 버튼에 들어갈 쇼룸 title들
  const buttonTitles = ['HANNAM SHOWROOM', 'SEONGSU SHOWROOM', 'SHINSEGAE SHOWROOM', 'TOKYO SHOWROOM'];

  return (
    <div className="footer-container">
      <div className="footer-left">
        <p>CUSTOMER CARE</p>
        <ul>
          <li>account</li>
          <li>notice</li>
          <li>FAQ</li>
          <li>terms of use</li>
          <li>privacy policy</li>
          <li>tracking</li>
        </ul>
      </div>

      <div className="footer-center">
        <p>CONTACT</p>
        <ul>
          <li>cs@minitmute.com</li>
          <li>info@minitmute.com</li>
        </ul>
      </div>

      <div className="footer-right">
        <p>SHOWROOM</p>
        {buttonTitles.map(title => (
          <button key={title} onClick={() => handleClickShowRoom(title)}>
            {title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Footer;
