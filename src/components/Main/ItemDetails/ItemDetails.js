import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import styled from "styled-components";
import { LabeledListElem } from "../../../assets/LabeledListElem.style";
import { GreenButton } from "../../../assets/GreenButton";
import useWindowDimension from "../../../hooks/useWindowDimension";
import ItemCounter from "../../../assets/ItemCounter";
import LoadingSpinner from "../../../assets/LoadingSpinner";
import { Link } from "react-router-dom";
import { BlackButton } from "../../../assets/BlackButton";

export default function ItemDetails(props) {
  const id = props.match.params.id;
  const ShoppingCart = props.shoppingCart;
  const [data, loading] = useFetch(`https://api.pexels.com/v1/photos/${id}`);
  const [userHasClicked, setUserHasClicked] = useState(false);
  const [counter, setCounter] = useState(1);
  const [imgSize, setImgSize] = useState();
  const windowDim = useWindowDimension();

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter === 1) return;
    setCounter(counter - 1);
  };

  useEffect(() => {
    setImgSize(windowDim.width * 0.9);
  }, [windowDim]);

  return (
    <>
      {loading ? (
        <LoadingSpinner dim={"20vh"}></LoadingSpinner>
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
                <p>{(ShoppingCart.getPrice(id) * counter).toFixed(2)} $</p>
              </div>
            </LabeledListElem>
            <div className="spacer">{/* spacer */}</div>
            {userHasClicked ? (
              <div className="buttonContainer">
                <Link to={"/shop"}>
                  <BlackButton>Back to Shop</BlackButton>
                </Link>
                <Link to={"/cart"}>
                  <BlackButton>Go to Cart</BlackButton>
                </Link>
              </div>
            ) : (
              <GreenButton
                onClick={() => {
                  ShoppingCart.add(id, counter);
                  setUserHasClicked(true);
                }}
              >
                Add to cart
              </GreenButton>
            )}
          </InfoContaiener>
        </StyledItemDetails>
      )}
    </>
  );
}

const StyledItemDetails = styled.div`
  min-height: 90vh;
  display: grid;
  padding: 5%;
  gap: 2rem;
  grid-template-columns: 1fr;
  grid-template-rows: ${(props) => props.dim + "px"} 1fr;

  @media (min-width: 1025px) {
    padding: 5% 15%;
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
  @media (min-width: 768px) {
    & > img {
      height: initial;
    }
  }
`;

const InfoContaiener = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  & > .buttonContainer {
    display: flex;
    gap: 2rem;
  }

  & > .spacer {
    height: 2rem;
  }

  @media (max-width: 767px) {
    & > button {
      align-self: center;
    }
    & > .spacer {
      height: 0rem;
    }
  }
`;
