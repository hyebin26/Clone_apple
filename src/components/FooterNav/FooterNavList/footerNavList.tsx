import React from "react";
import styled from "styled-components";
import LinkText from "../../LinkText/linkText";
import theme from "../../../styles/theme";

type ListProps = {
  text: string;
};

export default function FooterNavList({ text }: ListProps) {
  return (
    <FooterLinkList>
      <LinkText
        to="/"
        text={text}
        color={theme.footerColor.textColor}
        size="xsmall"
      />
    </FooterLinkList>
  );
}

const FooterLinkList = styled.li`
  padding: 0.1rem 0;
`;
