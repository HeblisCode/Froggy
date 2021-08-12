import { useState, useEffect } from "react";
import styled from "styled-components";
import CheckoutMenuMobile from "./CheckoutMenuMobile";
import CartItem from "./CartItem";
import useWindowDimension from "../../../hooks/useWindowDimension";
import CheckoutMenu from "./CheckoutMenu";
import EmptyCart from "./EmptyCart";
import { BlackButton } from "../../../assets/BlackButton";

export default function Cart({ shoppingCart }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const windowDim = useWindowDimension();

  useEffect(() => {
    if (windowDim.width < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowDim]);

  useEffect(() => {
    if (+shoppingCart.getTotalItems() === 0) {
      setIsCartEmpty(true);
    } else {
      setIsCartEmpty(false);
    }
  }, [shoppingCart]);

  return (
    <>
      {isCartEmpty ? (
        <EmptyCart />
      ) : (
        <CartContainer>
          <ItemsContainer>
            {shoppingCart.items.map((data) => (
              <CartItem
                ShoppingCart={shoppingCart}
                id={data.id}
                key={data.id}
              />
            ))}
            <div className="spacer">{/* spacer */}</div>
            <BlackButton onClick={() => shoppingCart.emptyCart()}>
              Empty Cart
            </BlackButton>
          </ItemsContainer>
          {isMobile ? (
            <CheckoutMenuMobile ShoppingCart={shoppingCart} />
          ) : (
            <CheckoutMenu ShoppingCart={shoppingCart} />
          )}
        </CartContainer>
      )}
    </>
  );
}

const CartContainer = styled.div`
  padding: 5%;
  padding-bottom: 10rem;

  @media (min-width: 768px) {
    padding: 5% 15%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5%;
    height: 90vh;
  }
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  & > .spacer {
    height: 1rem;
    flex-shrink: 0;
  }

  & > button {
    flex-shrink: 0;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    & > .spacer {
      height: 2rem;
    }
  }
`;
