import React from 'react';
import { EventStyled } from './index.style';
import Title from './components/Title';
import Description from './components/Description';
import DateEvent from './components/DateEvent';
import Button from './components/Button';

interface EventProps {
  event: {
    name: string;
    description: string;
    date: number | string | Date;
  };
}

const Event = ({ event }: EventProps): React.ReactElement => {
  const handleParticipateEvent = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <EventStyled onClick={handleParticipateEvent}>
      <Title text={event.name} />
      <Description text={event.description} />
      <DateEvent date={event.date} />
      <Button>Участвовать</Button>
    </EventStyled>
  );
};

export default Event;
