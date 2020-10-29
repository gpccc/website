import React from 'react';

import ButtonBase from '@material-ui/core/ButtonBase';
import LanguageIcon from '@material-ui/icons/Translate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
    const [activeLanguage, setActiveLanguage] = React.useState('en');

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleLanguageClick = (lngCode) => {
        setActiveLanguage(lngCode);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
    <div>
    <ButtonBase
        aria-label="Change language"
        aria-controls="language-menu"
        aria-haspopup="true"
        edge="start"
        onClick={handleOpen}>
        <LanguageIcon />
        <span>{getLanguageDesc(activeLanguage)}</span>
        <ExpandMoreIcon />
    </ButtonBase>
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
            <MenuItem key={index} onClick={() => handleLanguageClick(language.code)}>{language.desc}</MenuItem>
        ))}
    </Menu>
    </div>
  );
}