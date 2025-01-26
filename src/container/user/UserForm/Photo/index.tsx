import * as React from 'react';
import { useState } from 'react';
import { AvatarStyled, PhotoStyled, InputStyled } from './index.style';
import { PhotoProps } from './types';

const Photo = ({ id, name, defaultPhoto = null }: PhotoProps): React.ReactElement => {
  const [photo, setPhoto] = useState<string | null>(defaultPhoto);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const newPhoto = e.target.result.toString();
        setPhoto(newPhoto);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleAvatarClick = () => {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  };

  return (
    <PhotoStyled id={id} name={name} value={photo}>
      <AvatarStyled src={photo} alt="Выберите фотографию" onClick={handleAvatarClick} />
      <InputStyled id="fileInput" type="file" accept="image/*" onChange={handleFileChange} />
    </PhotoStyled>
  );
};

export default Photo;
