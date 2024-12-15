import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';

export const AboutStyled = styled(TextField)`  
  & .MuiInputBase-input {
      color: var(--tg-theme-text-color,rgba(0, 0, 0, 0.6));
    }

    & .MuiFormLabel-root {
      color: var(--tg-theme-text-color, rgba(0, 0, 0, 0.6));
    }  

    & .Mui-focused .MuiFormLabel-root {
      color: var(--tg-theme-label-focus-color, #0066ff);
    }

    
    & .MuiOutlinedInput-root {
      fieldset {
        border-color: var(--tg-theme-border-color, #cccccc);
      }

      &:hover fieldset {
        border-color: var(--tg-theme-border-hover, #888888);
      }

      &.Mui-focused fieldset {
        border-color: var(--tg-theme-border-focused, #0066ff);
      }
        
    }
  
  @media (prefers-color-scheme: dark) {
    & .MuiInputBase-input {
      color: var(--tg-theme-text-color-dark, #ffffff);
    }

    & .MuiFormLabel-root {
      color: var(--tg-theme-label-color-dark, #ffffff);
    }

    & .Mui-focused .MuiFormLabel-root {
      color: var(--tg-theme-label-focus-color-dark, #0066ff);
    }

    & .MuiOutlinedInput-root {
      fieldset {
        border-color: var(--tg-theme-border-color-dark, #ffffff);
      }

      &:hover fieldset {
        border-color: var(--tg-theme-border-hover-dark, #777777);
      }

      &.Mui-focused fieldset {
        border-color: var(--tg-theme-border-focused-dark, #0066ff); 
      }
    }
  }
`;