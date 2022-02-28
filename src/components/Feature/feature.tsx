import React from "react";
import styled from "styled-components";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  height: string;
  children?: React.ReactNode;
  quarter?: boolean;
}

export default function Feature({ height, children, ...props }: Props) {
  return (
    <FeatureContainer height={height} {...props}>
      {children}
    </FeatureContainer>
  );
}

const FeatureContainer = styled.section<Props>`
  position: relative;
  width: 100%;
  margin-bottom: 0.8rem;
  height: ${(props) => props.height};
  flex: ${(props) => props.quarter && "0 0 49%"};
`;
