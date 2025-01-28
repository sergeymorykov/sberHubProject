import styled from '@emotion/styled';
import Avatar from '@mui/material/Avatar';

export const PhotoStyled = styled.div<{ id: string; name: string; value: string | null }>`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

export const AvatarStyled = styled(Avatar)`
  width: 200px;
  height: 200px;
`;

export const InputStyled = styled.input`
  display: none;
`;
