import React from "react";
import styled from "styled-components";
import LinkText from "../LinkText/linkText";
import theme from "src/styles/theme";

export default function FooterInfo() {
  return (
    <FooterInfoSection>
      <div>Copyright @ 2022 Apple Inc. 모든 권리 보유.</div>
      <FeatureInfoLegal />
      <div>대한민국</div>
    </FooterInfoSection>
  );
}

const FeatureInfoLegal = () => {
  return (
    <FeatureInfoLegalWrapper>
      <FeatureInfoLegalList>
        <LinkText
          to="/"
          color={theme.footerColor.textColor}
          text="개인정보 처리방침"
          size="xsmall"
        />
      </FeatureInfoLegalList>
      <FeatureInfoLegalList>
        <LinkText
          to="/"
          color={theme.footerColor.textColor}
          text="웹 사이트 이용 약관"
          size="xsmall"
        />
      </FeatureInfoLegalList>
      <FeatureInfoLegalList>
        <LinkText
          to="/"
          color={theme.footerColor.textColor}
          text="판매 및 환불"
          size="xsmall"
        />
      </FeatureInfoLegalList>
      <FeatureInfoLegalList>
        <LinkText
          to="/"
          color={theme.footerColor.textColor}
          text="법적 고지"
          size="xsmall"
        />
      </FeatureInfoLegalList>
      <FeatureInfoLegalList last={true}>
        <LinkText
          to="/"
          color={theme.footerColor.textColor}
          text="사이트 맵"
          size="xsmall"
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
