import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LookBookList from '@/components/card/lookbook/LookBookList';

const LookBookContainer = () => {
  // 임시 데이터
  const LookBookImages = [
    { id: 1, img: '/img/lookbook1.jpg' },
    { id: 2, img: '/img/lookbook2.jpg' },
    { id: 3, img: '/img/lookbook3.jpg' },
    { id: 4, img: '/img/lookbook4.jpg' },
    { id: 5, img: '/img/lookbook5.jpg' },
    { id: 6, img: '/img/lookbook6.jpg' },
    { id: 7, img: '/img/lookbook7.jpg' },
    { id: 8, img: '/img/lookbook8.jpg' },
    { id: 9, img: '/img/lookbook9.jpg' },
    { id: 10, img: '/img/lookbook10.jpg' },
    { id: 11, img: '/img/lookbook11.jpg' },
    { id: 12, img: '/img/lookbook12.jpg' },
    { id: 13, img: '/img/lookbook13.jpg' },
    { id: 14, img: '/img/lookbook14.png' },
    { id: 15, img: '/img/lookbook15.jpg' },
  ];

  return (
    <div className="look-book-container">
      <Header />

      <LookBookList LookBookImages={LookBookImages} />

      <Footer />
    </div>
  );
};

export default LookBookContainer;
