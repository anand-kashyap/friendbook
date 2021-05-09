import React, { FunctionComponent } from 'react';

const Card: FunctionComponent<{ hasHeader?: boolean }> = ({ children, hasHeader = false }) => {
  return (
    <div className={`font-bold bg-white text-lg rounded-2xl shadow-xl card ${hasHeader ? '' : 'p-2'}`}>{children}</div>
  );
};

const CardHeader: FunctionComponent<{}> = ({ children }) => {
  return <div className="flex justify-between bg-red-400 p-6 rounded-2xl rounded-b-none">{children}</div>;
};

export default Card;
export { CardHeader };
