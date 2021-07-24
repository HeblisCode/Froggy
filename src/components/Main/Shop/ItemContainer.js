import { useEffect, useState } from "react";
import styled from "styled-components";
import useWindowDimension from "../../../hooks/useWindowDimension";
import splitArray from "../../../lib/splitArray";
import Item from "./Item";

export default function ItemContainer({ itemsDataArray }) {
  const windowDim = useWindowDimension();
  const [numOfColumns, setNumOfColumns] = useState(1);
  const [splittedDataArray, setSplittedDataArray] = useState([]);

  //eval the number of columns based on page width
  useEffect(() => {
    const MAX_COLUMN_WIDTH = 650;
    const columns = (windowDim.width / MAX_COLUMN_WIDTH).toFixed(0);
    setNumOfColumns(+columns === 0 ? 1 : columns);
  }, [windowDim]);

  //split the data array into #columns parts
  useEffect(() => {
    setSplittedDataArray(splitArray(itemsDataArray, numOfColumns));
  }, [itemsDataArray, numOfColumns]);

  return (
    <StyledItemContainer columns={numOfColumns}>
      {splittedDataArray.map((array, i) => {
        return (
          <div key={i}>
            {array.map((data) => {
              return <Item data={data} key={data.id} />;
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
`;
