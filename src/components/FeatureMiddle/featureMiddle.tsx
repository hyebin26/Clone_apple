import React from "react";
import styled from "styled-components";
import FeatureLink from "../FeatureLink/featureLink";
import FeatureText from "../FeatureText/featureText";

type Props = {
  image: string;
};

const FeatureMiddle = ({ image }: Props) => {
  return (
    <FeatureMiddleContainer>
      <FeatureText padding="50px">
        <FeatureTextH2>iPhone 13 Pro</FeatureTextH2>
        <FeatureTextH3>이게 바로 프로.</FeatureTextH3>
        <div>
          <FeatureLink text="더 알아보기 >" to="//" />
          <FeatureLink text="구입하기 >" to="//" />
        </div>
      </FeatureText>
      <FeatureFigureWrapper>
        <FeatrueMiddleFigure image={image} />
      </FeatureFigureWrapper>
    </FeatureMiddleContainer>
  );
};

const FeatureMiddleContainer = styled.section`
  position: relative;
  width: 100%;
  margin-bottom: 0.8rem;
  height: ${(props) => props.theme.imageHeights.middleLarge};
`;
const FeatureTextH2 = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  padding-bottom: ${(props) => props.theme.paddings.featureTextPaddingBottom};
`;
const FeatureTextH3 = styled.h3`
  padding-bottom: ${(props) => props.theme.paddings.featureTextPaddingBottom};
  font-size: 1.5rem;
  font-weight: 500;
`;

const FeatureFigureWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
`;

const FeatrueMiddleFigure = styled.figure<{ image: string }>`
  background-image: url("${(props) => props.image}");
  background-repeat: no-repeat;
  background-position: center top;
  width: 100%;
  height: ${(props) => props.theme.imageHeights.middleLarge};
`;

export default FeatureMiddle;
