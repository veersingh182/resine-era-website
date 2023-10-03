import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import {
  faEnvelope,
  faLocationArrow,
  faShop,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const FooterConatiner = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const FooterDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;

  @media only screen and (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
  }
`;
const LogoAndAddress = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  font-family: "Ubuntu";
  gap: 2rem;

  & > img {
    width: 12rem;
  }

  & .address {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & > span {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
`;
const FeaturedCategories = styled.div`
  & > h2 {
    text-transform: capitalize;
    font-size: 2rem;
    margin-bottom: 2rem;
    font-family: "Ubuntu";
  }

  & > .categoriesList > div {
    text-transform: capitalize;
    font-size: 1.5rem;
    font-family: "Ubuntu";
    padding: 1rem 0;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }
`;
const UserfullLinks = styled.div`
  & > h2 {
    text-transform: capitalize;
    font-size: 2rem;
    font-family: "Ubuntu";
    margin-bottom: 2rem;
  }

  & > div {
    text-transform: capitalize;
    font-size: 1.5rem;
    font-family: "Ubuntu";
    padding: 1rem 0;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }
`;
const CopyrightDetails = styled.div`
  padding: 2rem;
  font-size: 1.5rem;
  font-family: "Ubuntu";
  opacity: 50%;
  margin-bottom: 10rem;

  @media only screen and (min-width: 1050px) {
    margin-bottom: 1rem;
  }
`;
const BottomNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 1rem 5rem;
  background-color: #fff;
  box-shadow: 0 1px 1rem 3px rgba(0, 0, 0, 0.16);
  & .bottomNavIcon {
    font-size: 2rem;
    color: rgba(0, 0, 0, 0.7);
  }

  & > span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    cursor: pointer;

    & > p {
      font-size: 1.3rem;
      font-family: "Ubuntu";
      opacity: 70%;
      text-transform: capitalize;
    }

    & > div {
      position: relative;
      & > .cart-Icon {
        font-size: 3rem;
      }
    }
  }

  & > .cartSpan {
    gap: 1px;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (min-width: 1050px) {
    display: none;
  }
`;
const ItemCount = styled.div`
  position: absolute;
  top: 0;
  right: -7px;
  width: 2rem;
  height: 2rem;
  background-color: #6ca77e;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1.3rem;
  font-family: "Ubuntu";
  color: white;
`;

const Footer = () => {
  return (
    <FooterConatiner>
      <FooterDetails>
        <LogoAndAddress>
          <img src="./images/logo.png" alt="" />
          <div className="address">
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
              info@abcd.co.in
            </span>
            <span>
              <FontAwesomeIcon icon={faLocationArrow} />
              Pune, Maharashtra
            </span>
          </div>
        </LogoAndAddress>
        <FeaturedCategories>
          <h2>Featured categories</h2>
          <div className="categoriesList">
            <div className="categoriesListItem">Coasters</div>
            <div className="categoriesListItem">geode Mug</div>
            <div className="categoriesListItem">Mantras</div>
            <div className="categoriesListItem">Tables</div>
            <div className="categoriesListItem">
              Tealight Holder/Diya Holder
            </div>
            <div className="categoriesListItem">Wall Arts</div>
          </div>
        </FeaturedCategories>

        <UserfullLinks>
          <h2>Usefull Links</h2>
          <div className="usefullLinks">Privacy Policy</div>
          <div className="usefullLinks">Shipping & Return</div>
          <div className="usefullLinks">Terms & Conditions</div>
        </UserfullLinks>
      </FooterDetails>

      <CopyrightDetails>
        RESINE ERA 2023. Designed by Virendra.
      </CopyrightDetails>

      <BottomNav>
        <span>
          <FontAwesomeIcon icon={faShop} className="bottomNavIcon" />
          <p>shop</p>
        </span>

        <span className="cartSpan">
          <div className="">
            <ShoppingBagOutlinedIcon className="bottomNavIcon cart-Icon" />
            <ItemCount>9</ItemCount>
          </div>
          <p>cart</p>
        </span>

        <span>
          <FontAwesomeIcon icon={faUser} className="bottomNavIcon" />
          <p>Cart</p>
        </span>
      </BottomNav>
    </FooterConatiner>
  );
};

export default Footer;
