import * as React from 'react';
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Box from '@mui/material/Box';

const MenuDrawer = ({ showLeftMenu, toggleMenu }: props): React.JSX.Element => (
    <Drawer
        anchor="left"
        open={showLeftMenu}
        onClose={toggleMenu}
    >
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    </Drawer>
);

interface props {
    showLeftMenu: boolean,
    toggleMenu: () => void,
}

export default MenuDrawer;
