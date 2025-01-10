import React from 'react';
import { EventStyled } from './index.style';
import Title from './components/Title';
import Description from './components/Description';
import DateEvent from './components/DateEvent';
import Button from './components/Button';
import { EventProps } from './types';

const Event = ({ name, description, date }: EventProps): React.ReactElement => {
  const handleParticipateEvent = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <EventStyled onClick={handleParticipateEvent}>
      <Title text={name} />
      <Description text={description} />
      <DateEvent date={date} />
      <Button>Участвовать</Button>
    </EventStyled>
  );
};

export default Event;
