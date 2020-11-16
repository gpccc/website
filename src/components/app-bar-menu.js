import React from 'react';

import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

import DefaultServiceMenuItem from './default-service-menu-item';

export default function AppBarMenu() {
    const [openState, setOpenState] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
    
        setOpenState(open);
    };

    const list = () => (
        <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
            <DefaultServiceMenuItem />
            </List>

            <Divider />
        </div>
    );

    return (
        <React.Fragment>
        <Button
            aria-label="main menu"
            aria-controls="app-bar-menu"
            aria-haspopup="true"
            color="inherit"
            variant="text"
            onClick={toggleDrawer(true)}>
            <MenuIcon />
        </Button>
        <Drawer
            id="app-bar-menu"
            anchor="left"
            open={openState}
            onClose={toggleDrawer(false)}>
            {list()}
        </Drawer>
        </React.Fragment>
    );
}