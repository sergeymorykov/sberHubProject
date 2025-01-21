import styled from '@emotion/styled';

export const LoadingStyled = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid var(--tg-theme-text-color);
  border-top: 5px solid var(--tg-theme-button-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingBoxStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
