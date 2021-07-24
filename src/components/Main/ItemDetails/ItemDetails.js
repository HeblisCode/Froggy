import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetchV2";
import styled from "styled-components";
import { LabeledListElem } from "./LabeledListElem.style";
import { GreenButton } from "../../../assets/GreenButton";
import useWindowDimension from "../../../hooks/useWindowDimension";

export default function ItemDetails(props) {
  const id = props.match.params.id;
  const [data, loading] = useFetch(`https://api.pexels.com/v1/photos/${id}`);
  const [imgSize, setImgSize] = useState();
  const windowDim = useWindowDimension();

  useEffect(() => {
    setImgSize(windowDim.width * 0.9);
  }, [windowDim]);

  return (
    <StyledItemDetails dim={imgSize}>
      <div className="imageContainer" style={{ height: "40%" }}>
        {loading ? "Loading" : <img src={data.src.large} alt="" />}
      </div>
      <LabeledListElem>
        <p>Photo by:</p>
        <div>
          <p>
            <a href={data.photographer_url}>{data.photographer}</a>
          </p>
        </div>
      </LabeledListElem>
      <LabeledListElem>
        <p>TEst</p>
        <div>
          <p>test</p>
        </div>
      </LabeledListElem>
      <LabeledListElem>
        <p>Price:</p>
        <div>
          <p>134.00$</p>
        </div>
      </LabeledListElem>
      <GreenButton>Add to Cart</GreenButton>
    </StyledItemDetails>
  );
}

const StyledItemDetails = styled.div`
  width: 100%;
  padding: 5%;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-direction: column;

  & > div > img {
    width: ${(props) => `${props.dim}px`};
    height: ${(props) => `${props.dim}px`};
    object-fit: cover;
  }
`;
