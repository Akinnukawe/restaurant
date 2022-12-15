import { Fragment, useContext } from "react";
import { useHistory } from "react-router-dom";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import CartContext from "../../store/cart-context";

const Header = (props) => {
    const cartCtx = useContext(CartContext);
    const history = useHistory();

    const logout = () => {
        cartCtx.logout();
        history.replace("/");
    }
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <div className={classes.move}>
          <HeaderCartButton onClick={props.onShowCart} />
        </div>
        <button className={classes.buttonmain} onClick={logout}>logout</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="a table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
