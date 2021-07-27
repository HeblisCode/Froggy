import { Switch, Route, useLocation } from "react-router-dom";
import React from "react";
import Home from "./components/Main/Home/Home";
import Shop from "./components/Main/Shop/Shop";
import ItemDetails from "./components/Main/ItemDetails/ItemDetails";
import Cart from "./components/Main/Cart/Cart";
import Nav from "./components/Navbar/Nav";
import { GlobalStyles } from "./components/GlobalStyles";
import { useTransition, animated, config } from "@react-spring/web";
import MobileNav from "./components/Navbar/MobileNav";
import { useState, useEffect } from "react";
import useShoppingCart from "./hooks/useShoppingCart";

export default function App() {
  const location = useLocation();
  const [isMenuToggled, setIsMenuToggled] = useState(true);
  const ShoppingCart = useShoppingCart();

  const routesTransition = useTransition(location, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, position: "absolute" },
    config: config.stiff,
  });
  const mobileNavTransition = useTransition(isMenuToggled, {
    from: { x: "100%" },
    enter: { x: "0%" },
    leave: { x: "100%" },
  });

  const toggleMenu = () => {
    setIsMenuToggled(!isMenuToggled);
  };

  //closes the mobile menu after clicking on a link
  useEffect(() => {
    if (isMenuToggled) {
      toggleMenu();
    }
    return;
  }, [location]);

  return (
    <>
      <GlobalStyles />
      <Nav toggleMenu={toggleMenu} isMenuToggled={isMenuToggled} />
      <main>
        {mobileNavTransition((props, item) =>
          item ? <MobileNav style={props} /> : null
        )}
        {routesTransition((props, item) => (
          <animated.div style={props} className="container">
            <Switch location={item}>
              <Route path="/" exact component={Home}></Route>
              <Route
                path="/shop"
                exact
                render={(props) => (
                  <Shop {...props} ShoppingCart={ShoppingCart} />
                )}
              ></Route>
              <Route
                path="/shop/:id"
                render={(props) => (
                  <ItemDetails {...props} shoppingCart={ShoppingCart} />
                )}
              ></Route>
              <Route
                path="/cart"
                exact
                render={(props) => (
                  <Cart {...props} shoppingCart={ShoppingCart} />
                )}
              ></Route>
            </Switch>
          </animated.div>
        ))}
      </main>
    </>
  );
}
