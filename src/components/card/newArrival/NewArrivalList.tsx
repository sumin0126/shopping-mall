import { useState } from 'react';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NewArrivalCard from '@/components/card/newArrival/NewArrivalCard';

import type { IProduct } from '@/apis/products/type';

interface INewArrivalListProps {
  products: IProduct[];
}

/**
 * @description 신상품 리스트 컴포넌트
 *
 * @param id - 상품 아이디
 * @param img - 상품 대표이미지
 * @param itemName - 상품 이름
 * @param itemColor - 상품 컬러
 * @param itemPrice - 상품 가격
 */
const NewArrivalList = ({ products }: INewArrivalListProps) => {
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const itemsPerPage = 12; // 페이지당 아이템 개수
  const totalPages = Math.ceil(products.length / itemsPerPage); // 현재 총 페이지 수

  // 현재 페이지에 해당하는 아이템만 잘라서 보여주는 함수
  const currentItems = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // 이전 페이지로 이동시켜주는 함수
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // 다음 페이지로 이동시켜주는 함수
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // totalPages의 길이만큼 빈배열 생성
  const pages = Array.from({ length: totalPages });

  return (
    <div className="new-arrival-list-container">
      <div className="list-wrapper">
        {currentItems.map(item => (
          <NewArrivalCard
            key={item.id}
            img={item.image_url}
            itemName={item.name}
            itemColor={item.color}
            itemPrice={item.price}
          />
        ))}
      </div>

      <div className="page-nation">
        {totalPages > 1 && (
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="arrow-left"
            onClick={handlePrevPage}
            style={{
              opacity: currentPage > 1 ? 1 : 0.3,
            }}
          />
        )}

        {pages.map((_, idx) => {
          const pageNumber = idx + 1; // 페이지 번호
          return (
            <p
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
              style={{
                fontWeight: currentPage === pageNumber ? 'bold' : 'normal',
              }}
            >
              {pageNumber}
            </p>
          );
        })}

        {totalPages > 1 && (
          <FontAwesomeIcon
            icon={faChevronRight}
            className="arrow-right"
            onClick={handleNextPage}
            style={{
              opacity: currentPage < totalPages ? 1 : 0.3,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default NewArrivalList;
