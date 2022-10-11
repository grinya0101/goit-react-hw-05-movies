import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  color: ${p => p.theme.colors.header.primary};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-decoration: none;

  &.active {
    color: ${p => p.theme.colors.header.active};
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 20px;
`;
