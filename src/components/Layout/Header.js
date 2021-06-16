import classes from "./header.module.css";
import { Fragment } from "react";
import headerMealImage from '../../assets/meals.jpg';
import HeaderButton from './HeaderCartButton'


/**
 * React Component representing an HTML header and img element
 * @returns Header
 */
const Header = () => {
  return <Fragment>
    <header className={classes.header}>
      <h1>ReactMeals</h1>
      <HeaderButton>Your Cart</HeaderButton>
    </header>
    <div className={classes["main-image"]}>
      <img src={headerMealImage} alt="Table of food"/>
    </div>
  </Fragment>;
};

export default Header;
