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

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[5]}px;
`;

export const StyledItem = styled.li`
  text-align: center;
  list-style: none;
  border: 1px solid #b6b4b4;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 3px 5px black;
`;
