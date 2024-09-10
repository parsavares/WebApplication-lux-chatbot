import React, { useContext, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import { useTheme } from '@mui/material';
import unilu from './assets/unilu.png';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

const pages = [
    { name: 'Home', path: '/' },
    { name: 'Project', path: '/project' },
    { name: 'Team', path: '/team' }
];
const loggedPages = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Conversation', path: '/conversation' }
];
const actions = [
    { name: 'Sign In', path: '/signin' },
    { name: 'Sign Up', path: '/signup' }
];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const { currentUser, signOut } = useContext(AuthContext);
    const theme = useTheme();

    // useEffect hook to handle window resize events
    useEffect(() => {
        const handleResize = () => {
            setAnchorElNav(null); // Close the mobile menu when resizing
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleLogout = () => {
        signOut();
        window.location.href = '/';
    };

    const menuItems = currentUser ? loggedPages : pages;

    return (
        <AppBar position="static" style={{ margin: 0 }} elevation={0} color='primary'>
            <Container maxWidth={false} sx={{ margin: 0, padding: 0 }}>
                <Toolbar disableGutters>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 3 }}>
                        <img src={unilu} height="50" width="70" alt="University Logo" />
                    </Box>
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
                                horizontal: 'left',
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
                            {menuItems.map((page) => (
                                <NavLink key={page.name} to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page.name}</Typography>
                                    </MenuItem>
                                </NavLink>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {menuItems.map((page) => (
                            <NavLink key={page.name} to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page.name}
                                </Button>
                            </NavLink>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        {!currentUser ? (
                            actions.map((item) => (
                                <NavLink key={item.name} to={item.path}>
                                    <Button>
                                        <Typography sx={{ color: theme.custom.text.white }}>
                                            {item.name}
                                        </Typography>
                                    </Button>
                                </NavLink>
                            ))
                        ) : (
                            <>
                                <NavLink to="/profile">
                                    <Button>
                                        <Typography sx={{ color: theme.custom.text.white }}>
                                            Profile
                                        </Typography>
                                    </Button>
                                </NavLink>
                                <Button onClick={handleLogout}>
                                    <Typography sx={{ color: theme.custom.text.white }}>
                                        Logout
                                    </Typography>
                                </Button>
                            </>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;