import NewArrivalCard from '@/components/card/newArrival/newArrivalCard';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

interface IProps {
  id: number;
  img: string;
  itemName: string;
  itemColor: string;
  itemPrice: string;
}

interface INewArrivalListProps {
  NewArrivalItem: IProps[];
}

const NewArrivalList = ({ NewArrivalItem }: INewArrivalListProps) => {
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const itemsPerPage = 12; // 페이지당 아이템 개수
  const totalPages = Math.ceil(NewArrivalItem.length / itemsPerPage); // 현재 총 페이지 수

  // 현재 페이지에 해당하는 아이템만 잘라서 보여주는 함수
  const currentItems = NewArrivalItem.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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
            img={item.img}
            itemName={item.itemName}
            itemColor={item.itemColor}
            itemPrice={item.itemPrice}
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
