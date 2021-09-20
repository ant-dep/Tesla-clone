import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
            {/* hide for Section without rightBtnText */}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 100vh;
  width: 100vw;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  background-size: cover;
  background-position: center;
  background-repear: no-repeat;
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  h1 {
    font-size: 50px;
    font-weight: 500;
  }
  p {
    padding-top: 5px;
    color: #5c5d61;
  }
`;

const Buttons = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
`;
const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;
