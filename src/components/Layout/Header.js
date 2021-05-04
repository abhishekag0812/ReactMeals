import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div>
        <img
          src={mealsImage}
          className={classes["main-image"]}
          alt="A table full of delicious food"
        />
      </div>
    </Fragment>
  );
};

export default Header;
