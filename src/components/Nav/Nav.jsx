import React from 'react';
import { Box } from '../Box';
import { StyledLink, StyledNav } from './Nav.styled';

export default function Nav() {
  return (
    <Box ml={5}>
      <StyledNav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="movie">Movie</StyledLink>
      </StyledNav>
    </Box>
  );
}
