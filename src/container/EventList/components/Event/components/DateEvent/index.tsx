import React from 'react';
import { DateEventProps } from './types';
import { DateEventBoxStyled, DateEventTextStyled, DateEventStyled } from './index.style';

const DateEvent = ({ date }: DateEventProps): React.ReactElement => {
  return (
    <DateEventBoxStyled>
      <DateEventTextStyled>Дата события:</DateEventTextStyled>
      <DateEventStyled>{new Date(date).toLocaleString()}</DateEventStyled>
    </DateEventBoxStyled>
  );
};

export default DateEvent;
