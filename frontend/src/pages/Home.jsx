import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import Carousel from "../components/Carousel";
import ProductComponent from "../components/ProductComponent";

const MainContainer = styled.main``;
const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 2.5fr 1.5fr 2fr 2fr;
  padding: 2rem;
  gap: 2rem;

  & .gridBox-1 {
    background: url("./images/wall-clock.jpg");
    height: 34rem;
    width: 100%;
    grid-row: 1/2;
    background-position: center center !important;
  }

  & .gridBox-2 {
    background: url("./images/resinkeychain.avif");
    grid-row: 2/3;
  }
  & .gridBox-3 {
    background: url("./images/coasters.jpeg");
    grid-row: 3/4;
  }
  & .gridBox-4 {
    background: url("./images/01.jpg");
    grid-row: 4/5;
  }

  & .gridBox {
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    background-position: center center;

    & > div {
      position: absolute;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      left: 0;
      bottom: 0;
      padding: 1rem;
      background-color: #ffffff75;
      width: 100%;

      & > .boxHeading {
        font-size: 2.2rem;
        text-transform: capitalize;
        font-weight: 600;
        font-family: "Ubuntu";
      }

      & > .boxBtn {
        align-self: start;
        padding: 1rem 2rem;
        background-color: #6ca77e;
        border: none;
        border: 2px solid #6ca77e;
        color: #fff;
        text-transform: uppercase;
        font-size: 1.35rem;
        font-weight: 600;
        font-family: "Ubuntu";
      }
    }
  }
  @media only screen and (min-width: 600px) {
    grid-template-rows: 2.5fr 1.5fr 2fr 2fr;
    & .gridBox-1 {
      background: url("./images/wall-clock.jpg");
      height: 45rem;
      width: 100%;
      border: 2px sold gold;
    }
  }

  @media only screen and (min-width: 940px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 5rem;
    & .gridBox-1 {
      grid-column: 1/3;
      grid-row: 1/3;
      height: 60rem;
      width: 100%;
    }

    & .gridBox-2 {
      grid-column: 3/4;
      grid-row: 1/2;
    }
    & .gridBox-3 {
      grid-column: 4;
      grid-row: 1/2;
    }

    & .gridBox-4 {
      grid-row: 2/3;
      grid-column: 3/5;
    }

    & .gridBox {
      border-radius: 1.5rem;
    }
  }
`;

const ProductContainer = styled.div`
  padding: 2rem;

  & > h2 {
    padding: 1rem 0;
    font-size: 2.2rem;
    font-weight: 400;
    text-transform: uppercase;
    font-family: "Ubuntu";
    text-align: center;
  }
  & > .products {
    margin: 2rem auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap:2rem;
  }
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <GridContainer>
          <div className="gridBox-1 gridBox">
            <div className="">
              <h2 className="boxHeading">Wall Clock</h2>
              <button className="boxBtn">view products</button>
            </div>
          </div>
          <div className="gridBox-2 gridBox">
            <div className="">
              <h2 className="boxHeading">resin key</h2>
              <button className="boxBtn">view products</button>
            </div>
          </div>
          <div className="gridBox-3 gridBox">
            <div className="">
              <h2 className="boxHeading">resin coasters</h2>
              <button className="boxBtn">view products</button>
            </div>
          </div>
          <div className="gridBox-4 gridBox">
            <div className="">
              <h2 className="boxHeading">resin coasters</h2>
              <button className="boxBtn">view products</button>
            </div>
          </div>
        </GridContainer>

        <Carousel />

        <ProductContainer>
          <h2>New Arrivals</h2>
          <div className="products">
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
          </div>
        </ProductContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Home;
