import React from 'react';

import Button from '@material-ui/core/Button';
import LanguageIcon from '@material-ui/icons/Translate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import i18n from '../i18n';

import Cookies from 'js-cookie';

import { LANG_COOKIE_KEY } from '../constants/service-constants';

const languages = [
    { code: 'zf', desc: '中文 (正体字/繁体字)' },
    { code: 'zh', desc: '中文 (正體字/繁體字)' },
    { code: 'en', desc: 'English' },
];

const getLanguageDesc = (code) => {
    let language = languages.find(l => l.code === code);
    if (language) {
        return language.desc;
    }

    language = languages.find(l => l.code === 'en');
    if (language) {
        return language.desc;
    }

    language = languages[0];
    return language.desc;
};

export default function LanguageMenu() {
    const [activeLanguage, setActiveLanguage] = React.useState(i18n.language);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleLanguageClick = (lngCode) => {
        setActiveLanguage(lngCode);
        setAnchorEl(null);

        Cookies.set(LANG_COOKIE_KEY, lngCode);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    React.useEffect(
        () => {
            i18n.changeLanguage(activeLanguage);
        }, [activeLanguage]
    );

    return (
        <div>
        <Button
            aria-label="Change language"
            aria-controls="language-menu"
            aria-haspopup="true"
            color="inherit"
            variant="text"
            onClick={handleOpen}>
            <LanguageIcon />
            <Box ml={1} mr={0.5}>{getLanguageDesc(activeLanguage)}</Box>
            <ExpandMoreIcon />
        </Button>
        <Menu
            id="language-menu"
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
            {languages.map((language, index) => (
                <MenuItem key={index} selected={activeLanguage===language.code} onClick={() => handleLanguageClick(language.code)}>{language.desc}</MenuItem>
            ))}
        </Menu>
        </div>
    );
}