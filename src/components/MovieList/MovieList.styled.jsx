import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  font-size: ${p => p.theme.fontSizes.s};
  text-decoration: none;
  color: ${p => p.theme.colors.black};

  &:hover {
    color: red;
  }
`;

export const StyledTitle = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.preBold};
  color: ${p => p.theme.colors.red};
`;
