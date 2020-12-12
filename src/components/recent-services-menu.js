import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';

import ListItemText from '@material-ui/core/ListItemText';

import ServiceVideoShape from '../constants/service-video-shape';

import { useTranslation } from 'react-i18next';

import DateTimeUtils from '../modules/datetime-utils';
import ServiceVideoUtils from '../modules/service-videos-utils';

import { NUM_RECENT_SERVICES_TO_SHOW } from '../constants/service-constants';

function getServicesToShow(services) {
    let numPastServices = 0;
    let numStreamingServices = 0;

    services.forEach((service) => {
        let secondsElapsedSince = DateTimeUtils.getSecondsElapsedSince(service.date);
        if (ServiceVideoUtils.isLiveStream(secondsElapsedSince)) {
            numStreamingServices += 1;
        } else {
            numPastServices += 1;
        }
    });

    const numServicesToShow = numStreamingServices + Math.min(numPastServices, NUM_RECENT_SERVICES_TO_SHOW);
    return services.slice(0, numServicesToShow);
}

function getServicesWithSeekPointsForDemo(services) {
    const videoIDsWithSeekPointsToDemo = [
        'Li5Pd6IXhE4', 'AYadEf1YjVk', // 9/27/20 and 10/4/2020 Mandarin
        'AlrtccfApe8', // 9/27/20 (combined with Mandarin) and 10/4/2020 Cantonese
        'EWQ__H_85bE', 'uqmaE9JKGtc', // 9/27/20 and 10/4/2020 English
    ];

    let servicesToDemo = [];
    videoIDsWithSeekPointsToDemo.forEach(videoID => {
        const serviceToDemo = services.find(s => s.youtubeVideoID === videoID);
        if (typeof serviceToDemo !== 'undefined')
            servicesToDemo.push(serviceToDemo);
    });

    return servicesToDemo;

}

export default function RecentServicesMenu({services, onServiceSelect, onOlderServicesSelect, youTubePlayerReady}) {
    const { t } = useTranslation();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleServiceMenuItemClick = (index, youtubeVideoID) => {
        setSelectedIndex(index);
        setAnchorEl(null);

        const service = services.find(s => s.youtubeVideoID === youtubeVideoID);
        if (typeof service !== 'undefined') {
            onServiceSelect(service);
        }
    };

    const handleOlderServicesItemClick = () => {
        setAnchorEl(null);
        onOlderServicesSelect();
    };
      
    const handleClose = () => {
        setAnchorEl(null);
    };

    const servicesToShow = getServicesToShow(services);
    const servicesWithSeekPoints = getServicesWithSeekPointsForDemo(services);

    function isJointService(serviceIndex, servicesToShow) {
        if (servicesToShow.length <= 1) {
            return false;
        }

        const serviceDate = DateTimeUtils.getDateComponent(servicesToShow[serviceIndex].date);
        if (serviceIndex > 0) {
            const prevServiceDate = DateTimeUtils.getDateComponent(servicesToShow[serviceIndex-1].date);
            if (serviceDate.getTime() === prevServiceDate.getTime()) {
                return true;
            }
        }

        if (serviceIndex !== servicesToShow.length-1) {
            const nextServiceDate = DateTimeUtils.getDateComponent(servicesToShow[serviceIndex+1].date);
            if (serviceDate.getTime() === nextServiceDate.getTime()) {
                return true;
            }
        }

        return false;
    }

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
                    <MenuItem key={"YT" + service.youtubeVideoID} selected={index === selectedIndex} onClick={() => handleServiceMenuItemClick(index, service.youtubeVideoID)}>
                        {
                        service.message !== "" && service.pastor !== "" &&
                        <ListItemText primary={t(service.message)} secondary={t(service.pastor) + " · " + DateTimeUtils.shortServiceDateTimeDisplay({datetime: service.date, showTimeToo: false})} />
                        }
                        {
                        service.message !== "" && service.pastor === "" &&
                        <ListItemText primary={t(service.message)} secondary={DateTimeUtils.shortServiceDateTimeDisplay({datetime: service.date, showTimeToo: false})} />
                        }
                        {
                        service.message === "" && service.pastor !== "" &&
                        <ListItemText primary={DateTimeUtils.shortServiceDateTimeDisplay({datetime: service.date, showTimeToo: false}) + " service"} secondary={t(service.pastor)} />
                        }
                        {
                        service.message === "" && service.pastor === "" &&
                        <ListItemText primary={DateTimeUtils.shortServiceDateTimeDisplay({datetime: service.date, showTimeToo: false}) + " service"} />
                        }
                    </MenuItem>
                ))}

                <Divider />

                {servicesWithSeekPoints.map((service, index) => {
                    index = index + servicesToShow.length;
                    return (
                        <MenuItem key={"YT" + service.youtubeVideoID} selected={index === selectedIndex} onClick={() => handleServiceMenuItemClick(index, service.youtubeVideoID)}>
                            <ListItemText primary={t(service.message)} secondary={t(service.pastor) + " · " + DateTimeUtils.shortServiceDateTimeDisplay({datetime: service.date, showTimeToo: false})} />
                        </MenuItem>
                    );
                })}

                {servicesWithSeekPoints.length > 0 &&
                    <Divider />
                }

                <MenuItem key="OlderServices" onClick={() => handleOlderServicesItemClick()}>
                    {t('Older services')}
                </MenuItem>
            </Menu>
        </div>
    );
}

RecentServicesMenu.propTypes = {
    services: PropTypes.arrayOf(ServiceVideoShape).isRequired,
    onServiceSelect: PropTypes.func.isRequired,
    onOlderServicesSelect: PropTypes.func.isRequired,
    youTubePlayerReady: PropTypes.bool.isRequired,
};