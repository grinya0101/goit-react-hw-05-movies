import React from 'react';
import { Link } from 'react-router-dom';
import { StyledContainer, StyledMessage } from './NotFoundPage.styled';

export default function NotFoundPage() {
  return (
    <StyledContainer>
      <StyledMessage>Page not found :(</StyledMessage>
      <Link to="/"> To main page</Link>
    </StyledContainer>
  );
}
