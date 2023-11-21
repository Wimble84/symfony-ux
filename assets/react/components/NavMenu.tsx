import * as React from 'react';
import MenuAppBar from './MenuAppBar';
import { ThemeProvider } from '@mui/material';
import { DarkTheme } from '../Theme/DarkTheme';
import MenuDrawer from './MenuDrawer';

const NavMenu = ({
    isAuthenticated = false
}: props) => {
    console.log(isAuthenticated);
    const [showLeftMenu, setShowLeftMenu] = React.useState(false);

    const toggleMenu = (): void => {
        setShowLeftMenu(!showLeftMenu);
    };

    return (
        <ThemeProvider theme={DarkTheme}>
            <MenuAppBar
                isAuthenticated={isAuthenticated}
                toggleMenu={toggleMenu}
            />
            <MenuDrawer
                showLeftMenu={showLeftMenu}
                toggleMenu={toggleMenu}
            />
        </ThemeProvider>
    );
};

interface props {
    isAuthenticated?: boolean,
}

export default NavMenu;
