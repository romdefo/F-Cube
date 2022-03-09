import * as React from 'react';
import {AppBar, Box, Toolbar, Typography, Menu, IconButton, Container, Button, MenuItem, Link} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import '../stylesheets/App.css'

const Navbar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pages = props.nav;

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link
            href='/'
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <img
                src="./images/egdo_logo.png"
                className="img-fluid"
                alt="Logo."
                />
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                  <Link 
                    href={`#${page}`}
                  >
                  
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            mr={7}
          >
            <Link 
              href="/"
              ml={2}
              >
              <img
                src="./images/egdo_logo.png"
                className="img-fluid"
                alt="Logo."
                />
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } , justifyContent:'center', alignItems:'center'}} >
            {pages.map((page) => (
              <Link
                href={`#${page}`}
                key={page}
                underline='none'
                onClick={handleCloseNavMenu}
                mr={8}
                className='underline'
              >
                {page}
              </Link>
            ))}
            <Link
                key='act'
                href='/j-agis'
                underline='none'
                ml={4}>
                    <Button color='primary' variant='contained' disableElevation='true'>
                        J'agis
                    </Button>
                </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
