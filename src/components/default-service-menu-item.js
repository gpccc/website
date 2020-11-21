import React from 'react';
import PropTypes from 'prop-types';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import MenuItem from '@material-ui/core/MenuItem';

import { useTranslation } from 'react-i18next';

import Cookies from 'js-cookie';

import { SERVICE_COOKIE_KEY, COOKIE_EXPIRATION_DAYS } from '../constants/service-constants';

import PreferredServiceEnum from '../constants/preferred-service-enum';

const services = [
    PreferredServiceEnum.MANDARIN,
    PreferredServiceEnum.CANTONESE,
    PreferredServiceEnum.ENGLISH,
];

export default function DefaultServiceMenuItem({preferredWorshipService, setPreferredWorshipService}) {
    const { t } = useTranslation();

    const handleServiceSelect = (event) => {
        const serviceCode = event.target.value;
        setPreferredWorshipService(serviceCode);
        Cookies.set(SERVICE_COOKIE_KEY, serviceCode, { expires: COOKIE_EXPIRATION_DAYS });
    };

    return (
        <MenuItem disableRipple>
            <FormControl component="fieldset">
            <FormLabel component="legend">{t("Preferred worship service")}:</FormLabel>
            <RadioGroup row aria-label="default service" name="defaultService" value={preferredWorshipService} onChange={handleServiceSelect}>
                {services.map((service) => (
                    <FormControlLabel key={service} value={service} control={<Radio />} label={t(service)} />
                ))}
            </RadioGroup>
            </FormControl>
        </MenuItem>
    );
}

DefaultServiceMenuItem.propTypes = {
    preferredWorshipService: PropTypes.string.isRequired,
    setPreferredWorshipService: PropTypes.func.isRequired,
};