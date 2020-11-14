import React from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { makeStyles } from '@material-ui/core/styles';

import i18n from '../i18n';

import Cookies from 'js-cookie';

import { SERVICE_COOKIE_KEY, COOKIE_EXPIRATION_DAYS } from '../constants/service-constants';

const useStyles = makeStyles((theme) => ({
    sectionPhone: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    },
}));

const services = [
    { code: 'cantonese', shortDesc: 'Cantonese service', desc: 'Cantonese' },
    { code: 'english', shortDesc: 'English service', desc: 'English' },
    { code: 'mandarin', shortDesc: 'Mandarin service', desc: 'Mandarin' },
];

const getServiceDesc = (code) => {
    let service = services.find(l => l.code === code);
    if (service) {
        return service.shortDesc;
    }

    service = services.find(l => l.code === 'english');
    if (service) {
        return service.shortDesc;
    }

    service = services[0];
    return service.shortDesc;
};

const guessServiceFromLanguage = (langCode) => {
    if (langCode === 'zf') {
        return 'mandarin';
    }

    if (langCode === 'zh') {
        return 'cantonese';
    }

    return 'english';
}

const getDefaultServiceCode = () => Cookies.get(SERVICE_COOKIE_KEY) || guessServiceFromLanguage(i18n.language);

export default function DefaultServiceMenu() {
    const classes = useStyles();

    const [defaultService, setDefaultService] = React.useState(getDefaultServiceCode());

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleServiceSelect = (event) => {
        const serviceCode = event.target.value;
        setDefaultService(serviceCode);

        Cookies.set(SERVICE_COOKIE_KEY, serviceCode, { expires: COOKIE_EXPIRATION_DAYS });
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
        <Button
            aria-label="Change default worship service"
            aria-controls="default-service-menu"
            aria-haspopup="true"
            color="inherit"
            variant="text"
            onClick={handleOpen}>
            <HomeIcon />
            <Box ml={1} mr={0.5} className={classes.sectionPhone}><Typography noWrap>{getServiceDesc(defaultService)}</Typography></Box>
            <ExpandMoreIcon />
        </Button>
        <Menu
            id="default-service-menu"
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}>

            <MenuItem disableFocusRipple disableRipple>
            <FormControl component="fieldset">
            <FormLabel component="legend">Worship service I attend:</FormLabel>
            <RadioGroup row aria-label="default service" name="defaultService" value={defaultService} onChange={handleServiceSelect}>
                {services.map((service, index) => (
                    <FormControlLabel value={service.code} control={<Radio />} label={service.desc} />
                ))}
            </RadioGroup>
            </FormControl>
            </MenuItem>
        </Menu>
        </div>
    );
}