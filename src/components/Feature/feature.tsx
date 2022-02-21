import mainImage from "@images/main";
import React from "react";
import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
  image: string;
  half?: boolean;
};

const Feature = ({ children, image, half }: Props) => {
  return (
    <FeatureWrapper>
      {children}
      <FeatureFigureWrapper>
        <FeatureFigure image={image} />
      </FeatureFigureWrapper>
    </FeatureWrapper>
  );
};

// children 으로 text, 이미지 크기가 half인 경우를 위해 half, image의 출처

const FeatureWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const FeatureFigureWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
`;

const FeatureFigure = styled.figure<{ image: string }>`
  background-image: url("${(props) => props.image}");
  background-repeat: no-repeat;
  background-position: center top;
  width: 100%;
  height: 100vh;
`;

export default Feature;
