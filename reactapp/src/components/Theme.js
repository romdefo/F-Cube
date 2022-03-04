import { createTheme } from '@mui/material';
import { grey, deepPurple, amber } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#003D55',
    },
    secondary: {
      main: amber[500],
      contrastText: 'white',
    },
  },
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
    MuiTypography: {
        styleOverrides: {
            h2: {
                color:'#003D55',
                fontWeight: 700,
            }
        }       
    },
    MuiTab: {
        styleOverrides: {
            root: {
                '&$selected': {
                    backgroundColor: 'red'
                }
                
            }
        }
    },
    MuiButton: {
        root: {
        borderRadius: 0,
        textTransform: 'none',
        },
        containedPrimary: {
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.dark,
        },
        },
        containedSecondary: {
        fontWeight: 700,
        },
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