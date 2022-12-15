import { useState, Fragment } from "react";
import Header from "../components/Layout/Header";
import Meals from "../components/Meal/Meals";
import Cart from "../components/Cart/Cart";

const Home = () => {
  const [cartIsShown, SetCartIsShown] = useState(false);

  const showCartHandler = () => {
    SetCartIsShown(true);
  };

  const hideCartHandler = () => {
    SetCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};

export default Home;
