import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import LinkText from "../LinkText/linkText";
import footerNavContent from "./footerNavContent";
import FooterNavListWrapper from "./FooterNavListWrapper/footerNavListWrapper";

export default function FooterNav() {
  return (
    <FooterNavContainer>
      <FooterNavWrapper>
        <FooterNavListWrapper
          content={footerNavContent.contentFirst}
          category="쇼핑 및 알아보기"
        />
      </FooterNavWrapper>
      <FooterNavWrapper>
        <FooterNavListWrapper
          content={footerNavContent.contentSecond}
          category="서비스"
        />
        <FooterNavListWrapper
          content={footerNavContent.contentThirdth}
          category="계정"
        />
      </FooterNavWrapper>
      <FooterNavWrapper>
        <FooterNavListWrapper
          content={footerNavContent.contentFourth}
          category="Apple Store"
        />
      </FooterNavWrapper>
      <FooterNavWrapper>
        <FooterNavListWrapper
          content={footerNavContent.contentFifth}
          category="비즈니스"
        />
        <FooterNavListWrapper
          content={footerNavContent.contentSixth}
          category="교육"
        />
      </FooterNavWrapper>
      <FooterNavWrapper>
        <FooterNavListWrapper
          content={footerNavContent.contentSeventh}
          category="Apple의 가치관"
        />
        <FooterNavListWrapper
          content={footerNavContent.contentEighth}
          category="Apple 정보"
        />
      </FooterNavWrapper>
      <FooterNavSupport>
        다양한 쇼핑 방법:{" "}
        <LinkText
          text="Apple Store를 방문"
          color={theme.footerColor.blueLinkColor}
          to="/"
          size="xsmall"
        />
        하거나 ,
        <LinkText
          text="리셀러"
          color={theme.footerColor.blueLinkColor}
          to="/"
          size="xsmall"
        />
        를 찾아보거나, 000-000-0000번으로 전화하세요.
      </FooterNavSupport>
    </FooterNavContainer>
  );
}

const FooterNavContainer = styled.section`
  display: flex;
  position: relative;
  border-top: 1px solid ${(props) => props.theme.footerColor.borderColor};
  border-bottom: 1px solid ${(props) => props.theme.footerColor.borderColor};
  padding-top: 1rem;
  padding-bottom: 3rem;
`;

const FooterNavSupport = styled.p`
  position: absolute;
  bottom: 7px;
  font-size: 0.6rem;
  color: ${(props) => props.theme.footerColor.textColor};
`;

const FooterNavWrapper = styled.div`
  flex: 0 0 20%;
`;
