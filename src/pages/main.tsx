import mainImage from "@images/main";
import React from "react";
import Feature from "src/components/Feature/feature";
import FeatureGreeting from "src/components/FeatureGreeting/featureGreeting";
import FeatureMiddle from "src/components/FeatureMiddle/featureMiddle";
import Nav from "src/components/Nav/nav";
import ShopOnline from "src/components/ShopOnline/shopOnline";
import styled from "styled-components";
import theme from "src/styles/theme";

const Main = () => {
  return (
    <section>
      <Nav />
      <ShopOnline />
      <Feature
        containerHeight={theme.imageHeights.mainLarge}
        image={mainImage.mainFirst.large}
        padding="300px"
      />
      <Feature
        containerHeight={theme.imageHeights.middleLarge}
        image={mainImage.mainSecond.large}
        padding="70px"
      >
        <FeatureTextH2>iPhone 13 Pro</FeatureTextH2>
        <FeatureTextH3>이게 바로 프로.</FeatureTextH3>
      </Feature>
      <Feature
        containerHeight={theme.imageHeights.middleLarge}
        image={mainImage.mainThird.large}
        padding="70px"
      >
        <FeatureTextH2>iPhone 13</FeatureTextH2>
        <FeatureTextH3>일상을 위한 비상한 능력</FeatureTextH3>
      </Feature>
    </section>
  );
};

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

export default Main;
