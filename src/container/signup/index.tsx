import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import student_icon from '../../assets/images/student-icon.png';
import "./index.css";
//import useTelegram from "../hooks/useTelegram";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useState } from 'react';
import { useConstant } from '../Constant';

const animatedComponents = makeAnimated();
const theme = createTheme();


const SingUpPage = (): React.ReactElement => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  const { interests } = useConstant();
  //const { user_id, username, onClose } = useTelegram();
  /*
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const form = {
      id: user_id,
      name: username,
      fullname: data.get('lname') + ' ' + data.get('fname'),
      about: data.get('about'), // Новое поле "Обо мне"
      photo: image,
      interests: selectedOption?.map((item) => item.value)
    };
    await axios.post("https://sergeymorykov-tg-web-backend-1a6e.twc1.net/users_reg", form);
    //await axios.post("http://localhost:5000/users_reg", form);
    delete form.photo;
    window.Telegram.WebApp.sendData(JSON.stringify(form));
    onClose();
  };
  */
  const handleAvatarClick = () => {
    const fileInput = document.getElementById('avatar-input') as HTMLInputElement;
    fileInput.click();
  };

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setAvatarUrl(reader.result as string);
    };

    reader.readAsDataURL(file);
  };



  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Регистрация
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lname"
                  label="Фамилия"
                  name="lname"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="fname"
                  required
                  fullWidth
                  id="fname"
                  label="Имя"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  id="about"
                  label="Обо мне"
                  name="about"
                  variant="outlined"
                  placeholder="Напишите о себе"
                />
              </Grid>
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ paddingTop: 7, paddingLeft: 3 }}
              >
                <Avatar src={avatarUrl || student_icon} onClick={handleAvatarClick} sx={{ width: 200, height: 200 }}/>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  style={{ display: 'none' }}
                  id="avatar-input"
                />
              </Grid>
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ paddingTop: 7, ml: 3 }}
              >
                <Select
                  onChange={handleChange}
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={interests}
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, ml: 3 }}
              >
                Регистрация
              </Button>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SingUpPage;