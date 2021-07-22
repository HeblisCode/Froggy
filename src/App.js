import { Switch, Route, useLocation } from "react-router-dom";
import React from "react";
import Home from "./components/Main/Home/Home";
import Shop from "./components/Main/Shop/Shop";
import Cart from "./components/Main/Cart/Cart";
import Nav from "./components/Navbar/Nav";
import { GlobalStyles } from "./components/GlobalStyles";
import { useTransition, animated } from "@react-spring/web";
import MobileNav from "./components/Navbar/MobileNav";
import { useState, useEffect } from "react";

export default function App() {
  const location = useLocation();
  const [isMenuToggled, setIsMenuToggled] = useState(true);

  const routesTransition = useTransition(location, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
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
      <Nav toggleMenu={toggleMenu} />
      <main>
        {mobileNavTransition((props, item) =>
          item ? <MobileNav style={props} /> : null
        )}
        {routesTransition((props, item) => (
          <animated.div style={props} className="container">
            <Switch location={item}>
              <Route path="/" exact component={Home}></Route>
              <Route path="/shop" exact component={Shop}></Route>
              <Route path="/cart" exact component={Cart}></Route>
            </Switch>
          </animated.div>
        ))}
      </main>
    </>
  );
}
