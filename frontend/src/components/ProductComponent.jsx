import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Product = styled.div`
  padding: 2rem;
  width: fit-content;
  outline: 1px solid #c6d7e083;
  border-radius: 1rem;

  &:hover {
    background-color: #d9e5eb43;
  }
  @media only screen and (max-width: 579px) {
    padding: 0.5rem;
  }

  & > .imgAndDesc {
    & > img {
      height: 26rem;
      width: 24rem;
      object-fit: cover;
      border-radius: 1rem;
      cursor: pointer;
    }
    @media only screen and (max-width: 579px) {
      & > img {
        height: 18rem;
        width: 14rem;
      }
    }

    & > .descBox {
      padding-top: 0.5rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 1rem;

      & > .productTittle {
        font-size: 1.8rem;
        font-weight: 400;
        text-transform: capitalize;
        font-family: "Ubuntu";

        @media only screen and (max-width: 579px) {
          /* padding: 0.5rem; */
          font-size: 1.4rem;
        }
      }

      & > .priceAndCart {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        & > .productPrice {
          font-size: 1.8rem;
          font-weight: 400;
          text-transform: capitalize;
          font-family: "Ubuntu";
          @media only screen and (max-width: 579px) {
            /* padding: 0.5rem; */
            font-size: 1.4rem;
          }
        }

        & > .addTocart {
          & > .addtoCartIcon {
            font-size: 2.3rem;
            color: #4c855d;
            cursor: pointer;

            @media only screen and (max-width: 579px) {
              /* padding: 0.5rem; */
              font-size: 1.6rem;
            }
          }
        }
      }
    }
  }
`;

const ProductComponent = () => {
  return (
    <Product>
      <div className="imgAndDesc">
        <img src="./images/resinkeychain.avif" alt="" />
        <div className="descBox">
          <h3 className="productTittle">resin Key chain</h3>
          <div className="priceAndCart">
            <span className="productPrice">&#x20B9; 123</span>
            <span className="addTocart">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="addtoCartIcon"
              />
            </span>
          </div>
        </div>
      </div>
    </Product>
  );
};

export default ProductComponent;
