import * as React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, MenuItem, Link } from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu';
import '../stylesheets/App.css';

const Navbar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pages = props.nav;

  function scroll() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LinkRouter
            to='/'
            sx={{ display: { xs: 'none', md: 'flex' } }}
            style={{ textDecoration: 'none' }}
          >
            <Link sx={{ display: { xs: 'none', md: 'flex' } }}>
              <img
                src="./images/F3-logo.png"
                className="img-fluid F3-logo"
                alt="Logo."
                style={{ display: { xs: 'none' }, height: "50px" }}
                onClick={scroll}
              />
            </Link>
          </LinkRouter>

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
            pr={5} pt={1}
          >
            <LinkRouter
              to="/"
              style={{ textDecoration: 'none' }}>
              <img
                src="./images/F3-logo.png"
                className="img-fluid"
                alt="Logo."
                style={{ height: "50px" }}
                onClick={scroll}
              />
            </LinkRouter>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }} >
            {pages.map((page) => (
              <Link
                href={`#${page}`}
                key={page}
                underline='none'
                onClick={handleCloseNavMenu}
                pr={8}
                className='underline'
              >
                {page}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;