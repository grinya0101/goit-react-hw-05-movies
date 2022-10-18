import React from 'react';
import { Box } from '../Box';
import { useState } from 'react';
import { StyledButton, StylesInput, StyledForm } from './SearchForm.styled';

export default function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');

  const onChangeValue = e => {
    const { value } = e.target;
    // console.log(e.target.value);
    setQuery(value);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    if (query === '') {
      alert('Пустой запрос!');
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <Box p={4}>
      <StyledForm onSubmit={onSubmitForm}>
        <StylesInput
          onChange={onChangeValue}
          type="text"
          name="query"
          value={query}
          placeholder="Search movie..."
        />
        <StyledButton type="submit">Search</StyledButton>
      </StyledForm>
    </Box>
  );
}
