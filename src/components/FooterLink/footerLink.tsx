import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  text: string;
  to: string;
  color: string;
};
const FooterLink = ({ text, to, color }: Props) => {
  return (
    <FLink to={to} color={color}>
      {text}
    </FLink>
  );
};

const FLink = styled(Link)`
  color: ${(props) => props.color};
  font-size: 0.6rem;
  &:hover {
    text-decoration: underline;
  }
`;

export default FooterLink;
