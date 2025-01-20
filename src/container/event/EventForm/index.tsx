import React from 'react';
import { EventFormStyled } from './index.style';
import Title from './components/Title';
import { Grid2 } from '@mui/material';
import { GridChildrenStyle } from './index.style';
import Name from './components/Name';
import Description from './components/Description';
import EventDate from './components/EventDate';
import Button from './components/Button';


const EventForm = (): React.ReactElement => {
  return (
    <EventFormStyled>
        <Title text="Создание события" />
      <Grid2 container>        
        <GridChildrenStyle size={12}>
          <Name
            id="name"
            label="Название события"
            name="name"
          />
        </GridChildrenStyle>
        <GridChildrenStyle size={12}>
          <Description
            rows={3}
            id="description"
            label="Описание"
            name="description"
            placeholder="Напишите описание события..."
          />
        </GridChildrenStyle>
        <GridChildrenStyle size={12}>
          <EventDate />
        </GridChildrenStyle>
        <GridChildrenStyle size={12}>
          <Button>Добавить событие</Button>
        </GridChildrenStyle>
      </Grid2>
    </EventFormStyled>
  );
};

export default EventForm;
