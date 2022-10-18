import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Box } from 'components/Box';

export const StyledButtom = styled.button`
  margin-top: ${p => p.theme.space[4]}px;
  margin-left: ${p => p.theme.space[4]}px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const SyledLink = styled(Link)`
  color: ${p => p.theme.colors.black};

  &:hover {
    color: ${p => p.theme.colors.red};
  }
`;

export const StyledContainer = styled(Box)`
  display: flex;
  padding: ${p => p.theme.space[4]}px;
  border-bottom: 1px solid black;
`;

export const StyledTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
