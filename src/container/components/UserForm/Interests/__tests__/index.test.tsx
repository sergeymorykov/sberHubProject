import React from 'react';
import { describe, expect, test } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import Interests from '../index';
import { TestWrapper } from '../../../../../__tests__/test-wrapper';
import { mockGetInterests, spyedGetInterests } from '../../../../../__tests__/mocks/api/interests/get-interests';

describe('Interests', () => {
  test('renders', async () => {
    const mockedGetInterests = mockGetInterests();

    render(<Interests id="interests" name="interests" defaultValues={[]} />, {
      wrapper: TestWrapper
    });

    expect(await screen.findByText('Интересы')).toBeInTheDocument();
    expect(mockedGetInterests).toHaveBeenCalled();
  });

  test('Найден элемент', async () => {
    const mockedGetInterests = mockGetInterests();

    render(<Interests id="interests" name="interests" defaultValues={[]} />, {
      wrapper: TestWrapper
    });

    const select = await screen.findByRole('combobox');

    fireEvent.mouseDown(select);

    expect(await screen.findByText('Стартапы, поиск команды и нетворкинг')).toBeInTheDocument();
    expect(mockedGetInterests).toHaveBeenCalled();
  });

  test('Отображается ошибка', async () => {
    spyedGetInterests.mockRejectedValueOnce({
      message: 'В доступе отказано'
    });

    render(<Interests id="interests" name="interests" defaultValues={[]} />, {
      wrapper: TestWrapper
    });

    expect(await screen.findByText('Произошла ошибка')).toBeInTheDocument();
  });
});
