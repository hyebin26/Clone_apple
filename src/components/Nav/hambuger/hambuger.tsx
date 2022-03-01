import React from "react";
import styled, { keyframes } from "styled-components";

// hambuger 버튼을 클릭한 경우 => modal로 만들어 버릴까?

export default function Hambuger() {
  return (
    <HambugerWrapper>
      <HambugerMenu main></HambugerMenu>
      <HambugerMenu sub></HambugerMenu>
    </HambugerWrapper>
  );
}

const HambugerWrapper = styled.div`
  display: flex;
  width: 16px;
  height: 16px;
  span {
    width: 18px;
    position: absolute;
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  }
  &:hover {
    span {
      border-bottom: 1px solid ${({ theme }) => theme.colors.whiteHover};
    }
  }
`;

const HambugerMenu = styled.span<{ sub?: boolean; main?: boolean }>`
  padding-top: ${({ main }) => main && "5px"};
  padding-top: ${({ sub }) => sub && "13px"};
`;

// transform: ${({ sub }) => sub && "rotate(45deg)"};
//   transform: ${({ main }) => main && "rotate(-45deg)"};
