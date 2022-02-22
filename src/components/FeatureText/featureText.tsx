import React from "react";
import styled from "styled-components";

type Props = {
  padding: string;
  children: React.ReactNode;
};

const FeatureText = ({ padding, children }: Props) => {
  return <FeatureTextWrapper padding={padding}>{children}</FeatureTextWrapper>;
};

// margin값만 변경하고
const FeatureTextWrapper = styled.div<{ padding: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${(props) => props.padding};
  position: relative;
  z-index: 998;
`;

export default FeatureText;
