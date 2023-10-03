import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import {
  faAngleDown,
  faAngleRight,
  faBars,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
const Container = styled.nav`
  position: relative;
  z-index: 9999;
  & > .sideMnuConatainer {
    display: flex;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;

    & .bgfader {
      height: 100vh;
      width: 25%;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`;

const ContactBarContaimner = styled.div`
  width: 100%;
  background-color: #79b38a;
  padding: 1.2rem 3rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1049px) {
    justify-content: center;
  }

  & > div {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 1049px) {
      & > span {
        display: none;
      }
    }

    & > span {
      color: white;
      font-size: 1.4rem;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
  & .socialMediaContact {
    color: white;
    font-size: 1.8rem;
  }
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  background-color: #f4ece1;
`;

const MenuPhone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: opacity 0.2s ease;

  & > .phoneMenuIcon {
    font-size: 2rem;
    opacity: inherit;
    color: rgba(0, 0, 0, 0.8);
  }

  & > span {
    opacity: inherit;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.8);
  }

  &:hover {
    opacity: 70%;
  }

  @media only screen and (min-width: 1050px) {
    display: none;
  }
`;

const BrandLogo = styled.div`
  & > img {
    width: 5.5rem;
  }
`;
const Cart = styled.div`
  & > .cartIcon {
    font-size: 3rem;
  }
`;

const ItemCount = styled.span`
  padding: 0.3rem 0.5rem;
  background-color: #6ca77e;
  border-radius: 50%;
  font-size: 1rem;
  color: #ffffff;
  font-weight: 600;
  float: right;
  transform: translateX(-1rem);
`;

const SideMenu = styled.div`
  width: 75%;
  background-color: white;
`;
const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  box-shadow: 0 1px 0.5rem 1px rgba(0, 0, 0, 0.15);
  padding: 1rem;
  z-index: 999;

  & > input {
    width: 80%;
    padding: 2rem 1rem;
    font-size: 1.5rem;
    font-family: "Ubuntu";
    font-weight: 500;
    border: none;
    color: rgba(0, 0, 0, 0.7);
  }

  & > input:focus {
    outline: none;
  }

  & > .searchIcon {
    font-size: 2.2rem;
    opacity: 50%;
  }
`;

const MenuCategories = styled.div`
  display: flex;
  margin-top: 1.5px;
  border-bottom: 1px solid lightgray;

  & > .menu {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    text-transform: uppercase;
    font-size: 1.3rem;
    font-family: "Ubuntu";
    background-color: #f0efef;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  & > .category {
    cursor: pointer;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    text-transform: uppercase;
    font-size: 1.3rem;
    font-family: "Ubuntu";
    background-color: #f0efef;
    color: rgba(0, 0, 0, 0.5);
  }

  & > .active {
    border-bottom: 2px solid #76ac86;
    background-color: #dedede;
    color: rgba(0, 0, 0, 1);
  }
`;

const MenuItems = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    padding: 2rem;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.9);
    font-family: "League Spartan";
    cursor: pointer;
    text-transform: uppercase;
  }

  & > .link {
    text-decoration: none;  
  }

  & > .link > div {
    padding: 2rem;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.9);
    font-family: "League Spartan";
    cursor: pointer;
    text-transform: uppercase;
  }
  & > .allProducts {
    padding: 0;
  }
`;

const AllProductDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  & > span {
    padding: 2rem;
  }

  & .arrow {
    font-size: 1.5rem;
    padding: 2.2rem;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
  }
  /* & .angle-right {
    display: none;
  } */

  & .active {
    background-color: #7ab38b;
    color: #fff;
  }
`;
const ProductList = styled.div`
  height: 40vh;
  overflow-y: scroll;
  & > div {
    padding: 2rem;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.5);
    font-family: "League Spartan";
    cursor: pointer;
    text-transform: uppercase;
  }
`;
const CategoryItems = styled.div`
  & div {
    padding: 2rem;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.9);
    font-family: "League Spartan";
    cursor: pointer;
    text-transform: uppercase;
  }
`;
const NavMenuOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  list-style: none;

  @media only screen and (max-width: 1049px) {
    display: none;
  }
  & > li {
    list-style: none;
    font-family: "League Spartan";
    font-size: 1.6rem;
    text-transform: uppercase;
    color: #02021b;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0.5rem;
  }

  & > li.active {
    border-bottom: 1.5px solid #6ca77e;
  }

  & > li:hover {
    border-bottom: 1.5px solid #6ca77e;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  width: fit-content;
  width: 60rem;
  margin: 0 auto;
  margin-top: 3rem;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  /* padding: 2rem; */
  border: 1px solid black;
  background-color: #fff;
  border-radius: 8px;
  padding: 2px;

  @media only screen and (max-width: 1049px) {
    display: none;
  }

  & > .searchInput {
    border: none;
    width: 90%;
    padding: 1rem 2rem;

    &:focus {
      outline: none;
    }
  }
  & > .search_Icon {
    padding: 1rem;
    cursor: pointer;
  }
`;

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [menuBox, setMenuBox] = useState("active");
  const [categoryBox, setCategoryBox] = useState(null);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [downArrow, setDownArrow] = useState(false);
  const [isScrollAllowed, setIsScrollAllowed] = useState("scroll");

  const handelMenuOpen = () => {
    if (!isMenuOpen) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };

  const handelMenuOrCategory = (a) => {
    if (a == "m") {
      if (!menuBox) {
        setMenuBox("active");
        setCategoryBox(null);
      }
    } else {
      setCategoryBox("active");
      setMenuBox(null);
    }
  };

  const handleArrow = () => {
    if (!downArrow) {
      setDownArrow(!downArrow);
      setShowAllProducts(true);
    } else {
      setDownArrow(!downArrow);
      setShowAllProducts(false);
    }
  };

  return (
    <Container>
      <ContactBarContaimner>
        <div className="">
          <FontAwesomeIcon icon={faFacebookF} className="socialMediaContact" />
          <FontAwesomeIcon icon={faTwitter} className="socialMediaContact" />
          <FontAwesomeIcon icon={faLinkedinIn} className="socialMediaContact" />
          <FontAwesomeIcon icon={faInstagram} className="socialMediaContact" />
          <FontAwesomeIcon icon={faTelegram} className="socialMediaContact" />
        </div>
        <div className="">
          <span>contact us</span>
        </div>
      </ContactBarContaimner>

      <Navigation>
        <MenuPhone onClick={handelMenuOpen}>
          <FontAwesomeIcon icon={faBars} className="phoneMenuIcon" />
          <span> Menu</span>
        </MenuPhone>

        <BrandLogo>
          <img src="./images/logo.png" alt="" />
        </BrandLogo>

        <NavMenuOptions>
          <NavLinks>
            <li className="active">Home</li>
            <li>About us</li>
            <li>All products</li>
            <li>custome order</li>
            <li>contact us</li>
          </NavLinks>
          <Cart>
            <ShoppingBagOutlinedIcon className="cartIcon" />
            <ItemCount>9</ItemCount>
          </Cart>
        </NavMenuOptions>
      </Navigation>

      {isMenuOpen && (
        <div className="sideMnuConatainer">
          <SideMenu>
            <SearchBox>
              {" "}
              <input type="text" placeholder="Search for products" />{" "}
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="searchIcon"
              />
            </SearchBox>
            <MenuCategories>
              <div
                className={`menu ${menuBox}`}
                onClick={() => handelMenuOrCategory("m")}
              >
                Menu
              </div>
              <div
                className={`category ${categoryBox}`}
                onClick={() => handelMenuOrCategory("c")}
              >
                Category
              </div>
            </MenuCategories>

            {menuBox == "active" && (
              <MenuItems>
                <div className="home">Home</div>
                <div className="aboutUs">About Us</div>

                <div className="allProducts">
                  <AllProductDetails>
                    <span>All Products</span>
                    {!downArrow && (
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className="arrow"
                        onClick={handleArrow}
                      />
                    )}
                    {downArrow && (
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        className="arrow active"
                        onClick={handleArrow}
                      />
                    )}
                  </AllProductDetails>

                  {showAllProducts && (
                    <ProductList>
                      <div className="Coasters">Coasters</div>
                      <div className="Coasters">Coasters</div>
                      <div className="Coasters">Coasters</div>
                      <div className="Coasters">Coasters</div>
                      <div className="Coasters">Coasters</div>
                      <div className="Coasters">Coasters</div>
                      <div className="Coasters">Coasters</div>
                      <div className="Coasters">Coasters</div>
                      <div className="Coasters">Coasters</div>
                      <div className="Coasters">Coasters</div>
                      <div className="Coasters">Coasters</div>
                      <div className="Coasters">Coasters</div>
                      <div className="Coasters">Coasters</div>
                      <div className="Coasters">Coasters</div>
                      <div className="Coasters">Coasters</div>
                      <div className="Coasters">Coasters</div>
                      <div className="Coasters">Coasters</div>
                      <div className="Coasters">Coasters</div>
                      <div className="Coasters">Coasters</div>
                    </ProductList>
                  )}
                </div>
                <div className="customeOrder">Custome order</div>
                <div className="contactUs">Constact us</div>
                <Link to={"/login"} className="link">
                  <div className="loginResister">
                    <FontAwesomeIcon icon={faUser} />{" "}
                    <span>login / Register</span>
                  </div>
                </Link>
              </MenuItems>
            )}

            {categoryBox == "active" && (
              <CategoryItems>
                <div className="categoryItem">keychain</div>
                <div className="categoryItem">nameplates</div>
                <div className="categoryItem">photo frames</div>
                <div className="categoryItem">resin jewellery</div>
                <div className="categoryItem">resin tray</div>
                <div className="categoryItem">wall clocks</div>
              </CategoryItems>
            )}
          </SideMenu>

          <div className="bgfader" onClick={handelMenuOpen}></div>
        </div>
      )}

      <SearchContainer>
        <input
          type="text"
          className="searchInput"
          placeholder="What are you looking for"
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search_Icon" />
      </SearchContainer>
    </Container>
  );
};

export default Navbar;
