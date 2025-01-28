import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import { darken } from '@mui/system';

export const ButtonStyled = styled(Button)`
  width: 64px;
  height: 64px;
  background-color: #f06960;
  padding: 0;
  @media (hover: hover) {
    & :hover {
      width: 64px;
      height: 64px;
      background-color: ${darken('#f06960', 0.2)};
      padding: 0;
      border-radius: 4px;
    }
  }
`;
