import { MouseEvent, useEffect, useRef } from 'react';
import router from 'next/router';

interface IAboutNavbarProps {
  isOpenAboutNavBar: boolean;
  closeAboutNavBar: () => void;
}

/**
 * @description 어바웃 네비바 컴포넌트
 *
 * @param isOpenAboutNavBar - 네비바 활성화 상태
 * @param closeAboutNavBar - 네비바 닫아주는 함수
 */
const AboutNavbar = ({ isOpenAboutNavBar, closeAboutNavBar }: IAboutNavbarProps) => {
  const navbarRef = useRef<HTMLDivElement>(null);

  // 클릭 이벤트의 타겟이 navbarRef 내부가 아니면(= 네비바 배경) 네비바를 닫아주는 함수
  useEffect(() => {
    const closeNavbar = (event: CustomEvent<MouseEvent>) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        closeAboutNavBar();
      }
    };

    // 위에서 만든 함수로 이벤트 적용
    document.addEventListener('mousedown', closeNavbar as EventListener);

    // AboutNavbar 컴포넌트가 사라질때 이벤트도 삭제
    return () => {
      document.removeEventListener('mousedown', closeNavbar as EventListener);
    };
  }, [isOpenAboutNavBar, closeAboutNavBar]);

  // 클릭 시 브랜드스토리 페이지로 이동하는 함수
  const handleClickBrandStory = () => {
    router.push('/brandstory');
  };

  // 클릭 시 룩북 페이지로 이동하는 함수
  const handleClickLookBook = () => {
    router.push('/lookbook');
  };

  // 클릭 시 쇼룸 페이지로 이동하는 함수
  const handleClickShowRoom = () => {
    router.push('/showroom');
  };

  return (
    <div className="navbar-container">
      <div className={`navbar-wrapper ${isOpenAboutNavBar ? 'active' : ''}`} ref={navbarRef}>
        <p>ABOUT</p>
        <button onClick={handleClickBrandStory}>BRAND STORY</button>
        <button onClick={handleClickLookBook}>LOOK BOOK</button>
        <button onClick={handleClickShowRoom}>SHOW ROOM</button>
      </div>
    </div>
  );
};

export default AboutNavbar;
