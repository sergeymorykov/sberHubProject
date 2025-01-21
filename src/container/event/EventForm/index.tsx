import React from 'react';
import { EventFormStyled } from './index.style';
import Title from './components/Title';
import { Grid2 } from '@mui/material';
import { GridChildrenStyle } from './index.style';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import Dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ruRU } from '@mui/x-date-pickers/locales';
import 'dayjs/locale/ru';

Dayjs.locale('ru');

const EventForm = (): React.ReactElement => {
  const [value, setValue] = React.useState(Dayjs());

  return (
    <EventFormStyled>
      <Title>Создание события</Title>
      <Grid2 container>
        <GridChildrenStyle size={12}>
          <TextField required id="name" label="Название события" name="name" />
        </GridChildrenStyle>
        <GridChildrenStyle size={12}>
          <TextField
            id="description"
            label="Описание"
            name="description"
            placeholder="Напишите описание события..."
            multiline
            rows={3}
          />
        </GridChildrenStyle>
        <GridChildrenStyle size={12}>
          <LocalizationProvider
            localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}
            dateAdapter={AdapterDayjs}
            adapterLocale="ru"
          >
            <MobileDatePicker
              localeText={{ clearButtonLabel: 'Vider' }}
              value={value}
              format="DD MMMM YYYY"
              onChange={(newValue) => setValue(newValue)}
            />
          </LocalizationProvider>
        </GridChildrenStyle>
        <GridChildrenStyle size={12}>
          <Button type="submit" fullWidth variant="contained">
            Добавить событие
          </Button>
        </GridChildrenStyle>
      </Grid2>
    </EventFormStyled>
  );
};

export default EventForm;
