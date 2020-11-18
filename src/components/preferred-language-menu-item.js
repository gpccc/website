import React from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import MenuItem from '@material-ui/core/MenuItem';

import i18n from '../i18n';

import { useTranslation } from 'react-i18next';

import Cookies from 'js-cookie';

import { LANG_COOKIE_KEY, COOKIE_EXPIRATION_DAYS } from '../constants/service-constants';

const languages = [
    { code: 'zf', desc: '简体中文' },
    { code: 'zh', desc: '繁體中文' },
    { code: 'en', desc: 'English' },
];

export default function PreferredLanguageMenuItem() {
    const [preferredLanguage, setPreferredLanguage] = React.useState(i18n.language);
    const { t } = useTranslation();

    const handleLanguageSelect = (event) => {
        const lngCode = event.target.value;
        setPreferredLanguage(lngCode);

        Cookies.set(LANG_COOKIE_KEY, lngCode, { expires: COOKIE_EXPIRATION_DAYS });
    };

    React.useEffect(
        () => {
            i18n.changeLanguage(preferredLanguage);

            document.title = t('GP full name');
        }, [preferredLanguage]
    );

    return (
        <MenuItem disableRipple>
            <FormControl component="fieldset">
            <FormLabel component="legend">Preferred language:</FormLabel>
            <RadioGroup row aria-label="preferred language" name="preferredLanguage" value={preferredLanguage} onChange={handleLanguageSelect}>
                {languages.map((language) => (
                    <FormControlLabel key={language.code} value={language.code} control={<Radio />} label={language.desc} />
                ))}
            </RadioGroup>
            </FormControl>
        </MenuItem>
    );
}