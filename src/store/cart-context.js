import React from "react";

const CartContext = React.createContext({
    items: [],
    amount: 0,
    addItem: (item) => {},
    removeItem: (item) => {},
    login: () => {},
    logout: () => {},
    isLoggedIn: false,
});

export default CartContext;