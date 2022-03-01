import React, { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NAVCONTENTS, MEDIAQUERYCONTENTS } from "./content";
import theme from "src/styles/theme";
import Hambuger from "./hambuger/hambuger";
import HambugerNavList from "./hanbugerNavList/hambugerNavList";

type NavListProps = {
  navContent: {
    content: string | ReactElement;
    id: number;
    to: string;
    image?: string;
  };
  onClickHambuger?: () => void;
};

const matchesMediaQuery = () => {
  const matchQuery = window.matchMedia(
    `screen and (max-width:${theme.devices.hambuger})`
  );
  return matchQuery;
};

export default function Nav() {
  const [mediaQuery, setMediaQuery] = useState(matchesMediaQuery().matches);
  const [isShowedHambuger, setIsShowedHambuger] = useState(false);
  const onClickHambuger = () => {
    setIsShowedHambuger(!isShowedHambuger);
  };

  useEffect(() => {
    const mql = matchesMediaQuery();
    mql.addEventListener("change", (e) => {
      setMediaQuery(e.matches);
    });
  }, []);
  return (
    <NavContainer isShowedHambuger={isShowedHambuger}>
      <NavListWrapper>
        {!mediaQuery &&
          NAVCONTENTS.map((navContent) => (
            <NavList navContent={navContent} key={navContent.id} />
          ))}
        {mediaQuery &&
          MEDIAQUERYCONTENTS.map((navContent) => (
            <NavList
              navContent={navContent}
              key={navContent.id}
              onClickHambuger={onClickHambuger}
            />
          ))}
      </NavListWrapper>
      {<HambugerNavList isShowedHambuger={isShowedHambuger} />}
    </NavContainer>
  );
}

function NavList({ navContent, onClickHambuger }: NavListProps) {
  const clickHambuger = () => {
    onClickHambuger && onClickHambuger();
  };
  return (
    <StyledNavList>
      <Link to="/" onClick={clickHambuger}>
        {navContent.image ? (
          <NavIcons src={navContent.image} />
        ) : (
          navContent.content
        )}
      </Link>
    </StyledNavList>
  );
}

const NavContainer = styled.nav<{ isShowedHambuger: boolean }>`
  height: ${(props) => props.theme.containerSize.navHeight};
  transition: 0.6s background ease-in-out;
  background: ${(props) =>
    props.isShowedHambuger
      ? props.theme.colors.black
      : props.theme.colors.darkGrey};
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
  @media only screen and (max-width: ${({ theme }) => theme.devices.hambuger}) {
    width: 18px;
    height: 18px;
  }
`;

const NavListWrapper = styled.ul`
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: ${(props) => props.theme.containerSize.navWidthLarge};
  margin: 0 auto;
  @media only screen and (max-width: ${({ theme }) => theme.devices.hambuger}) {
    width: 100%;
    justify-content: space-between;
    padding: 0 1.5rem;
  }
`;

const StyledNavList = styled.li`
  font-size: ${(props) => props.theme.fontSize.small};
  a {
    transition: 0.3s color;
    color: ${(props) => props.theme.colors.white};
    &: hover {
      color: ${(props) => props.theme.colors.whiteHover};
    }
  }
`;
