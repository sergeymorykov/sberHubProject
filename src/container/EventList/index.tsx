import React, { useState, useEffect, useRef } from 'react';
import { useGetPartialEventsQuery } from '../../service/api';
import Event from './components/Event';
import { EventListStyled } from './index.style';
import Title from './components/Title';
import Button from './components/Button';
import Loading from '../components/Loading';
import { getNavigationsValue } from '@brojs/cli';
import { useNavigate } from 'react-router-dom';

const EventList = (): React.ReactElement => {
  const [page, setPage] = useState(1);
  const pageRef = useRef(page);
  const { data, isFetching } = useGetPartialEventsQuery({ pageSize: 5, page });
  let events = data ?? [];

  const localEvent = localStorage.getItem('event');
  if (localEvent) {
    try {
      const parsedEvent = JSON.parse(localEvent);
      if (parsedEvent) {
        parsedEvent.id = 99;
        events = [parsedEvent, ...events];
      }
    } catch (error) {
      console.error('Ошибка парсинга события из localStorage:', error);
    }
  }

  useEffect(() => {
    pageRef.current = page;
  }, [page]);

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

      if (scrolledToBottom && !isFetching) {
        setPage((prevPage) => {
          const nextPage = prevPage + 1;
          pageRef.current = nextPage;
          return nextPage;
        });
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [isFetching]);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(getNavigationsValue('sberhubproject.eventForm'));
  };

  return (
    <EventListStyled>
      <Title>Список событий</Title>
      <Button onClick={handleClick}>Добавить событие</Button>
      {events.map((item) => {
        return (
          <div key={item.id}>
            <Event id={item.id} name={item.name} description={item.description} date={item.date} />
          </div>
        );
      })}
      {isFetching && <Loading />}
    </EventListStyled>
  );
};

export default EventList;
