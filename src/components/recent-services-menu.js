import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import ListItemText from '@material-ui/core/ListItemText';

import TimeUtils from '../modules/time-utils';

export default function RecentServicesMenu({services, onSermonSelect, onOlderSermonsSelect}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleSermonMenuItemClick = (index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
        onSermonSelect(services[index]);
    };

    const handleOlderSermonsItemClick = () => {
        setAnchorEl(null);
        onOlderSermonsSelect();
    };
      
    const handleClose = () => {
        setAnchorEl(null);
    };

    const maxSermonsToShow = 4;
    const sermonsToShow = services.length <= maxSermonsToShow ? services : services.slice(0, maxSermonsToShow);

    return (
        <div>
            <Button size="small" color="primary" aria-controls="recent-services-menu" aria-haspopup="true" onClick={handleClick}>
                Recent services
            </Button>
            <Menu
                id="recent-services-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {sermonsToShow.map((service, index) => (
                    <MenuItem key={"YT" + service.youtubeVideoID} selected={index === selectedIndex} onClick={() => handleSermonMenuItemClick(index)}>
                        <ListItemText primary={service.topic} secondary={service.pastor + " · " + TimeUtils.shortDateDisplay(service.date)} />
                    </MenuItem>
                ))}

                <MenuItem key="OlderSermons" onClick={() => handleOlderSermonsItemClick()} disableRipple style={{backgroundColor: 'transparent'}}>
                    <Button size="small" color="primary" style={{paddingLeft: 0}}>Older services</Button>
                </MenuItem>
            </Menu>
        </div>
    );
}

RecentServicesMenu.propTypes = {
    services: PropTypes.arrayOf(PropTypes.shape({
        youtubeVideoID: PropTypes.string.isRequired,
        topic: PropTypes.string.isRequired,
        pastor: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })).isRequired,
    onSermonSelect: PropTypes.func.isRequired,
    onOlderSermonsSelect: PropTypes.func.isRequired,
}