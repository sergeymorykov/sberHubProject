import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

export const EventDateTextStyled = styled(Typography)`
  color: var(--tg-theme-hint-color);
  font-size: 0.875rem;
  font-weight: bold;
  display: inline-block;
  float: left;
`;

export const EventDateStyled = styled(Typography)`
  color: var(--tg-theme-hint-color);
  font-size: 0.875rem;
  display: inline-block;
  float: right;
`;

export const EventDateBoxStyled = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;
