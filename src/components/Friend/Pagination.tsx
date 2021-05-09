import { LeftIcon } from '@icons/index';
import React, { useEffect, useState } from 'react';
import ImgButton from '../ImgButton';

type PaginationProps = {
  totalItems: number;
  currentPage: number;
  limit: number;
  setPage: (page: number) => void;
};

const Pagination = ({ totalItems, currentPage, setPage, limit }: PaginationProps) => {
  const [totalPages, setTotalPages] = useState(Math.ceil(totalItems / limit));

  useEffect(() => {
    setTotalPages(Math.ceil(totalItems / limit));
  }, [totalItems]);

  return totalItems > limit ? (
    <div className="py-2 px-6 flex justify-center gap-3">
      <ImgButton
        imgPath={LeftIcon}
        onClick={() => setPage(currentPage - 1)}
        disabled={currentPage === 1}
        alt="arrow-left-icon"
        className="h-7 w-7 bg-red-300 p-2 rounded-md hover:bg-red-400 disabled:bg-gray-200"
      />
      <ImgButton
        imgPath={LeftIcon}
        disabled={currentPage === totalPages}
        onClick={() => setPage(currentPage + 1)}
        alt="arrow-right-icon"
        className="h-7 w-7 bg-red-300 hover:bg-red-400 p-2 rounded-md transform rotate-180 disabled:bg-gray-200"
      />
    </div>
  ) : null;
};

export default Pagination;
