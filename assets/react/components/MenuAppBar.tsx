import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const MenuAppBar = ({
    isAuthenticated = false,
    toggleMenu
}: props): React.JSX.Element => (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={toggleMenu}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    News
                </Typography>
                <Button
                    color="inherit"
                    href={isAuthenticated ? '/logout' : '/authenticate'}
                >
                    {isAuthenticated ? 'Logout' : 'Login'}
                </Button>
            </Toolbar>
        </AppBar>
    </Box>
);

interface props {
    isAuthenticated?: boolean,
    toggleMenu: () => void,
}

export default MenuAppBar;
