import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import { darken } from '@mui/system';

export const ButtonStyled = styled(Button)`
  width: 64px;
  height: 64px;
  background-color: #69f564;
  padding: 0;
  & :hover {
    width: 64px;
    height: 64px;
    background-color: ${darken('#69f564', 0.2)};
    padding: 0;
    border-radius: 4px;
  }
`;
