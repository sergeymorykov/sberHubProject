import React from 'react';
import { EventDateProps } from './types';
import { EventDateBoxStyled, EventDateTextStyled, EventDateStyled } from './index.style';

const EventDate = ({ date }: EventDateProps): React.ReactElement => {
  return (
    <EventDateBoxStyled>
      <EventDateTextStyled>Дата события:</EventDateTextStyled>
      <EventDateStyled>{new Date(date).toLocaleString()}</EventDateStyled>
    </EventDateBoxStyled>
  );
};

export default EventDate;
