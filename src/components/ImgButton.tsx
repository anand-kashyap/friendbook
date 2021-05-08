import React, { ButtonHTMLAttributes } from 'react';

type ImgButtonProps = {
  imgPath: string;
  alt: string;
};

const ImgButton = ({ imgPath, alt }: ImgButtonProps & ButtonHTMLAttributes<any>) => {
  return (
    <button className="h-6 w-6">
      <img src={imgPath} alt={alt} />
    </button>
  );
};

export default ImgButton;
