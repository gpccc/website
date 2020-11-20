import React from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import MenuItem from '@material-ui/core/MenuItem';

import i18n from '../i18n';

import Cookies from 'js-cookie';

import { SERVICE_COOKIE_KEY, COOKIE_EXPIRATION_DAYS } from '../constants/service-constants';

const MANDARIN_SERVICE = 'Mandarin';
const CANTONESE_SERVICE = 'Cantonese';
const ENGLISH_SERVICE = 'English';

const services = [
    MANDARIN_SERVICE,
    CANTONESE_SERVICE,
    ENGLISH_SERVICE,
];

const guessServiceFromLanguage = (langCode) => {
    if (langCode === 'zf') {
        return MANDARIN_SERVICE;
    }

    if (langCode === 'zh') {
        return CANTONESE_SERVICE;
    }

    return ENGLISH_SERVICE;
};

const getDefaultServiceCode = () => Cookies.get(SERVICE_COOKIE_KEY) || guessServiceFromLanguage(i18n.language);

export default function DefaultServiceMenuItem() {
    const [defaultService, setDefaultService] = React.useState(getDefaultServiceCode());

    const handleServiceSelect = (event) => {
        const serviceCode = event.target.value;
        setDefaultService(serviceCode);

        Cookies.set(SERVICE_COOKIE_KEY, serviceCode, { expires: COOKIE_EXPIRATION_DAYS });
    };

    return (
        <MenuItem disableRipple>
            <FormControl component="fieldset">
            <FormLabel component="legend">Preferred worship service:</FormLabel>
            <RadioGroup row aria-label="default service" name="defaultService" value={defaultService} onChange={handleServiceSelect}>
                {services.map((service) => (
                    <FormControlLabel key={service} value={service} control={<Radio />} label={service} />
                ))}
            </RadioGroup>
            </FormControl>
        </MenuItem>
    );
}