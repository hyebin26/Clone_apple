import React from "react";
import styled from "styled-components";

type ImageProps = {
  image: string;
};

export default function FeatureImage({ image }: ImageProps) {
  return (
    <FeatureFigureContainer>
      <FeatureFigure image={image} />
    </FeatureFigureContainer>
  );
}

const FeatureFigureContainer = styled.div`
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
  height: 100%;
`;
