import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  replace?: boolean;
  state?: any;
  to: string;
  text?: string;
  reloadDocument?: boolean;
  size?: string;
  underline?: boolean;
  color?: string;
  padding?: string;
}

export default function LinkText({ text, to, ...props }: LinkProps) {
  return (
    <StyledLink {...props} to={to}>
      {text}
    </StyledLink>
  );
}

const StyledLink = styled(Link)<LinkProps>`
  ${(props) =>
    props.size
      ? `font-size:${props.theme.fontSize[props.size]}`
      : `font-size:1.1rem;`};
  ${({ underline }) => underline && "&:hover{text-decoration:underline}"};
  ${({ color }) => (color ? `color:${color}` : "black")};
  ${({ padding }) => padding && `padding:${padding}`};
`;
