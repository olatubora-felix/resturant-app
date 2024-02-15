import "./CustomButton.css";
/* eslint-disable react/prop-types */
export const CustomButton = ({ text, className }) => {
  return <button className={`btn ${className}`}>{text}</button>;
};
