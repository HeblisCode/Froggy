import { Switch, Route, useLocation } from "react-router-dom";
import React from "react";
import Home from "./components/Main/Home/Home";
import Shop from "./components/Main/Shop/Shop";
import Cart from "./components/Main/Cart/Cart";
import Nav from "./components/Navbar/Nav";
import "./App.css";
import { useTransition, animated } from "@react-spring/web";

export default function App() {
  const location = useLocation();
  const transition = useTransition(location, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <>
      <Nav />
      <main>
        {transition((props, item) => (
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
