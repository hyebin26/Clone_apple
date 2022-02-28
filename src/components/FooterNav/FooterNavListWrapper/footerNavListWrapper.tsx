import React from "react";
import styled from "styled-components";
import FooterNavList from "../FooterNavList/footerNavList";

type ListWrapperProps = {
  content: string[];
  category: string;
};

export default function FooterNavListWrapper({
  content,
  category,
}: ListWrapperProps) {
  return (
    <FooterNavListUl>
      <FooterNavCategory>{category}</FooterNavCategory>
      {content.map((item, idx) => (
        <FooterNavList text={item} key={idx} />
      ))}
    </FooterNavListUl>
  );
}

const FooterNavListUl = styled.ul`
  flex: 0 0 20%;
  letter-spacing: 0.3px;
`;

const FooterNavCategory = styled.li`
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  padding-top: 0.5rem;
`;
