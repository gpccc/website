import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';

import Menu from '@material-ui/core/Menu';

import DefaultServiceMenuItemContainer from './default-service-menu-item-container';
import PreferredLanguageMenuItemContainer from './preferred-language-menu-item-container';

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
        <IconButton
            aria-label="settings menu"
            aria-controls="app-bar-settings"
            aria-haspopup="true"
            color="inherit"
            variant="text"
            onClick={handleOpen}>
            <SettingsIcon />
        </IconButton>
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
            <PreferredLanguageMenuItemContainer />
            <DefaultServiceMenuItemContainer />
            </div>
        </Menu>
        </div>
    );
}