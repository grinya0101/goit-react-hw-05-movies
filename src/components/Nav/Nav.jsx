import React from 'react';
import { Box } from '../Box';
import { StyledLink, StyledNav } from './Nav.styled';
import items from './NavItems';

export default function Nav() {
  return (
    <Box ml={5}>
      <StyledNav>
        {items.map(({ href, text, end }) => (
          <StyledLink key={text} to={href} end={end}>
            {text}
          </StyledLink>
        ))}
        {/* <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="movies">Movies</StyledLink> */}
      </StyledNav>
    </Box>
  );
}
