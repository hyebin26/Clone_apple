import React from "react";
import styled from "styled-components";

type Props = {
  margin: string;
  children: React.ReactNode;
  main?: boolean;
};

const FeatureText = ({ margin, children }: Props) => {
  return <FeatureTextWrapper>{children}</FeatureTextWrapper>;
};

// margin값만 변경하고
const FeatureTextWrapper = styled.div``;

export default FeatureText;
