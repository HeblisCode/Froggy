import { useEffect, useState } from "react";
import styled from "styled-components";
import useWindowDimension from "../../../hooks/useWindowDimension";

export default function ItemContainer({ itemsDataArray }) {
  const windowDim = useWindowDimension();
  const [numOfColumns, setNumOfColumns] = useState(1);
  const [splittedDataArray, setSplittedDataArray] = useState([]);

  //eval the number of columns based on page width
  useEffect(() => {
    const MAX_COLUMN_WIDTH = 450;
    setNumOfColumns((windowDim.width / MAX_COLUMN_WIDTH).toFixed(0));
  }, [windowDim]);

  //split the data array into #column parts
  useEffect(() => {
    setSplittedDataArray(splitArray(itemsDataArray, numOfColumns));
  }, [itemsDataArray, numOfColumns]);

  return (
    <StyledItemContainer columns={numOfColumns}>
      {splittedDataArray.map((array) => {
        return (
          <div>
            {array.map((image) => {
              return <img src={image.url} alt="" />;
            })}
          </div>
        );
      })}
    </StyledItemContainer>
  );
}

const StyledItemContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => "repeat(" + props.columns + ", 1fr)"};
  gap: 2rem;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  & > div > img {
    width: 100%;
  }

  @media (min-width: 768px) {
  }
`;

function splitArray(array, numOfParts) {
  const tempArray = array.map((elem) => elem);
  const elemPerPart = (tempArray.length / numOfParts).toFixed(0);
  const finalArray = [];
  for (let i = 1; i < numOfParts; i++) {
    finalArray.push(tempArray.splice(0, elemPerPart));
  }
  finalArray.push(tempArray);
  return finalArray;
}
