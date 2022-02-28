import React from "react";
import styled from "styled-components";
import theme from "src/styles/theme";
import logo from "@icons/logo.svg";
import mainImage from "@images/main";
import Feature from "src/components/Feature/feature";
import FeatureImage from "../Feature/FeatureImage/featureImage";
import FeatureText from "../Feature/FeatureText/featureText";

const FeatureMain = () => {
  return (
    <FeatureMainContainer>
      <Feature height={theme.imageHeights.mainLarge}>
        <FeatureText padding="300px" greeting />
        <FeatureImage image={mainImage.mainFirst.large} />
      </Feature>
      <Feature height={theme.imageHeights.middleLarge}>
        <FeatureText padding="70px">
          <StyledTextH2>iPhone 13 Pro</StyledTextH2>
          <StyledTextH3>이게 바로 프로</StyledTextH3>
        </FeatureText>
        <FeatureImage image={mainImage.mainSecond.large} />
      </Feature>
      <Feature height={theme.imageHeights.middleLarge}>
        <FeatureText padding="70px">
          <StyledTextH2 colorChange={true}>iPhone 13</StyledTextH2>
          <StyledTextH3 colorChange={true}>
            일상을 위한 비상한 능력
          </StyledTextH3>
        </FeatureText>
        <FeatureImage image={mainImage.mainThird.large} />
      </Feature>
      <StyledFeatureSubContainer>
        <Feature height={theme.imageHeights.subLarge} quarter>
          <FeatureText padding="40px">
            <StyledTextNew>New</StyledTextNew>
            <StyledTextWatch>
              <img src={logo} alt="logo" />
              WATCH
            </StyledTextWatch>
            <StyledTextSeries>SERIES7</StyledTextSeries>
            <StyledTextH5>이제껏 가장 큰 디스플레이 탑재</StyledTextH5>
          </FeatureText>
          <FeatureImage image={mainImage.mainFourth.large} />
        </Feature>
        <Feature height={theme.imageHeights.subLarge} quarter>
          <FeatureText padding="55px">
            <StyledTextH4>MacBook Pro</StyledTextH4>
            <StyledTextH5>프로다운 막강한 파워</StyledTextH5>
          </FeatureText>
          <FeatureImage image={mainImage.mainFifth.large} />
        </Feature>
        <Feature height={theme.imageHeights.subLarge} quarter>
          <FeatureText padding="55px">
            <StyledTextH4White>더 나은 미래를 향해</StyledTextH4White>
            <StyledTextH5White>
              아프로퓨처리즘에서 영감을 받아 새롭게 선보이는 Black Unity 밴드와
              여기에 어울리는 시계 페이스
            </StyledTextH5White>
          </FeatureText>
          <FeatureImage image={mainImage.mainSixth.large} />
        </Feature>
        <Feature height={theme.imageHeights.subLarge} quarter>
          <FeatureText padding="420px">
            <StyledTextH4>AirPods</StyledTextH4>
            <StyledTextH5>공간 음향과 함께, 완전히 새롭게</StyledTextH5>
          </FeatureText>
          <FeatureImage image={mainImage.mainSeventh.large} />
        </Feature>
        <Feature height={theme.imageHeights.subLarge} quarter>
          <FeatureText padding="40px">
            <StyledTextH4>대학 생활용 MAC 또는</StyledTextH4>
            <StyledTextH4>iPad 구입하고 AirPods까지 함께.</StyledTextH4>
          </FeatureText>
          <FeatureImage image={mainImage.mainEighth.large} />
        </Feature>
        <Feature height={theme.imageHeights.subLarge} quarter>
          <FeatureText padding="400px">
            <StyledFeatureTextLogoWhite>
              <img src={logo} alt="logo" />
              tv+
            </StyledFeatureTextLogoWhite>
            <StyledTextH5White>
              Apple 기기를 구입하면 Apple TV+가 3개월 무료
            </StyledTextH5White>
          </FeatureText>
          <FeatureImage image={mainImage.mainNineth.large} />
        </Feature>
      </StyledFeatureSubContainer>
    </FeatureMainContainer>
  );
};

const StyledTextH4 = styled.h4`
  font-size: 2rem;
  font-weight: bold;
`;

const StyledTextH5 = styled.h5`
  padding-top: 1rem;
  font-size: 1rem;
  font-weight: 600;
`;

const StyledTextWatch = styled.h4`
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

const FeatureMainContainer = styled.main``;

const StyledTextSeries = styled.span`
  font-size: 0.8rem;
  color: #ea0000;
  font-weight: bold;
  letter-spacing: 2px;
`;

const StyledTextH4White = styled(StyledTextH4)`
  color: ${(props) => props.theme.colors.linkWhite};
  font-size: 2rem;
`;

const StyledTextNew = styled.span`
  color: ${(props) => props.theme.colors.orange};
  font-size: 0.8rem;
`;

const StyledTextH5White = styled(StyledTextH5)`
  color: ${(props) => props.theme.colors.linkWhite};
  font-size: 1.2rem;
`;

const StyledFeatureTextLogoWhite = styled(StyledTextWatch)`
  color: ${(props) => props.theme.colors.linkWhite};
  img {
    filter: ${(props) => props.theme.colors.whiteImageHover};
  }
`;

const StyledFeatureSubContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const StyledTextH2 = styled.h2<{ colorChange?: boolean }>`
  font-size: 3rem;
  font-weight: bold;
  color: ${(props) => props.colorChange && props.theme.colors.whiteHover};
  padding-bottom: ${(props) => props.theme.paddings.featureTextPaddingBottom};
`;
const StyledTextH3 = styled.h3<{ colorChange?: boolean }>`
  padding-bottom: ${(props) => props.theme.paddings.featureTextPaddingBottom};
  color: ${(props) => props.colorChange && props.theme.colors.pink};
  font-weight: ${(props) => (props.colorChange ? "bold" : "500")};
  font-size: 1.4rem;
`;

export default FeatureMain;
