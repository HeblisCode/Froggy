import { useEffect, useState } from "react";
import styled from "styled-components";
import useWindowDimension from "../../../hooks/useWindowDimension";
import splitArray from "../../../lib/splitArray";
import Item from "./Item";
import useFetch from "../../../hooks/useFetch";
import LoadingSpinner from "../../../assets/LoadingSpinner";

export default function ItemContainer(props) {
  const { ShoppingCart } = props;
  const windowDim = useWindowDimension();
  const [numOfColumns, setNumOfColumns] = useState(1);
  const [splittedDataArray, setSplittedDataArray] = useState([]);
  const [dataArray, loading] = useFetch(
    `https://api.pexels.com/v1/search?query=frog&curated?page=1&per_page=${40}`
  );

  //eval the number of columns based on page width
  // useEffect(() => {
  //   const MAX_COLUMN_WIDTH = 650;
  //   const columns = (windowDim.width / MAX_COLUMN_WIDTH).toFixed(0);
  //   setNumOfColumns(+columns === 0 ? 1 : columns);
  // }, [windowDim]);

  // //split the data array into #columns parts
  // useEffect(() => {
  //   if (!loading) {
  //     setSplittedDataArray(splitArray(dataArray.photos, numOfColumns));
  //   }
  // }, [dataArray, loading, numOfColumns]);

  return (
    <>
      {loading ? (
        <LoadingSpinner dim={"20vh"} />
      ) : (
        <StyledItemContainer columns={numOfColumns} windowDim={windowDim}>
          {dataArray.photos.map((data) => {
            return (
              <Item
                data={data}
                key={data.id}
                price={ShoppingCart.getPrice(data.id)}
              />
            );
          })}
          {/* {splittedDataArray.map((array, i) => {
            return (
              <div key={i}>
                {array.map((data) => {
                  return (
                    <Item
                      data={data}
                      key={data.id}
                      price={ShoppingCart.getPrice(data.id)}
                    />
                  );
                })}
              </div>
            );
          })} */}
        </StyledItemContainer>
      )}
    </>
  );
}

const StyledItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1250px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  & > div > img {
    width: 100%;
  }
`;
