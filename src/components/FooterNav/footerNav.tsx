import React from "react";
import styled from "styled-components";
import FooterLink from "../FooterLink/footerLink";
import theme from "../../styles/theme";
import footerNavContent from "./footerNavContent";

type ListProps = {
  text: string;
};

type ListWrapperProps = {
  content: string[];
  category: string;
};

const FooterNav = () => {
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
        <FooterLink
          text="Apple Store를 방문"
          color={theme.footerColor.blueLinkColor}
          to="/"
        />
        하거나 ,
        <FooterLink
          text="리셀러"
          color={theme.footerColor.blueLinkColor}
          to="/"
        />
        를 찾아보거나, 000-000-0000번으로 전화하세요.
      </FooterNavSupport>
    </FooterNavContainer>
  );
};

const FooterNavListWrapper = ({ content, category }: ListWrapperProps) => {
  return (
    <FooterNavListUl>
      <FooterNavCategory>{category}</FooterNavCategory>
      {content.map((item, idx) => (
        <FooterNavList text={item} key={idx} />
      ))}
    </FooterNavListUl>
  );
};

const FooterNavList = ({ text }: ListProps) => {
  return (
    <FooterLinkList>
      <FooterLink to="/" text={text} color={theme.footerColor.textColor} />
    </FooterLinkList>
  );
};

const FooterNavContainer = styled.section`
  display: flex;
  position: relative;
  border-top: 1px solid ${(props) => props.theme.footerColor.borderColor};
  border-bottom: 1px solid ${(props) => props.theme.footerColor.borderColor};
  padding-top: 1rem;
  padding-bottom: 3rem;
`;

const FooterNavListUl = styled.ul`
  flex: 0 0 20%;
  letter-spacing: 0.3px;
`;

const FooterNavCategory = styled.li`
  font-size: 0.6rem;
  padding-top: 0.5rem;
`;

const FooterNavSupport = styled.p`
  position: absolute;
  bottom: 7px;
  font-size: 0.6rem;
  color: ${(props) => props.theme.footerColor.textColor};
`;

const FooterLinkList = styled.li`
  padding: 0.1rem 0;
`;

const FooterNavWrapper = styled.div`
  flex: 0 0 20%;
`;

export default FooterNav;
