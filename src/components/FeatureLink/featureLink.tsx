import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  text: string;
  to: string;
  quarter?: string;
  greeting?: string;
};

type LinkProps = {
  to: string;
  quarter?: string;
  greeting?: string;
};

const FeatureLink = ({ text, to, quarter, greeting }: Props) => {
  return (
    <StyledLink to={to} quarter={quarter} greeting={greeting}>
      {text}
    </StyledLink>
  );
};

const StyledLink = styled(Link)<LinkProps>`
  font-size: 1.1 rem;
  font-size: ${(props) => props.quarter && "0.9rem;"};
  font-size: ${(props) => props.greeting && "1.3rem;"};
  color: ${(props) =>
    props.greeting ? props.theme.colors.linkWhite : props.theme.colors.blue};
  font-weight: 600;
  padding: 0 2rem;
  &:hover {
    text-decoration: underline;
  }
`;

export default FeatureLink;
