import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "@icons/logo.svg";
import search from "@icons/search.svg";
import bag from "@icons/bag.svg";

type NavContentType = {
  content?: string;
  id: number;
  to?: string;
  image?: string;
};

const navContents: NavContentType[] = [
  { id: 0, content: "logo", image: logo, to: "/" },
  { id: 1, content: "스토어", to: "/" },
  { id: 2, content: "Mac", to: "/" },
  { id: 3, content: "iPad", to: "/" },
  { id: 4, content: "iPhone", to: "/" },
  { id: 5, content: "Watch", to: "/" },
  { id: 6, content: "AirPods", to: "/" },
  { id: 7, content: "TV 및 홈", to: "/" },
  { id: 8, content: "Apple 독점 제공", to: "/" },
  { id: 9, content: "액세서리", to: "/" },
  { id: 10, content: "고객지원", to: "/" },
  { id: 11, content: "검색", image: search, to: "/" },
  { id: 12, content: "장바구니", image: bag, to: "/" },
];

export default function Nav() {
  return (
    <NavContainer>
      <NavListWrapper>
        {navContents.map((navContent) => (
          <NavLink navContent={navContent} key={navContent.id} />
        ))}
      </NavListWrapper>
    </NavContainer>
  );
}

function NavLink({ navContent }: { navContent: NavContentType }) {
  return (
    <NavList>
      <Link to="/">
        {navContent.image ? (
          <NavIcons src={navContent.image} alt={navContent.content} />
        ) : (
          navContent.content
        )}
      </Link>
    </NavList>
  );
}

const NavContainer = styled.nav`
  height: ${(props) => props.theme.containerSize.navHeight};
  background: ${(props) => props.theme.colors.darkGrey};
  top: 0;
  position: sticky;
  z-index: 999;
`;

const NavIcons = styled.img`
  width: 15px;
  height: 15px;
  filter: ${(props) => props.theme.colors.whiteImage};
  transition: 0.3s filter;
  &:hover {
    filter: ${(props) => props.theme.colors.whiteImageHover};
  }
`;

const NavListWrapper = styled.ul`
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: ${(props) => props.theme.containerSize.navWidthLarge};
  margin: 0 auto;
`;

const NavList = styled.li`
  font-size: ${(props) => props.theme.fontSize.small};
  a {
    transition: 0.3s color;
    color: ${(props) => props.theme.colors.white};
    &: hover {
      color: ${(props) => props.theme.colors.whiteHover};
    }
  }
`;
