import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ShopOnline = () => {
  return (
    <ShopOnlineContainer>
      <ShopOnlineWrapper>
        <Link to="/">온라인으로 쇼핑</Link>하고 무료 배송, 스페셜 리스트 지원
        등의 혜택을 받으세요.
      </ShopOnlineWrapper>
    </ShopOnlineContainer>
  );
};

const ShopOnlineContainer = styled.section`
  background: #f5f5f7;
  padding: 0.9rem 0;
`;

const ShopOnlineWrapper = styled.div`
  text-align: center;
  font-size: 0.8rem;
  font-weight: 600;
  a {
    color: #4f94da;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default ShopOnline;
