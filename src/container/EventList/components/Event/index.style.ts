import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const EventStyled = styled.form`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 84;
  margin-bottom: 40px;
  transition: box-shadow 0.3s ease;

  @media (hover: hover) {
    &:hover {
      box-shadow: 0 4px 20px rgb(from var(--tg-theme-text-color) r g b / 50%);
    }
  }
`;

export const ButtonStyled = styled(Button)`
  :where(.MuiButton-root) {
    color: var(--tg-theme-button-text-color);
    background-color: #ff5757 !important;
  }
  @media (hover: hover) {
    :where(.MuiButton-root:hover) {
      background-color: #fd8484 !important;
      box-shadow: none !important;
    }
  }
`;
