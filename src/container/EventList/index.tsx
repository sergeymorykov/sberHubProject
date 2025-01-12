import React from 'react';
import { useGetEventsQuery } from '../../service/api';
import Event from './components/Event';
import { EventListStyled } from './index.style';
import Title from './components/Title';
import Button from './components/Button';
import Loading from '../components/Loading';

const EventList = (): React.ReactElement => {
  const { data, isLoading, error } = useGetEventsQuery(undefined);

  return (
    <EventListStyled>
      <Title text="Список событий" />
      <Button>Добавить событие</Button>
      {isLoading && <Loading />}
      {error && <div>Произошла ошибка</div>}
      {data?.map((item) => {
        return (
          <div key={item.name}>
            <Event name={item.name} description={item.description} date={item.date} />
          </div>
        );
      })}
    </EventListStyled>
  );
};

export default EventList;
