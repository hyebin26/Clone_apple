import { mainFirst } from "@images/main";
import React from "react";
import styled from "styled-components";

const Feature = () => {
  return (
    <FeatureWrapper>
      <FigureImg></FigureImg>
    </FeatureWrapper>
  );
};

const FeatureWrapper = styled.div``;
const FigureImg = styled.figure`
  background-image: url("${mainFirst}");
  width: 100vw;
  height: 100vh;
`;

export default Feature;
