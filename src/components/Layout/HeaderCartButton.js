import classes from './HeaderCartButton.module.css';
import CartIcon from '../Features/Cart/CartIcon'

export default HeaderCartButton = props => {
  return <button>
    <span>
      <CartIcon/>
    </span>
    <span>Your Cart</span>
    <span>
      {/* Number of items in cart */}
    </span>
  </button>
};
