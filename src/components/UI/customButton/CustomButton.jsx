import "./CustomButton.css";
/* eslint-disable react/prop-types */
export const CustomButton = ({ text, className, handleClick, type }) => {
  return (
    <button type={type} className={`btn ${className}`} onClick={handleClick}>
      {text}
    </button>
  );
};
