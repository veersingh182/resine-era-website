import styled from "styled-components";
import ReactSlider from "react-slider";
import { useState } from "react";

const RangeConatiner = styled.div`
  /* border: 2px solid gray; */
  width: fit-content;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  gap: 1.5rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    & > div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      & > input {
        width: 6rem;
        border: 1px solid lightgray;
        padding: 3px;
        &:focus {
          outline: none;
        }
      }
    }
  }
`;
const MinPrice = styled.div``;
const MaxPrice = styled.div``;
const SliderBox = styled.div`
  padding: 1rem 0;
  & > .slider {
    width: 18rem;
    height: 3px;
    background-color: #cdd9ed;

    & > .thumb {
      width: 15px;
      height: 15px;
      cursor: pointer;
      background: #fff;
      border-radius: 50%;
      border: 2px solid #275efe;
    }
  }
`;
const MIN = 1;
const MAX = 10000;

const PriceRange = () => {
  const [value, setvalue] = useState([MIN, MAX]);
  return (
    <RangeConatiner>
      <h3>Price Range</h3>
      <div className="">
        <MinPrice>
          <span>Min:</span> <input type="text" value={value[0]} disabled />
        </MinPrice>
        <MaxPrice>
          <span>Max:</span> <input type="text" value={value[1]} disabled />
        </MaxPrice>
      </div>
      <SliderBox>
        <ReactSlider
          className="slider"
          value={value}
          min={MIN}
          max={MAX}
          onChange={setvalue}
        />
      </SliderBox>
    </RangeConatiner>
  );
};

export default PriceRange;
