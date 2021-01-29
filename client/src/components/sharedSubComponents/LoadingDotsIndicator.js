import React from "react";
import styled, { keyframes } from "styled-components";

export const Loading = ({
  size,
  margin,
  padding = 10,
  background,
  duration,
  dots = 3,
}) => {
  //   const Wraper = styled.div`
  //     display: flex;
  //     justify-content: center;
  //     position: fixed;
  //     top: 50%;
  //     left: 50%;
  //     transform: translate(-50%, -50%);
  //   `;
  const Wraper = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 99;
  `;

  const bounceLoading = keyframes`
  to {
    opacity: 0.3;
    transform: translate3d(0, -0.5rem, 0);
  }
  `;

  //   const Dot = styled.div`
  //     width: ${size ? size : "1rem"};
  //     height: ${size ? size : "1rem"};
  //     margin: 0 ${margin ? margin : "0.2rem"};
  //     background: ${background ? background : "rgb(202, 57, 57)"};
  //     border-radius: 50%;
  //     animation: ${duration ? duration : "0.8s"} ${bounceLoading} infinite
  //       alternate;
  //     &:nth-child(2n + 0) {
  //       animation-delay: 0.2s;
  //     }

  //     &:nth-child(3n + 0) {
  //       animation-delay: 0.6s;
  //     }
  //   `;
  const Dot = styled.div`
    width: ${size ? size : "0.5rem"};
    height: ${size ? size : "0.5rem"};
    margin: 0 ${margin ? margin : "0.2rem"};
    background: ${background ? background : "rgb(66 68 66)"};
    border-radius: 50%;
    animation: ${duration ? duration : "0.6s"} ${bounceLoading} infinite
      alternate;
    &:nth-child(2n + 0) {
      animation-delay: 0.2s;
    }

    &:nth-child(3n + 0) {
      animation-delay: 0.4s;
    }
  `;

  let dotList = [];
  for (let i = 0; i < dots; i++) {
    dotList.push(i);
  }

  const dotRender = dotList.map((dot) => <Dot key={dot}></Dot>);

  return (
    <div style={{ padding: padding }}>
      <Wraper>{dotRender}</Wraper>;
    </div>
  );
};
