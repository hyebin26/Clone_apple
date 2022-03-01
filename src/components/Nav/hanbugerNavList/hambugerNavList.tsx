import React from "react";
import styled from "styled-components";
import search from "@icons/search.svg";
import { keyframes } from "styled-components";
import { HAMBUGERCONTENT } from "../content";
import { Link } from "react-router-dom";
import { template } from "@babel/core";

type Props = {
  isShowedHambuger: boolean;
};

export default function HambugerNavList({ isShowedHambuger }: Props) {
  return (
    <StyledHambugerListContainer isShowedHambuger={isShowedHambuger}>
      <HambugerInput />
      <StyledHambugerUl>
        {HAMBUGERCONTENT.map((item) => (
          <HambugerList
            key={item.id}
            text={item.content}
            lastIndex={item.id === HAMBUGERCONTENT.length - 1 ? true : false}
          />
        ))}
      </StyledHambugerUl>
    </StyledHambugerListContainer>
  );
}

const HambugerList = ({
  text,
  lastIndex,
}: {
  text: string;
  lastIndex?: boolean;
}) => {
  return (
    <StyledListWrapper lastIndex={lastIndex}>
      <StyledLink to="/">{text}</StyledLink>
    </StyledListWrapper>
  );
};

const HambugerInput = () => {
  return (
    <StyledSearchContainer>
      <StyledSearchWrapper>
        <StyledSearchImageWrapper>
          <StyledSearchImage src={search}></StyledSearchImage>
        </StyledSearchImageWrapper>
        <StyledHambugerInputWrapper>
          <StyledInput type="text" placeholder="apple.com 검색" />
        </StyledHambugerInputWrapper>
      </StyledSearchWrapper>
    </StyledSearchContainer>
  );
};

const StyledSearchWrapper = styled.div`
  width: ${({ theme }) => theme.containerSize.containerMiddle};
  margin: 0 auto;
  display: flex;
`;

const StyledHambugerInputWrapper = styled.div`
  width: 100%;
`;

const StyledSearchImageWrapper = styled.div`
  background: ${({ theme }) => theme.colors.lightBlack};
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  border-radius: 5px 0 0 5px;
`;

const StyledHambugerUl = styled.ul`
  width: ${({ theme }) => theme.containerSize.containerMiddle};
  padding-top: 1.3rem;
  margin: 0 auto;
  transition: 0.4s;
`;

const StyledInput = styled.input`
  padding: 0.6em 0.4rem;
  border-radius: 0 5px 5px 0;
  background: ${({ theme }) => theme.colors.lightBlack};
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.1rem;
  width: 100%;
`;

const StyledListWrapper = styled.li<{ lastIndex?: boolean }>`
  padding: 0.8rem 0;
  ${(props) =>
    !props.lastIndex && `border-bottom:1px solid ${props.theme.colors.white}`}
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  transition: 0.3s color;
  &:hover {
    color: ${({ theme }) => theme.colors.whiteHover};
  }
`;

const StyledHambugerListContainer = styled.div<{ isShowedHambuger: boolean }>`
  width: 100%;
  position: absolute;
  background: black;
  overflow: hidden;
  height: ${({ isShowedHambuger }) => (isShowedHambuger ? "100vh" : "0")};
  transition: 0.5s height ease-in-out;
`;

const StyledSearchImage = styled.img`
  width: 20px;
  height: 20px;
  filter: ${({ theme }) => theme.colors.darkGreyImage};
`;
const StyledSearchContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  padding: 2rem 0;
`;
