import React from "react";
import styled from "styled-components";
import { colors, sizes } from "../../tokens";

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
  margin-bottom: ${sizes.size2xl};
  margin-top: ${sizes.size2xl};
  opacity: 0.1;
`;

export default Separator;
