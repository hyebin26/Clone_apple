import React from "react";
import styled from "styled-components";
import FooterLink from "../FooterLink/footerLink";
import theme from "src/styles/theme";

const FeatureInfo = () => {
  return (
    <FooterInfoSection>
      <div>Copyright @ 2022 Apple Inc. 모든 권리 보유.</div>
      <FeatureInfoLegal />
      <div>대한민국</div>
    </FooterInfoSection>
  );
};

const FeatureInfoLegal = () => {
  return (
    <FeatureInfoLegalWrapper>
      <FeatureInfoLegalList>
        <FooterLink
          to="/"
          color={theme.footerColor.textColor}
          text="개인정보 처리방침"
        />
      </FeatureInfoLegalList>
      <FeatureInfoLegalList>
        <FooterLink
          to="/"
          color={theme.footerColor.textColor}
          text="웹 사이트 이용 약관"
        />
      </FeatureInfoLegalList>
      <FeatureInfoLegalList>
        <FooterLink
          to="/"
          color={theme.footerColor.textColor}
          text="판매 및 환불"
        />
      </FeatureInfoLegalList>
      <FeatureInfoLegalList>
        <FooterLink
          to="/"
          color={theme.footerColor.textColor}
          text="법적 고지"
        />
      </FeatureInfoLegalList>
      <FeatureInfoLegalList last={true}>
        <FooterLink
          to="/"
          color={theme.footerColor.textColor}
          text="사이트 맵"
        />
      </FeatureInfoLegalList>
    </FeatureInfoLegalWrapper>
  );
};

const FeatureInfoLegalWrapper = styled.ul`
  display: flex;
  padding-right: 30px;
`;

const FeatureInfoLegalList = styled.li<{ last?: boolean }>`
  padding: 0 0.5rem;
  border-right: ${(props) =>
    !props.last && "1px solid " + props.theme.footerColor.borderColor};
`;

const FooterInfoSection = styled.section`
  padding: 0.8rem 0;
  display: flex;
  font-size: 0.7rem;
  color: ${(props) => props.theme.footerColor.textColor};
  display: flex;
  justify-content: space-between;
`;

export default FeatureInfo;
