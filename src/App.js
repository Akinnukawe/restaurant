import { useContext } from "react";
import {Switch, Route } from "react-router-dom";
import CartContext from "./store/cart-context";
import Home from "./page/Home";
import Login from "./page/Login";

function App() {

  const cartCtx = useContext(CartContext);

  // const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <Switch>
      {!cartCtx.isLoggedIn && <Route path="/restaurant" exact>
        <Login />
      </Route>}
      {cartCtx.isLoggedIn && <Route path="/meals">
        <Home />
      </Route>}
    </Switch>
    // {!isLoggedIn && <Login login = {login}/>}
    // {isLoggedIn&& <Home/>}
  );
}

export default App;
