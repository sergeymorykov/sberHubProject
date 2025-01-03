import React from 'react';
import { DateEventProps } from './types';
import { DateEventTextStyled, DateEventStyled } from './index.style';

const DateEvent = ({ date }: DateEventProps): React.ReactElement => {
  return (
    <>
      <DateEventTextStyled>Дата события:</DateEventTextStyled>
      <DateEventStyled>{new Date(date).toLocaleString()}</DateEventStyled>
    </>
  );
};

export default DateEvent;
