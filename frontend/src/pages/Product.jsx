import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProductView = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  padding: 6rem;
`;
const ImgBox = styled.div`
  & > .mainImg {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;
const DetailBox = styled.div`
  flex: 1;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const Img = styled.img`
  width: 45rem;
  height: 45rem;
  object-fit: cover;
  border-radius: 8px;
`;
const ImgPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const PaginationImg = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    opacity: 80%;
  }
`;

const ProductTitle = styled.h3`
  text-transform: uppercase;
  font-size: 2.5rem;
  font-weight: 600;
  font-family: "Ubuntu";
  color: #629972;
`;
const ProductDesc = styled.p`
  font-size: 1.5rem;
  font-family: "Ubuntu";
  line-height: 1.5;
  margin: 1rem auto;
  opacity: 0.5;
`;
const ProductPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > .currentPrice {
    display: flex;
    align-items: center;
    gap: 3rem;
  }
`;
const OfferPrice = styled.span`
  font-size: 3rem;
  font-weight: 600;
  font-family: "Ubuntu";
`;
const Descount = styled.span`
  font-size: 2rem;
  font-family: "Ubuntu";
  background-color: #629972;
  color: #fff;
  padding: 3px;
  text-transform: uppercase;
`;
const ActualPrice = styled.span`
  font-size: 2rem;
  font-family: "Ubuntu";
  opacity: 0.4;
`;
const ProductPurchase = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;
`;
const Counter = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  & > .countBtn {
    font-size: 4rem;
    padding: 1rem;
    cursor: pointer;
    color: #629972;

    &:hover {
      opacity: 0.8;
    }
  }

  & > input {
    padding: 1rem;
    font-size: 1.6rem;

    font-weight: 600;
    width: 7rem;
    text-align: center;
  }
`;
const AddToCartBtn = styled.button`
  padding: 1.5rem 3rem;
  background-color: #629972;
  border: none;
  font-size: 1.8rem;
  text-transform: capitalize;
  color: #fff;
  border-radius: 8px;

  &:hover {
    opacity: 0.8;
  }
`;
const Product = () => {
  return (
    <>
      <Navbar />
      <ProductView>
        <ImgBox>
          <div className="mainImg">
            <Img src="./images/keychain.jpg" alt=""></Img>
            <ImgPagination>
              <PaginationImg src="./images/keychain.jpg" alt="" />
              <PaginationImg src="./images/keychain.jpg" alt="" />
              <PaginationImg src="./images/keychain.jpg" alt="" />
              <PaginationImg src="./images/keychain.jpg" alt="" />
            </ImgPagination>
          </div>
        </ImgBox>
        <DetailBox>
          <ProductTitle>resin key chanin multicolor</ProductTitle>
          <ProductDesc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quaerat
            in minima repudiandae vitae corrupti nulla provident illo, laborum
            deserunt sint itaque dolore libero error. Commodi nisi natus modi
            ea?
          </ProductDesc>

          <ProductPrice>
            <div className="currentPrice">
              <OfferPrice>&#8377; 123</OfferPrice>
              <Descount>50% off</Descount>
            </div>
            <ActualPrice>
              <del>&#8377; 246</del>
            </ActualPrice>
          </ProductPrice>

          <ProductPurchase>
            <Counter>
              <span className="minus countBtn">-</span>
              <input type="text" className="counterInput" value={1} />
              <span className="plus countBtn">+</span>
            </Counter>
            <AddToCartBtn>Add to cart</AddToCartBtn>
          </ProductPurchase>
        </DetailBox>
      </ProductView>
      <Footer />
    </>
  );
};

export default Product;
