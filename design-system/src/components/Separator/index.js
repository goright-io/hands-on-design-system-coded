import React from "react";
import styled from "styled-components";
import { colors, spacing } from "../../tokens";

/* Separator
 *
 * A line to separate content
 */
const Separator = (props) => {
  return <StyledSeparator {...props} />;
};

export const StyledSeparator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.onBackground500};
  margin-bottom: ${spacing.spacing2xlBottom};
  margin-top: ${spacing.spacing2xlBottom};
  opacity: 0.1;
`;

export default Separator;
