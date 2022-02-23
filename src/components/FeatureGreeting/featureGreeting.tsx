import React from "react";
import styled from "styled-components";
import FeatureLink from "../FeatureLink/featureLink";
import FeatureText from "../FeatureText/featureText";
import mainImage from "@images/main";

type Props = {
  image: string;
};

const FeatureGreeting = ({ image }: Props) => {
  return (
    <FeatureGreetingContainer>
      <FeatureText padding="300px">
        <div>
          <FeatureLink text="영화 보기" to="/" />
          <FeatureLink text="메이킹 필름 보기" to="/" />
        </div>
      </FeatureText>
      <FeatureFigureWrapper>
        <FeatureFirstFigure image={image} />
      </FeatureFigureWrapper>
    </FeatureGreetingContainer>
  );
};

const FeatureGreetingContainer = styled.section`
  position: relative;
  width: 100%;
  margin-bottom: 0.8rem;
  height: ${(props) => props.theme.imageHeights.mainLarge};
`;

const FeatureFirstFigure = styled.figure<{ image: string }>`
  background-image: url("${(props) => props.image}");
  background-repeat: no-repeat;
  background-position: center top;
  width: 100%;
  height: 100vh;
`;

const FeatureFigureWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
`;
export default FeatureGreeting;
