import { createTheme } from '@mui/material/styles';

export const telegramTheme = (theme) =>
  createTheme({
    ...theme,
    cssVariables: {
      cssVarPrefix: 'any'
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: 'var(--tg-theme-button-color)'
          }
        }
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: 'var(--tg-theme-text-color)'
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            color: 'var(--tg-theme-button-text-color)',
            backgroundColor: 'var(--tg-theme-button-color)',
            '&:hover': {
              backgroundColor: 'var(--tg-theme-link-color)',
              boxShadow: 'none'
            }
          }
        }
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiInputBase-input': {
              color: 'var(--tg-theme-text-color)'
            },
            '& .MuiFormLabel-root': {
              color: 'var(--tg-theme-text-color)'
            },
            '& .Mui-focused .MuiFormLabel-root': {
              color: '#0066ff'
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'var(--tg-theme-text-color)'
              },
              '&:hover fieldset': {
                borderColor: '#888888'
              },
              '&.Mui-focused fieldset': {
                borderColor: ' #0066ff'
              }
            },
            width: '100%'
          }
        }
      },
      MuiPickersToolbar: {
        styleOverrides: {
          root: {
            backgroundColor: 'var(--tg-theme-button-color)',
            color: 'var(--tg-theme-button-text-color)'
          }
        }
      },
      MuiPickersLayout: {
        styleOverrides: {
          root: {
            backgroundColor: 'var(--tg-theme-bg-color)',
            color: 'var(--tg-theme-text-color)'
          }
        }
      },
      MuiPickersDay: {
        styleOverrides: {
          root: {
            color: 'var(--tg-theme-text-color)',
            backgroundColor: 'var(--tg-theme-bg-color)',
            '&.Mui-selected': {
              color: 'var(--tg-theme-button-text-color)',
              backgroundColor: 'var(--tg-theme-button-color)'
            },
            '&:hover': {
              backgroundColor: 'var(--tg-theme-link-color)'
            }
          },
          today: {
            '&:not(.Mui-selected)': {
              border: '1px solid var(--tg-theme-text-color)'
            }
          }
        }
      },
      MuiDayCalendar: {
        styleOverrides: {
          weekDayLabel: {
            color: 'var(--tg-theme-hint-color)'
          }
        }
      },
      MuiPickersCalendarHeader: {
        styleOverrides: {
          switchViewButton: {
            color: 'var(--tg-theme-text-color)'
          }
        }
      },
      MuiPickersArrowSwitcher: {
        styleOverrides: {
          button: {
            color: 'var(--tg-theme-text-color)'
          }
        }
      },
      MuiAvatar: {
        styleOverrides: {
          root: {
            backgroundColor: 'var(--tg-theme-button-color)',
            color: 'var(--tg-theme-button-text-color)',
            boxShadow: '0 4px 20px rgb(from var(--tg-theme-text-color) r g b / 20%)'
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: 'var(--tg-theme-bg-color)',
            color: 'var(--tg-theme-text-color)'
          }
        }
      }
    }
  });
