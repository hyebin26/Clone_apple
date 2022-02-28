import React from "react";
import styled from "styled-components";
import FooterNav from "../FooterNav/footerNav";
import FooterInfo from "../FooterInfo/footerInfo";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterPromotionSection>
          <FooterText>
            * 프로모션 혜택은 2022년 1월 6일부터 3월 7일까지 Apple Store
            매장이나 Apple 교육 할인 스토어에서, 또는 080-330-8877에 전화를 걸어
            적용 대상 Apple 제품 구입 시 이용 가능. 프로모션에 대한 전체 이용
            약관 적용.
          </FooterText>
          <FooterText>
            1. Apple TV+는 무료 체험 기간 종료 후 월 6,500원에 이용 가능. 해지는
            무료 체험 기간 중에도 가능. 하나의 멤버십으로 가족 공유를 통해 공유
            가능. 무료 체험 혜택은 2021년 11월 4일부터 대상 기기 활성화 이후
            3개월 안에 신청 가능. 멤버십은 매월 자동 갱신되며, 해지 시 종료.
            제한 사항 및 기타 약관 적용.
          </FooterText>
        </FooterPromotionSection>
        <FooterNav />
        <FooterInfo />
      </FooterWrapper>
    </FooterContainer>
  );
}

const FooterWrapper = styled.div`
  width: ${(props) => props.theme.containerSize.footerWrapperLarge};
  margin: 0 auto;
`;

const FooterText = styled.p`
  color: ${(props) => props.theme.footerColor.textColor};
  font-size: 0.7rem;
  padding-bottom: 0.8rem;
`;

const FooterContainer = styled.footer`
  background: ${(props) => props.theme.footerColor.background};
  padding: 1.5rem 0.8rem;
  font-weight: 600;
`;
const FooterPromotionSection = styled.section`
  padding-bottom: 0.5rem;
`;
