import React from 'react';
import { EventStyled } from './index.style';
import Title from './components/Title';
import Description from './components/Description';
import EventDate from './components/EventDate';
import { Button } from '@mui/material';
import { EventProps } from './types';

const Event = ({ name, description, date }: EventProps): React.ReactElement => {
  const handleParticipateEvent = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <EventStyled onClick={handleParticipateEvent}>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <EventDate date={date} />
      <Button type="submit" fullWidth variant="contained">
        Участвовать
      </Button>
    </EventStyled>
  );
};

export default Event;
