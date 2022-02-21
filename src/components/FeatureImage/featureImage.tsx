import React from "react";
import styled from "styled-components";
import mainImage from "@images/main";

const FeatureImage = () => {
  return (
    <FeatureImageWrapper>
      <FeatureImageContent></FeatureImageContent>
    </FeatureImageWrapper>
  );
};

const FeatureImageWrapper = styled.div``;
const FeatureImageContent = styled.figure`
  top: 0;
  background-image: url("${mainImage.mainFirst.large}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  height: 100vh;
`;

export default FeatureImage;
