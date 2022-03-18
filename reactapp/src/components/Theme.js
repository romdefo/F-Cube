import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // black
      light: '#FFFFFF', // white
      dark: '#000000', // black
    },
    secondary: {
      main: '#0a7992', // blue of the logo
      dark: '#756612', // dark-brown
      light: '#FAF5E2' // beige
    },
    infos: {
      main: '#0a7992' // light-blue
    }
  },
  typography: {
    fontFamily: 'IBM Plex Sans'
  }
});

theme.props = {
  MuiButton: {
    disableElevation: true,
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
      h1: {
        textAlign: 'center'
      },
      h2: {
        fontSize: 50,
        color: 'white',
        fontWeight: 700,
        textAlign: 'center'
      },
      h3: {
        color: 'white',
        fontWeight: 500,
        textAlign: 'center'
      },
      h4: {
        color: theme.palette.primary.light,
        textAlign: 'center',
      },
      h5: {
        color: theme.palette.primary.dark,
        textAlign: 'center',
        fontWeight: 800,
        fontSize: 'large'
      },
      body1: {
        color: theme.palette.primary.dark,
        // textAlign: 'center',
        fontWeight: 900,
      },
      body2: {
        color: theme.palette.primary.dark,
        textAlign: 'center',
        fontWeight: 900,
      },
    }
  },
  // Tabs
  MuiTab: {
    styleOverrides: {
      root: {
        '&.Mui-selected': {
          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.secondary.light,
          topBorderRadius: '20px',
          fontWeight: 600,
        },
        color: theme.palette.primary.dark,
        topBorderRadius: '20px',
        fontWeight: 600,
      }
    }
  },
  // Buttons
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 0,
        textTransform: 'none',
        color: theme.palette.primary.main,
        fontWeight: 700,
      },
      contained: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.dark,
        underline: 'none',
        borderRadius: '20px',
        fontWeight: 700,
        '&:hover': {
          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.primary.light,
        },
      },
      containedPrimary: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.dark,
        underline: 'none',
        borderRadius: '20px',
        fontWeight: 600,
        '&:hover': {
          backgroundColor: theme.palette.secondary.dark,
          color: theme.palette.primary.light,
        },
      },
      containedSecondary: {
        fontWeight: 700,
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.secondary.light,
        underline: 'none',
        borderRadius: '20px',
        '&:hover': {
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.primary.dark,
        },
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
        fontWeight: '500',
        color: theme.palette.primary.light,
        '&:hover': {
          color: theme.palette.secondary.main,
        }
      }

    }
  },
  // Cards
  MuiCard: {
    styleOverrides: {
      root: {
        backgroundColor: 'none',
        borderRadius: '20px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        border: 'none',
        margin: 0
      }
    }
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        bottomBorderRadius: '20px',
        height: '60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: 'none',
        // backgroundImage: 'url(${"./light-blue.jpg"})',
        backgroundColor: 'none',
        // backgroundColor: theme.palette.primary.light,
        // color: theme.palette.secondary.light,
        fontWeight: 500
      }
    }
  },
  MuiCardMedia: {
    styleOverrides: {
      root: {
        // borderRadius: '20px',
        height: '40%',
      }
    }
  },
  // MuiInputLabel: {
  //     root: {
  //     textTransform: 'uppercase',
  //     fontSize: '1.5rem',
  //     },
  // },
  // MuiInput: {
  //     root: {
  //     top: theme.spacing(2),
  //     border: `1px solid ${grey[500]}`,
  //     outline: `1px solid transparent`,
  //     padding: theme.spacing(1),
  //     '&$focused': {
  //         border: `1px solid ${theme.palette.primary.main}`,
  //         outline: `1px solid ${theme.palette.primary.main}`,
  //     },
  //     },
  // },
  // MuiTooltip: {
  //     tooltip: {
  //     backgroundColor: '#fff',
  //     border: `2px solid ${theme.palette.primary.main}`,
  //     color: theme.palette.primary.main,
  //     },
  //     arrow: {
  //     color: theme.palette.primary.main,
  //     },
  // },
};

export default theme;