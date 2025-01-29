import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const EventStyled = styled.form`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-bottom: 40px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 20px rgb(from var(--tg-theme-text-color) r g b / 50%);
  }
`;
