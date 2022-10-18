import styled from 'styled-components';

export const StyledContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${p => p.theme.space[4]}px;
  gap: ${p => p.theme.space[4]}px;
`;

export const StyledList = styled.li`
  list-style: none;
`;
