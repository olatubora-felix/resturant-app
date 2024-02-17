/* eslint-disable react/prop-types */

import "./Showcase.css";
import hero from "../../../assets/img/hero.png";
import { CustomButton } from "../../UI/customButton/CustomButton";
import { useState } from "react";
import { Result } from "../result/Result";
export const Showcase = ({ title, content }) => {
  const initialState = {
    name: "John",
    age: 25,
  };
  const [count, setCount] = useState(20);
  const [info, setInfo] = useState(initialState);

  const increaseCount = () => {
    setCount((prevState) => prevState + 1);
    setInfo((prevState) => ({ ...prevState, isMarried: false }));
  };

  const decreaseCount = () => {
    if (count === 0) return alert("Count can't be less than 0");
    setCount((prevState) => prevState - 1);
  };

  return (
    <section className="container-wrapper showcase">
      <div className="showcase-grid">
        <div className="showcase-grid__items1">
          <h5>{title}</h5>
          <h3>The key to Fine dining</h3>
          <p>{content}</p>
          <CustomButton
            text="Add Count"
            className={"showcase-btn"}
            handleClick={increaseCount}
            type={"button"}
          />
          <Result count={count} />
          <CustomButton
            text="Decrease Count"
            className={"showcase-btn"}
            handleClick={decreaseCount}
            type={"button"}
          />
          <div>
            <h4>{info.name}</h4>
            <h4>{info.age}</h4>
          </div>
        </div>
        <img src={hero} alt="" />
      </div>
    </section>
  );
};
