import React, { useState } from 'react';
import Title from './components/Title';
import Grid2 from '@mui/material/Grid2';
import { EventFormStyled, GridChildrenStyle, BoxIconButtonStyled } from './index.style';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import Dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ruRU } from '@mui/x-date-pickers/locales';
import 'dayjs/locale/ru';
import { useCreateEventMutation, useSendMessageBotMutation } from '../../service/api';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useTelegram from '../../hooks/useTelegram';

Dayjs.locale('ru');

const EventForm = (): React.ReactElement => {
  const [date, setDate] = React.useState(Dayjs());
  const [createEvent] = useCreateEventMutation();
  const [sendMessageBot] = useSendMessageBotMutation();
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { user_id } = useTelegram();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const getTrimmedValue = (key: string): string => {
      const value = formData.get(key);
      return typeof value === 'string' ? value.trim() : '';
    };
    const eventInfo = {
      name: getTrimmedValue('name'),
      description: getTrimmedValue('description'),
      date: Dayjs(date).format()
    };
    try {
      const result = await createEvent({ data: eventInfo });
      if (!result.error) {
        localStorage.setItem('event', JSON.stringify(eventInfo));
        await sendMessageBot({
          chat_id: user_id,
          text: `Вы успешно создали событие ${eventInfo.name}`
        });
        navigate(-1);
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Не удалось сохранить данные. Попробуйте снова.');
    }
  };

  return (
    <>
      <BoxIconButtonStyled>
        <IconButton aria-label="Home" onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </IconButton>
      </BoxIconButtonStyled>
      <EventFormStyled onSubmit={handleSubmit}>
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
                value={date}
                format="DD MMMM YYYY"
                onChange={(newValue) => setDate(newValue)}
              />
            </LocalizationProvider>
          </GridChildrenStyle>
          <GridChildrenStyle size={12}>
            <Button type="submit" fullWidth variant="contained">
              Добавить событие
            </Button>
          </GridChildrenStyle>
          {error && <GridChildrenStyle size={12}>Произошла ошибка</GridChildrenStyle>}
        </Grid2>
      </EventFormStyled>
    </>
  );
};

export default EventForm;
