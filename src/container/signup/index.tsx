import * as React from 'react';
import {Button, Grid2, Box, Container
} from '@mui/material';
import Title from './title';
import Name from './name';
import About from './about';
import Photo from './photo';
import Interests from './interests';
import RegisterButton from './button';
import axios from 'axios';
import student_icon from './student-icon.png';
import "./index.css";
//import useTelegram from "../hooks/useTelegram";
import Select from 'react-select';
import { useState } from 'react';
import { useConstant } from '../Constant'; 
import { GridChildrenStyle } from './index.style';

const SingUpPage = (): React.ReactElement => {
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

  return (
      <Container>
          <Title>Регистрация</Title>  
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid2 container>
              <GridChildrenStyle size={6}>
                <Name 
                  id="lastname"
                  label="Фамилия" 
                  name="lastname" 
                  autoComplete="family-name"
                />                
              </GridChildrenStyle>
              <GridChildrenStyle size={6}>
                <Name 
                  id="firstname"
                  label="Имя"
                  name="firstname" 
                  autoComplete="given-name"
                />
              </GridChildrenStyle>
              <GridChildrenStyle size={12}>
                <About
                  rows={3}
                  id="about"
                  label="Обо мне"
                  name="about"
                  placeholder="Напишите о себе"
                />
              </GridChildrenStyle>
              <GridChildrenStyle size={12}>
                <Photo 
                  id="photo"
                  name="photo" 
                />
              </GridChildrenStyle>
              <GridChildrenStyle size={12}>
                <Interests
                  options={interests}
                  placeholder='Выберите интересы...'
                />
              </GridChildrenStyle>
              <GridChildrenStyle size={12}>
              <RegisterButton>
                Регистрация
              </RegisterButton>
              </GridChildrenStyle>
            </Grid2>
          </Box>
      </Container>
  );
};

export default SingUpPage;