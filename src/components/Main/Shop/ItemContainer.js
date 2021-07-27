import styled from "styled-components";
import Item from "./Item";
import useFetch from "../../../hooks/useFetch";
import LoadingSpinner from "../../../assets/LoadingSpinner";

export default function ItemContainer(props) {
  const { ShoppingCart } = props;
  const [dataArray, loading] = useFetch(
    `https://api.pexels.com/v1/search?query=frog&curated?page=1&per_page=${40}`
  );

  return (
    <>
      {loading ? (
        <LoadingSpinner dim={"20vh"} />
      ) : (
        <StyledItemContainer>
          {dataArray.photos.map((data) => {
            return (
              <Item
                data={data}
                key={data.id}
                price={ShoppingCart.getPrice(data.id)}
              />
            );
          })}
        </StyledItemContainer>
      )}
    </>
  );
}

const StyledItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
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

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    padding: 2rem;
  }
`;
