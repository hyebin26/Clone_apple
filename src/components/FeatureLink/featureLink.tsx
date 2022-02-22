import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  text: string;
  to: string;
};

const FeatureLink = ({ text, to }: Props) => {
  return <StyledLink to={to}>{text}</StyledLink>;
};

const StyledLink = styled(Link)<{ to: string }>`
  color: ${(props) =>
    props.to === "/" ? props.theme.colors.linkWhite : props.theme.colors.blue};
  font-size: ${(props) => (props.to === "/" ? "1.3rem" : "1.1rem")};
  font-weight: 600;
  padding: 0 2rem;
  &:hover {
    text-decoration: underline;
  }
`;

export default FeatureLink;
