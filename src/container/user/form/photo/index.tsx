import * as React from 'react';
import { useState } from 'react';
import { AvatarStyled, PhotoStyled, InputStyled } from './index.style';
import { Avatar } from '@mui/material';

const Photo = ({ id, name, defaultPhoto = null}): React.ReactElement => {
  const [photo, setPhoto] = useState(defaultPhoto);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const newPhoto = e.target.result;
        setPhoto(newPhoto);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleAvatarClick = () => {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }

  
  return (
    <PhotoStyled
      id = {id}
      name = {name}
      value = {photo}
    >
      <AvatarStyled
        src={photo}
        alt="Выберите фотографию"
        onClick={handleAvatarClick}
       />
      <InputStyled
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
    </PhotoStyled>
  );
  
}

export default Photo;
