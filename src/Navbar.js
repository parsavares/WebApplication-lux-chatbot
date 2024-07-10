import * as React from 'react';
import { useContext } from 'react';
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
import AdbIcon from '@mui/icons-material/Adb';

import { useTheme } from '@mui/material';
import unilu from './assets/unilu.png'
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
]
const actions = [
    { name: 'Sign In', path: '/signin' },
    { name: 'Sign Up', path: '/signup' }
];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const { currentUser, signOut } = useContext(AuthContext);
    const theme = useTheme()

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = () => {
        signOut()
        window.location.href = '/';
    }

    return (
        <AppBar position="static" style={{ margin: 0 }} elevation={0} color='primary'>
            <Container maxWidth={false} sx={{ margin: 0, padding: 0 }}>
                <Toolbar disableGutters>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 3 }}>
                        <img src={unilu} height="50" width="70"></img>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} cl>
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
                            {pages.map((page) => (
                                <NavLink key={page.name} to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page.name}</Typography>
                                    </MenuItem>
                                </NavLink>
                            ))}
                        </Menu>
                    </Box>
                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                    {!currentUser ? (
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
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
                    ) : (
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {loggedPages.map((page) => (
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
                    )}
                    {!currentUser ? (
                        <Box sx={{ flexGrow: 0 }}>
                            {actions.map((item) => (
                                <NavLink key={item.name} to={item.path}>
                                    <Button>
                                        <Typography sx={{ color: theme.custom.text.white }}>
                                            {item.name}
                                        </Typography>
                                    </Button>
                                </NavLink>
                            ))}
                        </Box>
                    ) : (
                        <Box sx={{ flexGrow: 0 }}>
                            <NavLink to="/profile">
                                <Button>
                                    <Typography sx={{ color: theme.custom.text.white }}>
                                        profile
                                    </Typography>
                                </Button>
                            </NavLink>
                            <Button onClick={handleLogout}>
                                <Typography sx={{ color: theme.custom.text.white }}>
                                    logout
                                </Typography>
                            </Button>
                        </Box>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
