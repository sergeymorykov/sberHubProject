import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const ButtonStyled = styled(Button)`
  background-color: var(--tg-theme-button-color);
  color: var(--tg-theme-button-text-color);
  margin-bottom: 24px;
  border: 0;
  border-radius: 4px;
  font-size: 0.875rem;
  line-height: 1.75;
  padding: 6px 16px;
  text-transform: uppercase;
`;

export const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: right;
`;
