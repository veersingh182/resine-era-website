import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import ProductComponent from "../components/ProductComponent";
import PriceRange from "../components/PriceRange";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const ProductsMain = styled.div`
  & > .span {
    padding: 2rem 0 0 4rem;
    display: flex;
    align-items: center;
    gap: 0.3rem;

    & > span {
      text-transform: capitalize;
      font-size: 1.5rem;
      font-family: "Ubuntu";
      font-weight: 300;
      text-decoration: underline;
      color: #0b0080;
      cursor: pointer;
    }
    & .downArrowIcon {
      font-size: 1.5rem;
      font-family: "Ubuntu";
      font-weight: 300;
      text-decoration: underline;
      color: #0b0080;
      cursor: pointer;
      transform: translate(0, 2.5px);
    }
  }
`;
const FilterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 4rem;

  @media only screen and (max-width: 600px) {
    /* background-color: #fff; */
    flex-direction: column;
    justify-content: start;
    align-items: start;
    transform: scale(0.9);
    align-items: start;
    padding: 0;
  }
`;
const ResulProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 5rem;
`;

const CategoriesList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  width: fit-content;
  padding: 2rem;
  font-family: "Ubuntu";
  text-transform: capitalize;
  font-size: 1.8rem;
  font-weight: 600;

  & > select {
    padding: 0.5rem 1rem;
    text-transform: capitalize;

    & > option {
      text-transform: capitalize;
      font-size: 1.5rem;
      padding: 1rem 2rem;
      font-family: "Ubuntu";
      font-weight: 300;

      &:hover {
        background-color: lightgray;
      }
    }
  }
`;

const AllProducts = () => {
  return (
    <>
      <Navbar />
      <ProductsMain>
        <span className="span">
          <span>filter</span>
          <FontAwesomeIcon icon={faAngleDown} className="downArrowIcon" />
        </span>
        <FilterBox>
          <PriceRange />
          <CategoriesList>
            category :
            <select>
              <option value="all" defaultChecked>
                All Products
              </option>
              <option value="keychain">keychain</option>
              <option value="nameplates">nameplates</option>
              <option value="photo frames">photo frames</option>
              <option value="resin jewellery">resin jewellery</option>
              <option value="resin tray">resin tray</option>
              <option value="wall clocks">wall clocks</option>
            </select>
          </CategoriesList>
        </FilterBox>
        <ResulProducts>
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
        </ResulProducts>
      </ProductsMain>

      <Footer />
    </>
  );
};

export default AllProducts;
