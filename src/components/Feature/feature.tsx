import React from "react";
import styled from "styled-components";
import FeatureLink from "../FeatureLink/featureLink";

type TextProps = {
  padding: string;
  children: React.ReactNode;
};

type Props = {
  containerHeight: string;
  padding: string;
  image: string;
  children?: React.ReactNode;
};

type ImageProps = {
  image: string;
  height: string;
};

const Feature = ({ containerHeight, padding, image, children }: Props) => {
  return (
    <FeatureContainer height={containerHeight}>
      <FeatureText padding={padding}>{children}</FeatureText>
      <FeatureFigure image={image} height={containerHeight} />
    </FeatureContainer>
  );
};

const FeatureText = ({ children, padding }: TextProps) => {
  return (
    <FeatureTextContainer padding={padding}>
      {children}
      <div>
        <FeatureLink text="더 알아보기 >" to="//" />
        <FeatureLink text="구입하기 >" to="//" />
      </div>
    </FeatureTextContainer>
  );
};

const FeatureFigure = ({ image, height }: ImageProps) => {
  return (
    <FeatureFigureContainer>
      <FeatrueFigure image={image} height={height} />
    </FeatureFigureContainer>
  );
};

const FeatureContainer = styled.section<{ height: string }>`
  position: relative;
  width: 100%;
  margin-bottom: 0.8rem;
  height: ${(props) => props.height};
`;

const FeatureTextContainer = styled.div<{ padding: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${(props) => props.padding};
  position: relative;
  z-index: 998;
`;

const FeatureFigureContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
`;

const FeatrueFigure = styled.figure<{ image: string; height: string }>`
  background-image: url("${(props) => props.image}");
  background-repeat: no-repeat;
  background-position: center top;
  width: 100%;
  height: ${(props) => props.height};
`;

export default Feature;
