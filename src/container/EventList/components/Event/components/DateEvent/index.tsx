import React from 'react';
import { DateEventProps } from './types';
import { DateEventConteinerStyled, DateEventTextStyled, DateEventStyled } from './index.style';

const DateEvent = ({ date }: DateEventProps): React.ReactElement => {
  return (
    <DateEventConteinerStyled>
      <DateEventTextStyled>Дата события:</DateEventTextStyled>
      <DateEventStyled>{new Date(date).toLocaleString()}</DateEventStyled>
    </DateEventConteinerStyled>
  );
};

export default DateEvent;
