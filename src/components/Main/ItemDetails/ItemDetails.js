import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import styled from "styled-components";
import { LabeledListElem } from "./LabeledListElem.style";
import { GreenButton } from "../../../assets/GreenButton";
import useWindowDimension from "../../../hooks/useWindowDimension";
import ItemCounter from "../../../assets/ItemCounter";

export default function ItemDetails(props) {
  const id = props.match.params.id;
  const ShoppingCart = props.shoppingCart;
  const [data, loading] = useFetch(`https://api.pexels.com/v1/photos/${id}`);
  const [counter, setCounter] = useState(1);
  const [imgSize, setImgSize] = useState();
  const windowDim = useWindowDimension();

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  };

  useEffect(() => {
    setImgSize(windowDim.width * 0.9);
  }, [windowDim]);

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <StyledItemDetails dim={imgSize}>
          <ImageContainer>
            <img src={data.src.large} alt="" />
          </ImageContainer>
          <InfoContaiener>
            <LabeledListElem>
              <p>Photo by:</p>
              <div>
                <a href={data.photographer_url}>{data.photographer}</a>
              </div>
            </LabeledListElem>
            <LabeledListElem>
              <p>Quantity:</p>
              <ItemCounter
                add={incrementCounter}
                sub={decrementCounter}
                display={counter}
              />
            </LabeledListElem>
            <LabeledListElem>
              <p>Price:</p>
              <div>
                <p>123.00$</p>
              </div>
            </LabeledListElem>
            <GreenButton onClick={() => ShoppingCart.add(id, counter)}>
              Add to cart
            </GreenButton>
          </InfoContaiener>
        </StyledItemDetails>
      )}
    </>
  );
}

const StyledItemDetails = styled.div`
  display: grid;
  padding: 5%;
  gap: 2rem;
  grid-template-columns: 1fr;
  grid-template-rows: ${(props) => props.dim + "px"} 1fr;

  @media (min-width: 768px) {
    padding: 5% 20%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

const ImageContainer = styled.div`
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const InfoContaiener = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;
