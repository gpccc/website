import React from 'react';

import Button from '@material-ui/core/Button';
import SettingsIcon from '@material-ui/icons/Settings';

import Menu from '@material-ui/core/Menu';

import DefaultServiceMenuItemContainer from './default-service-menu-item-container';
import PreferredLanguageMenuItem from './preferred-language-menu-item';

export default function AppBarMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
        <Button
            aria-label="settings menu"
            aria-controls="app-bar-settings"
            aria-haspopup="true"
            color="inherit"
            variant="text"
            onClick={handleOpen}>
            <SettingsIcon />
        </Button>
        <Menu
            id="app-bar-settings"
            anchorEl={anchorEl}
            getContentAnchorEl={null}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}>

            <div>
            <PreferredLanguageMenuItem />
            <DefaultServiceMenuItemContainer />
            </div>
        </Menu>
        </div>
    );
}