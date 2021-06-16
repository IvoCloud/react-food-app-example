import classes from './HeaderCartButton.module.css';
import CartIcon from '../Features/Cart/CartIcon'

const HeaderCartButton = props => {
  return <button className={classes.button}>
    <span className={classes.icon}>
      <CartIcon/>
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>
      {/* Number of items in cart */}
    </span>
  </button>
};

export default HeaderCartButton;