import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import CartContext from "../../store/cart-context";
import classes from "./Login.module.css";

const LoginMain = (props) => {
  const cartCtx = useContext(CartContext);
  const history = useHistory();
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  // const [emailNotEmpty, setEmailNotEmpty] = useState(false);
  // const [passwordNotEmpty, setPasswordNotEmpty] = useState(false);
   const enteredEmailIsValid = enteredEmail.includes("@");
   const enteredPasswordIsValid = enteredPassword.length > 6;

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  
  const reset = () => {
      setEnteredEmail("");
      setEnteredPassword("");
  }

  const loginHandler = (event) => {
      event.preventDefault();
    if (
      (!enteredEmailIsValid && !enteredPasswordIsValid) ||
      (enteredEmailIsValid && !enteredPasswordIsValid) ||
      (!enteredEmailIsValid && enteredPasswordIsValid)
    ) {
        alert("wrong password or wrong email");
    }
    if(enteredEmailIsValid && enteredPasswordIsValid){
    cartCtx.login();
    history.replace("/meals");
    }
    reset();
  };

  return (
    <div className={classes.body}>
      <div className={classes.pos}>
        <h2>Login</h2>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <input
              type="email"
              id="email"
              required
              onChange={emailChangeHandler}
              // onBlur={emailBlur}
              value={enteredEmail}
              
            />
            <label htmlFor="e-mail">E-mail</label>
          </div>
          <div className={classes.control}>
            <input
              type="text"
              id="password"
              required
              onChange={passwordChangeHandler}
              // onBlur={passwordBlur}
              value={enteredPassword}
              
            />
            <label htmlFor="e-mail">Password</label>
          </div>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginMain;
