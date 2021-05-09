import React, { ButtonHTMLAttributes } from 'react';

type ImgButtonProps = {
  imgPath: string;
  alt: string;
};

const ImgButton = ({ imgPath, alt, className = '', ...rest }: ImgButtonProps & ButtonHTMLAttributes<any>) => {
  return (
    <button className={`h-6 w-6 focus:outline-none ${className}`} {...rest}>
      <img src={imgPath} alt={alt} />
    </button>
  );
};

export default ImgButton;
