import { MouseEvent, useEffect, useRef } from 'react';

import router from 'next/router';

interface IAboutNavbarProps {
  isOpenAboutNavBar: boolean;
  closeAboutNavBar: () => void;
}

const AboutNavbar = ({ isOpenAboutNavBar, closeAboutNavBar }: IAboutNavbarProps) => {
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeNavbar = (event: CustomEvent<MouseEvent>) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        closeAboutNavBar();
      }
    };

    document.addEventListener('mousedown', closeNavbar as EventListener);

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
    <div className='navbar-container'>
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
