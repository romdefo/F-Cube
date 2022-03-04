import { createTheme } from '@mui/material';
import { grey, deepPurple, amber } from '@mui/material/colors';
import { palette } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#003D55',
      // light: '#80CCEA',
      // dark: '#003D55',
    },
    secondary: {
      main: '#FFF',
      // contrastText: 'white',
    },
    infos: {
      main: '#80CCEA'
    }
  },
});

theme.props = {
  MuiButton: {
    //disableElevation: true,
  },
  MuiInputLabel: {
    shrink: true,
  },
  MuiInput: {
    disableUnderline: true,
  },
  MuiTooltip: {
    arrow: true,
  },
};

theme.components = {
    //Typography
    MuiTypography: {
        styleOverrides: {
            h2: {
                color:'#003D55',
                fontWeight: 700,
            },
            h4: {
              color: theme.palette.primary.main,
              textAlign: 'center'
            },
            body2: {
              color: theme.palette.primary.main,
              textAlign: 'center'
            }
        }       
    },
    // Tabs
    MuiTab: {
        styleOverrides: {
            root: {
                '&.Mui-selected': {
                    backgroundColor: theme.palette.primary.main,
                    color: '#FFF'
                }
                
            }
        }
    },
    // Buttons
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: 'none',
        },
        containedPrimary: {
          '&:hover': {
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.primary,
        },
        },
        containedSecondary: {
          fontWeight: 700,
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.primary.main,
          underline: 'none',
          borderRadius: '10px'
        },
      }
    },
    // Links
    MuiLink: {
      styleOverrides: {
        root: {
          my: 2,
          display: 'block',
        },
        underlineNone: {
          color: theme.palette.secondary.main,
          '&:after' : {
              right: 0,
              width: 0,
              bottom: '-5px',
              background: '#FFFFFF',
              height: '2px',
              transitionProperty: 'width',
              transitionDuration: '0.4s',
              transitionTimingFunction: 'ease-out',
                    },
          '&:hover:after': {
              left: 0,
              right: 'auto',
              width: '100%',
              color: '#FFFFFF'},
          '&:hover': {
            color: theme.palette.infos.main,
            // transform: 'scale(1.5)',
          }
        }

      }
    },
    MuiInputLabel: {
        root: {
        textTransform: 'uppercase',
        fontSize: '1.5rem',
        },
    },
    MuiInput: {
        root: {
        top: theme.spacing(2),
        border: `1px solid ${grey[500]}`,
        outline: `1px solid transparent`,
        padding: theme.spacing(1),
        '&$focused': {
            border: `1px solid ${theme.palette.primary.main}`,
            outline: `1px solid ${theme.palette.primary.main}`,
        },
        },
    },
    MuiTooltip: {
        tooltip: {
        backgroundColor: '#fff',
        border: `2px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.main,
        },
        arrow: {
        color: theme.palette.primary.main,
        },
    },
};

export default theme;