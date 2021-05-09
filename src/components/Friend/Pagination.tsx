import { LeftIcon } from '@icons/index';
import React, { useState } from 'react';
import ImgButton from '../ImgButton';

type PaginationProps = {
  totalItems: number;
  currentPage: number;
  setPage: (page: number) => void;
};

const Pagination = ({ totalItems, currentPage, setPage }: PaginationProps) => {
  const [totalPages] = useState(Math.ceil(totalItems / 4));

  return (
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
  );
};

export default Pagination;
