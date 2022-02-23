import React from "react";
import styled from "styled-components";
import FooterLink from "../FooterLink/footerLink";
import theme from "../../styles/theme";

type Props = {
  content: string[];
  category: string;
};

type ListProps = {
  text: string;
};

const FooterNav = ({ content, category }: Props) => {
  return (
    <FooterNavWrapper>
      <FooterNavCategory>{category}</FooterNavCategory>
      {content.map((item, idx) => (
        <FooterNavList text={item} key={idx} />
      ))}
    </FooterNavWrapper>
  );
};

const FooterNavList = ({ text }: ListProps) => {
  return (
    <FooterLinkList>
      <FooterLink to="/" text={text} color={theme.footerColor.textColor} />
    </FooterLinkList>
  );
};

const FooterNavCategory = styled.li`
  font-size: 0.7rem;
  padding-top: 0.5rem;
`;
const FooterNavWrapper = styled.ul`
  flex: 0 0 20%;
  letter-spacing: 0.3px;
`;

const FooterLinkList = styled.li`
  padding: 0.1rem 0;
`;

export default FooterNav;
