import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin-top: ${p => p.theme.space[6]}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledMessage = styled.p`
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.red};
`;
