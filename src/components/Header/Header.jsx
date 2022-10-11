import React from 'react';
import { StyledHeader } from './Header.styled';
import Nav from 'components/Nav/Nav';

export default function Header() {
  return (
    <StyledHeader>
      <Nav />
    </StyledHeader>
  );
}
