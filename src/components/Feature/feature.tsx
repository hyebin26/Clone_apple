import React from "react";
import styled from "styled-components";
import FeatureLink from "../FeatureLink/featureLink";

type TextProps = {
  padding: string;
  children: React.ReactNode;
  quarter?: string;
  greeting?: string;
};

type Props = {
  containerHeight: string;
  padding: string;
  image: string;
  children?: React.ReactNode;
  quarter?: string;
  greeting?: string;
};

type ImageProps = {
  image: string;
  height: string;
};

const Feature = ({
  containerHeight,
  padding,
  image,
  children,
  quarter,
  greeting,
}: Props) => {
  return (
    <FeatureContainer height={containerHeight} quarter={quarter ? true : false}>
      <FeatureText padding={padding} quarter={quarter} greeting={greeting}>
        {children}
      </FeatureText>
      <FeatureImage image={image} height={containerHeight} />
    </FeatureContainer>
  );
};

const FeatureText = ({ children, padding, quarter, greeting }: TextProps) => {
  return (
    <FeatureTextContainer padding={padding}>
      {children}
      <FeatureLinkWrapper>
        <FeatureLink
          text={greeting ? "영화 보기" : "더 알아보기 >"}
          to="/"
          quarter={quarter}
          greeting={greeting}
        />
        <FeatureLink
          text={greeting ? "메이킹 필름 보기" : "구입하기 >"}
          to="/"
          quarter={quarter}
          greeting={greeting}
        />
      </FeatureLinkWrapper>
    </FeatureTextContainer>
  );
};

const FeatureImage = ({ image, height }: ImageProps) => {
  return (
    <FeatureFigureContainer>
      <FeatureFigure image={image} height={height} />
    </FeatureFigureContainer>
  );
};

const FeatureContainer = styled.section<{ height: string; quarter: boolean }>`
  position: relative;
  width: 100%;
  margin-bottom: 0.8rem;
  height: ${(props) => props.height};
  flex: ${(props) => props.quarter && "0 0 49%"};
`;

const FeatureTextContainer = styled.div<{ padding: string }>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.theme.containerSize.featureTextLarge};
  z-index: 998;
  margin: 0 auto;
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

const FeatureFigure = styled.figure<{ image: string; height: string }>`
  background-image: url("${(props) => props.image}");
  background-repeat: no-repeat;
  background-position: center top;
  width: 100%;
  height: ${(props) => props.height};
`;

const FeatureLinkWrapper = styled.div`
  padding-top: 1rem;
`;

export default Feature;
