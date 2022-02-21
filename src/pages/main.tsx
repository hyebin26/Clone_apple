import mainImage from "@images/main";
import React from "react";
import Feature from "src/components/Feature/feature";
import FeatureImage from "src/components/FeatureImage/featureImage";
import FeatureLink from "src/components/FeatureLink/featureLink";
import Nav from "src/components/Nav/nav";
import ShopOnline from "src/components/ShopOnline/shopOnline";
import styled from "styled-components";

const Main = () => {
  return (
    <section>
      <Nav />
      <ShopOnline />
      <Feature image={mainImage.mainFirst.large}>
        <FeatureTextMainContainer>
          <FeatureTextMainWrapper>
            <FeatureLink text="영화 보기" to="/" />
            <FeatureLink text="메이킹 필름 보기" to="/" />
          </FeatureTextMainWrapper>
        </FeatureTextMainContainer>
      </Feature>
      <Feature image={mainImage.mainSecond.large}>
        <FeatureTextMainContainer>
          <h2>iPhone 13 Pro</h2>
          <h3>이게 바로 프로.</h3>
        </FeatureTextMainContainer>
      </Feature>
    </section>
  );
};

const FeatureTextMainContainer = styled.div``;

const FeatureTextMainWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 300px;
`;

export default Main;
