import React, { useState } from 'react';
import { Grid2, Container } from '@mui/material';
import Title from './Title';
import Photo from './Photo';
import Interests from './Interests';
import { FormStyled, GridChildrenStyle } from './index.style';
import useTelegram from '../../../hooks/useTelegram';
import { useUpdateUserMutation, useCreateUserMutation } from '../../../service/api';
import { userItem } from '../../../service/users/types';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const UserForm = ({ user = null }: { user?: userItem }): React.ReactElement => {
  const { user_id, onClose } = useTelegram();
  const [error, setError] = useState<string | null>(null);

  const [updateUser] = useUpdateUserMutation();
  const [createUser] = useCreateUserMutation();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const getTrimmedValue = (key: string): string => {
      const value = formData.get(key);
      return typeof value === 'string' ? value.trim() : '';
    };
    const userInfo = {
      id: user_id,
      username: `${formData.get('lastname')} ${formData.get('firstname')}`.trim(),
      about: getTrimmedValue('about'),
      photo: document.getElementById('photo')?.getAttribute('value') || null,
      interests: formData
        .getAll('interests')
        .map((interest) => ({ value: interest.toString(), label: interest.toString() }))
    };

    try {
      let result;
      if (user) {
        result = await updateUser({ id: user_id, data: userInfo });
      } else {
        result = await createUser({ data: userInfo });
      }
      if(!result.error) {
        localStorage.setItem(
          'user',
          JSON.stringify(userInfo)
        );
        onClose();
      }      
    } catch (err) {
      console.error('Error:', err);
      setError('Не удалось сохранить данные. Попробуйте снова.');
    }
  };

  return (
    <Container>
      <Title>{user ? 'Редактирование' : 'Регистрация'}</Title>
      <FormStyled onSubmit={handleSubmit}>
        <Grid2 container>
          <GridChildrenStyle size={6}>
            <TextField
              required
              id="lastname"
              label="Фамилия"
              name="lastname"
              autoComplete="family-name"
              fullWidth
              defaultValue={user?.username.split(' ')[1]}
            />
          </GridChildrenStyle>
          <GridChildrenStyle size={6}>
            <TextField
              required
              id="firstname"
              label="Имя"
              name="firstname"
              autoComplete="given-name"
              fullWidth
              defaultValue={user?.username.split(' ')[0]}
            />
          </GridChildrenStyle>
          <GridChildrenStyle size={12}>
            <TextField
              id="about"
              label="Обо мне"
              name="about"
              placeholder="Напишите о себе"
              defaultValue={user?.about}
              fullWidth
              multiline
              rows={3}
            />
          </GridChildrenStyle>
          <GridChildrenStyle size={12}>
            <Photo id="photo" name="photo" defaultPhoto={user?.photo} />
          </GridChildrenStyle>
          <GridChildrenStyle size={12}>
            <Interests id="interests" name="interests" defaultValues={user?.interests} />
          </GridChildrenStyle>
          <GridChildrenStyle size={12}>
            <Button type="submit" fullWidth variant="contained">
              {user ? 'Сохранить' : 'Регистрация'}
            </Button>
          </GridChildrenStyle>
          {error && <GridChildrenStyle size={12}>Произошла ошибка</GridChildrenStyle>}
        </Grid2>
      </FormStyled>
    </Container>
  );
};

export default UserForm;
