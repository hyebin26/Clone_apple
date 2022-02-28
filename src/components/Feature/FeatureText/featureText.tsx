import React from "react";
import theme from "src/styles/theme";
import styled from "styled-components";
import LinkText from "../../LinkText/linkText";

type TextProps = {
  children?: React.ReactNode;
  padding: string;
  quarter?: boolean;
  greeting?: boolean;
};

export default function FeatureText({
  children,
  padding,
  quarter,
  greeting,
}: TextProps) {
  return (
    <FeatureTextContainer padding={padding}>
      {children}
      <FeatureLinkWrapper>
        <LinkText
          text={greeting ? "영화 보기 >" : "더 알아보기 >"}
          to="/"
          size={greeting ? "xlarge" : quarter ? "middle" : "large"}
          color={greeting ? theme.colors.linkWhite : theme.colors.blue}
          padding="0 1rem 0 0"
          underline
        />
        <LinkText
          text={greeting ? "메이킹 필름 보기 >" : "구입하기 >"}
          to="/"
          size={greeting ? "xlarge" : quarter ? "middle" : "large"}
          color={greeting ? theme.colors.linkWhite : theme.colors.blue}
          padding="0 2rem 0 0"
          underline
        />
      </FeatureLinkWrapper>
    </FeatureTextContainer>
  );
}

const FeatureTextContainer = styled.div<{ padding: string }>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.theme.containerSize.featureTextLarge};
  z-index: 998;
  margin: 0 auto;
  align-items: center;
  padding-top: ${(props) => props.padding};
  position: relative;
  z-index: 998;
`;

const FeatureLinkWrapper = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: around-item;
`;
