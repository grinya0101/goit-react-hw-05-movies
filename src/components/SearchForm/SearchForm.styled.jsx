import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: ${p => p.theme.space[2]}px;
  background: linear-gradient(45deg, rgb(240, 244, 243), rgb(160, 167, 167));
  border: 1px solid #b6b3b3;
  border-radius: ${p => p.theme.radii.sm};
  font-size: ${p => p.theme.fontSizes.s};
  cursor: pointer;
  box-shadow: none;
  transform: box-shadow 300ms ease-in;

  &:hover {
    box-shadow: 0px 2px 3px #000000;
  }
`;

export const StylesInput = styled.input`
  background-color: #ffffff;
  border: ${p => p.theme.borders.none};
  outline: ${p => p.theme.borders.none};
  font-size: ${p => p.theme.fontSizes.s};
`;

export const StyledForm = styled.form`
  display: inline-block;
  padding: ${p => p.theme.space[2]}px;
  border: 1px solid #b6b3b3;
  border-radius: ${p => p.theme.radii.sm};
`;
