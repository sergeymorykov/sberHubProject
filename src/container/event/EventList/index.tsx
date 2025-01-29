import React from 'react';
import { useGetEventsQuery } from '../../../service/api';
import Event from './components/Event';
import { EventListStyled } from './index.style';
import Title from './components/Title';
import Button from './components/Button';
import Loading from '../../components/Loading';
import { getNavigationsValue } from '@brojs/cli';
import { useNavigate } from 'react-router-dom';

const EventList = (): React.ReactElement => {
  const { data, isLoading, error } = useGetEventsQuery(undefined);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(getNavigationsValue('sberhubproject.eventForm'));
  }
  return (
    <EventListStyled>
      <Title>Список событий</Title>
      <Button onClick={handleClick}>Добавить событие</Button>
      {isLoading && <Loading />}
      {error && <div>Произошла ошибка</div>}
      {data?.map((item) => {
        return (
          <div key={item.id}>
            <Event id={item.id}  name={item.name} description={item.description} date={item.date} />
          </div>
        );
      })}
    </EventListStyled>
  );
};

export default EventList;
