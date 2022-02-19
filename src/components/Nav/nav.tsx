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

const Nav = () => {
  return (
    <NavContainer>
      <NavListWrapper>
        {navContents.map((navContent) => (
          <NavLink navContent={navContent} key={navContent.id} />
        ))}
      </NavListWrapper>
    </NavContainer>
  );
};

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
  height: 2.6rem;
  background: #333333;
  top: 0;
  position: sticky;
`;

const NavIcons = styled.img`
  width: 15px;
  height: 15px;
  filter: invert(86%) sepia(0%) saturate(823%) hue-rotate(146deg)
    brightness(95%) contrast(91%);
  transition: 0.3s filter;
  &:hover {
    filter: invert(90%) sepia(0%) saturate(46%) hue-rotate(306deg)
      brightness(107%) contrast(94%);
  }
`;

const NavListWrapper = styled.ul`
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const NavList = styled.li`
  font-size: 0.7rem;
  a {
    transition: 0.3s color;
    color: #cacaca;
    &: hover {
      color: #f5f5f7;
    }
  }
`;

export default Nav;
