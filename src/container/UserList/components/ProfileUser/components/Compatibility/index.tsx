import React from 'react';
import { ButtonStyled } from './index.style';
import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';

const Compatibility = (): React.ReactElement => {
  const openai = createOpenAI({
    compatibility: 'strict',
    baseURL: 'https://api.openai.com/v1',
    apiKey: process.env.REACT_APP_OPENAI_API_KEY
  });

  const handleClick = async () => {
    const { text } = await generateText({
      model: openai('gpt-4-turbo'),
      prompt: 'Напишите рецепт вегетарианской лазаньи на 4 человек.'
    });

    console.log(text);
  };

  return <ButtonStyled onClick={handleClick}>Совместимость</ButtonStyled>;
};

export default Compatibility;
