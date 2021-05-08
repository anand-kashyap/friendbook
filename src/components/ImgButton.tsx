import React from 'react';

type ImgButtonProps = {
  imgPath: string;
  alt: string;
};

const ImgButton = ({ imgPath, alt }: ImgButtonProps) => {
  return (
    <button className="h-6 w-6">
      <img src={imgPath} alt={alt} />
    </button>
  );
};

export default ImgButton;
