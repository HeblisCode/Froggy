import React from "react";
import styled from "styled-components";
import { GreenButton } from "../../../assets/GreenButton";
import { colorPalette } from "../../../assets/colorPalette";
import { LabeledListElem } from "../../../assets/LabeledListElem.style";

export default function CheckoutMenu({ ShoppingCart }) {
  return (
    <StyledCheckoutMenu>
      <div>
        <LabeledListElem>
          <p>#Frogs</p>
          <div>{ShoppingCart.getTotalItems()}</div>
        </LabeledListElem>
        <LabeledListElem>
          <p>Total</p>
          <div>
            <p>{ShoppingCart.getTotalPrice()} $</p>
          </div>
        </LabeledListElem>
        <GreenButton>Checkout</GreenButton>
      </div>
    </StyledCheckoutMenu>
  );
}

const StyledCheckoutMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${colorPalette.black};

  & > div {
    display: flex;
    gap: 2rem;
    flex-direction: column;
  }
`;
