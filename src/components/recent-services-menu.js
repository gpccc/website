import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';

import ListItemText from '@material-ui/core/ListItemText';

import { useTranslation } from 'react-i18next';

import DateTimeUtils from '../modules/datetime-utils';

import { NUM_RECENT_SERVICES_TO_SHOW, SERVICE_DURATION_IN_SECONDS } from '../constants/service-constants';

function getServicesToShow(services) {
    let numPastServices = 0;
    let numStreamingServices = 0;

    services.forEach((service) => {
        let secondsElapsedSince = DateTimeUtils.getSecondsElapsedSince(service.date);
        if (secondsElapsedSince <= SERVICE_DURATION_IN_SECONDS) {
            numStreamingServices += 1;
        } else {
            numPastServices += 1;
        }
    });

    const numServicesToShow = numStreamingServices + Math.min(numPastServices, NUM_RECENT_SERVICES_TO_SHOW);
    return services.slice(0, numServicesToShow);
}

export default function RecentServicesMenu({services, onServiceSelect, onOlderServicesSelect, youTubePlayerReady}) {
    const { t } = useTranslation();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleServiceMenuItemClick = (index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
        onServiceSelect(services[index]);
    };

    const handleOlderServicesItemClick = () => {
        setAnchorEl(null);
        onOlderServicesSelect();
    };
      
    const handleClose = () => {
        setAnchorEl(null);
    };

    const servicesToShow = getServicesToShow(services);

    return (
        <div>
            <Button size="small" color="primary" aria-controls="recent-services-menu" aria-haspopup="true" onClick={handleClick} disabled={!youTubePlayerReady}>
                {t('Recent services')}
            </Button>
            <Menu
                id="recent-services-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {servicesToShow.map((service, index) => (
                    <MenuItem key={"YT" + service.youtubeVideoID} selected={index === selectedIndex} onClick={() => handleServiceMenuItemClick(index)}>
                        <ListItemText primary={t(service.message)} secondary={t(service.pastor) + " · " + DateTimeUtils.shortServiceDateDisplay(service.date)} />
                    </MenuItem>
                ))}

                <Divider />

                <MenuItem key="OlderServices" onClick={() => handleOlderServicesItemClick()}>
                    {t('Older services')}
                </MenuItem>
            </Menu>
        </div>
    );
}

RecentServicesMenu.propTypes = {
    services: PropTypes.arrayOf(PropTypes.shape({
        youtubeVideoID: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        pastor: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
    })).isRequired,
    onServiceSelect: PropTypes.func.isRequired,
    onOlderServicesSelect: PropTypes.func.isRequired,
    youTubePlayerReady: PropTypes.bool.isRequired,
};