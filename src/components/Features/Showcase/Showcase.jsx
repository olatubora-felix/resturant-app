import "./Showcase.css";
import hero from "../../../assets/img/hero.png";
import { CustomButton } from "../../UI/customButton/CustomButton";
export const Showcase = () => {
  return (
    <section className="container-wrapper showcase">
      <div className="showcase-grid">
        <div className="showcase-grid__items1">
          <h5>Chase the new Flavour</h5>
          <h3>The key to Fine dining</h3>
          <p>
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus{" "}
          </p>
          <CustomButton text="Explore Menu" className={"showcase-btn"} />
        </div>
        <img src={hero} alt="" />
      </div>
    </section>
  );
};
