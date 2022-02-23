import mainImage from "@images/main";
import React from "react";
import Feature from "src/components/Feature/feature";
import Nav from "src/components/Nav/nav";
import ShopOnline from "src/components/ShopOnline/shopOnline";
import styled from "styled-components";
import theme from "src/styles/theme";
import logo from "@icons/logo.svg";
import Footer from "src/components/Footer/Footer";

const Main = () => {
  return (
    <>
      <Nav />
      <ShopOnline />
      <Feature
        containerHeight={theme.imageHeights.mainLarge}
        image={mainImage.mainFirst.large}
        padding="300px"
        greeting="greeting"
      />
      <Feature
        containerHeight={theme.imageHeights.middleLarge}
        image={mainImage.mainSecond.large}
        padding="70px"
      >
        <FeatureTextH2>iPhone 13 Pro</FeatureTextH2>
        <FeatureTextH3>이게 바로 프로</FeatureTextH3>
      </Feature>
      <Feature
        containerHeight={theme.imageHeights.middleLarge}
        image={mainImage.mainThird.large}
        padding="70px"
      >
        <FeatureTextH2 colorChange={true}>iPhone 13</FeatureTextH2>
        <FeatureTextH3 colorChange={true}>
          일상을 위한 비상한 능력
        </FeatureTextH3>
      </Feature>
      <FeatureSubConatiner>
        <Feature
          containerHeight={theme.imageHeights.subLarge}
          image={mainImage.mainFourth.large}
          padding="40px"
          quarter="quarter"
        >
          <FeatureTextNew>New</FeatureTextNew>
          <FeatureTextWatch>
            <img src={logo} alt="logo" />
            WATCH
          </FeatureTextWatch>
          <FeatureTextSeries>SERIES7</FeatureTextSeries>
          <FeatureTextH5>이제껏 가장 큰 디스플레이 탑재</FeatureTextH5>
        </Feature>
        <Feature
          containerHeight={theme.imageHeights.subLarge}
          image={mainImage.mainFifth.large}
          padding="55px"
          quarter="quarter"
        >
          <FeatureTextH4>MacBook Pro</FeatureTextH4>
          <FeatureTextH5>프로다운 막강한 파워</FeatureTextH5>
        </Feature>
        <Feature
          containerHeight={theme.imageHeights.subLarge}
          image={mainImage.mainSixth.large}
          padding="55px"
          quarter="quarter"
        >
          <FeatureTextH4White>더 나은 미래를 향해</FeatureTextH4White>
          <FeatureTextH5White>
            아프로퓨처리즘에서 영감을 받아 새롭게 선보이는 Black Unity 밴드와
            여기에 어울리는 시계 페이스
          </FeatureTextH5White>
        </Feature>
        <Feature
          containerHeight={theme.imageHeights.subLarge}
          image={mainImage.mainSeventh.large}
          padding="420px"
          quarter="quarter"
        >
          <FeatureTextH4>AirPods</FeatureTextH4>
          <FeatureTextH5>공간 음향과 함께, 완전히 새롭게</FeatureTextH5>
        </Feature>
        <Feature
          containerHeight={theme.imageHeights.subLarge}
          image={mainImage.mainEighth.large}
          padding="40px"
          quarter="quarter"
        >
          <FeatureTextH4>대학 생활용 MAC 또는</FeatureTextH4>
          <FeatureTextH4>iPad 구입하고 AirPods까지 함께.</FeatureTextH4>
        </Feature>
        <Feature
          containerHeight={theme.imageHeights.subLarge}
          image={mainImage.mainNineth.large}
          padding="400px"
          quarter="quarter"
        >
          <FeatureTextLogoWhite>
            <img src={logo} alt="logo" />
            tv+
          </FeatureTextLogoWhite>
          <FeatureTextH5White>
            Apple 기기를 구입하면 Apple TV+가 3개월 무료
          </FeatureTextH5White>
        </Feature>
      </FeatureSubConatiner>
      <Footer />
    </>
  );
};

const FeatureTextSeries = styled.span`
  font-size: 0.8rem;
  color: #ea0000;
  font-weight: bold;
  letter-spacing: 2px;
`;

const FeatureTextH4 = styled.h4`
  font-size: 2rem;
  font-weight: bold;
`;

const FeatureTextH4White = styled(FeatureTextH4)`
  color: ${(props) => props.theme.colors.linkWhite};
  font-size: 2rem;
`;

const FeatureTextNew = styled.span`
  color: ${(props) => props.theme.colors.orange};
  font-size: 0.8rem;
`;

const FeatureTextH5 = styled.h5`
  padding-top: 1rem;
  font-size: 1rem;
  font-weight: 600;
`;

const FeatureTextH5White = styled(FeatureTextH5)`
  color: ${(props) => props.theme.colors.linkWhite};
  font-size: 1.2rem;
`;

const FeatureTextWatch = styled.h4`
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 3px;
  padding: 0.2rem 0;
  img {
    width: 27px;
    padding-right: 3px;
  }
`;

const FeatureTextLogoWhite = styled(FeatureTextWatch)`
  color: ${(props) => props.theme.colors.linkWhite};
  img {
    filter: ${(props) => props.theme.colors.whiteImageHover};
  }
`;

const FeatureSubConatiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const FeatureTextH2 = styled.h2<{ colorChange?: boolean }>`
  font-size: 3rem;
  font-weight: bold;
  color: ${(props) => props.colorChange && props.theme.colors.whiteHover};
  padding-bottom: ${(props) => props.theme.paddings.featureTextPaddingBottom};
`;
const FeatureTextH3 = styled.h3<{ colorChange?: boolean }>`
  padding-bottom: ${(props) => props.theme.paddings.featureTextPaddingBottom};
  color: ${(props) => props.colorChange && props.theme.colors.pink};
  font-weight: ${(props) => (props.colorChange ? "bold" : "500")};
  font-size: 1.4rem;
`;

export default Main;
