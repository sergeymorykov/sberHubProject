import React, { useState, useEffect } from 'react';
import Title from './components/Title';
import Description from './components/Description';
import EventDate from './components/EventDate';
import Button from '@mui/material/Button';
import { EventStyled, ButtonStyled } from './index.style';
import { EventProps } from './types';
import { useParticipateEventMutation, useRefuseEventMutation } from '../../../../service/api';

const Event = ({ id, name, description, date }: EventProps): React.ReactElement => {
  useEffect(() => {
    const event = localStorage.getItem(`event${id}`);
    if (event === '1') {
      setIsParticipating(true);
    } else {
      setIsParticipating(false);
    }
  }, [id]);

  const [participateEvent] = useParticipateEventMutation();
  const [refuseEvent] = useRefuseEventMutation();
  const [isParticipating, setIsParticipating] = useState(false);
  const user_id = JSON.parse(localStorage.getItem('user') || '{}')?.id;
  const handleEvent = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isParticipating) {
      const result = await participateEvent({ user_id: user_id, id });
      if (!result.error) {
        setIsParticipating(true);
        localStorage.setItem(`event${id}`, '1');
      }
    } else {
      const result = await refuseEvent({ user_id: user_id, id });
      if (!result.error) {
        setIsParticipating(false);
        localStorage.setItem(`event${id}`, '0');
      }
    }
  };

  return (
    <EventStyled onClick={handleEvent}>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <EventDate date={date} />
      {!isParticipating ? (
        <Button type="submit" fullWidth variant="contained">
          Участвовать
        </Button>
      ) : (
        <ButtonStyled type="submit" fullWidth variant="contained">
          Отказаться
        </ButtonStyled>
      )}
    </EventStyled>
  );
};

export default Event;
