import styled from '@emotion/styled';
import Select from 'react-select';

export const InterestsStyled = styled(Select)`
  .select__control {
    background-color: var(--tg-theme-bg-color, #ffffff);
    border: 1px solid var(--tg-theme-border-color, #cccccc);
    color: var(--tg-theme-text-color, #000000);
    border-radius: 8px;
    font-size: 14px;
    box-shadow: none;

    &:hover {
      border-color: var(--tg-theme-border-hover, #888888);
    }
  }

  .select__menu {
    background-color: var(--tg-theme-bg-color, #ffffff);
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }

  .select__option {
    background-color: transparent;
    color: var(--tg-theme-text-color, #000000);
    padding: 10px;
    cursor: pointer;

    &:hover {
      background-color: var(--tg-theme-hover-color, #f2f2f2);
    }

    &.select__option--is-selected {
      background-color: var(--tg-theme-button-color);
      color: #ffffff;
    }

    &.select__option--is-focused {
      background-color: var(--tg-theme-hover-color, #e0e0e0);
    }
  }

  .select__placeholder {
    color: var(--tg-theme-placeholder-color, #888888);
    font-size: 14px;
  }

  .select__multi-value {
    background-color: var(--tg-theme-button-color);
    color: #ffffff;
    border-radius: 4px;

    .select__multi-value__label {
      color: #ffffff;
    }

    .select__multi-value__remove {
      color: #ffffff;

      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        color: #ffffff;
      }
    }
  }
`;