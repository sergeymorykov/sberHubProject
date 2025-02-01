import React from 'react';
import { ButtonStyled } from './index.style';
import { useGetResponseGigachatQuery } from '../../../../../../service/api';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Grid2 from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Loading from '../../../../../components/Loading';

interface CompatibilityProps {
  infoUser1: string;
  infoUser2: string;
}

const Compatibility = ({ infoUser1, infoUser2 }: CompatibilityProps): React.ReactElement => {
  const [isOpenDialog, setIsOpenDialog] = React.useState(false);

  const extractCode = (input) => {
    if (!input) {
      return undefined;
    }
    const regex = /```json([\s\S]*?)```/;
    const match = input.match(regex);
    return match ? match[1].trim() : '';
  };

  const request = 'Первый пользователь = ' + infoUser1 + ' Второй пользователь = ' + infoUser2;
  const { text, isFetching, error } = useGetResponseGigachatQuery(
    { text: request },
    {
      skip: !isOpenDialog,
      selectFromResult: (result) => ({
        text: extractCode(result.data?.text),
        isFetching: result.isFetching,
        error: result.error
      })
    }
  );

  const handleClickOpen = () => {
    setIsOpenDialog(true);
  };

  const handleClose = () => {
    setIsOpenDialog(false);
  };

  return (
    <>
      <ButtonStyled onClick={handleClickOpen}>Совместимость</ButtonStyled>
      <Dialog fullScreen open={isOpenDialog} onClose={handleClose}>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Grid2 sx={{ p: 3 }}>
          <Card
            elevation={5}
            sx={{
              maxWidth: 345,
              margin: 'auto',
              marginTop: 4,
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <CardContent>
              {isFetching && <Loading />}
              {error && <Grid2 sx={{ color: 'var(--tg-theme-text-color)' }}>Произошла ошибка</Grid2>}
              {text && (
                <>
                  <Typography variant="h5" component="div" gutterBottom>
                    Совместимость: {JSON.parse(text)?.compatibility}%
                  </Typography>
                  <Divider sx={{ marginBottom: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    Точки соприкосновения:
                  </Typography>
                  <List>
                    {JSON.parse(text)?.pointsOfContact.map((item, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                  <Divider sx={{ marginBottom: 2, marginTop: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    Потенциальные различия:
                  </Typography>
                  <List>
                    {JSON.parse(text)?.potentialDifferences.map((item, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </>
              )}
            </CardContent>
          </Card>
        </Grid2>
      </Dialog>
    </>
  );
};

export default Compatibility;
