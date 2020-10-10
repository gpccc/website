import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import TelegramIcon from '@material-ui/icons/Telegram';
import GroupIcon from '@material-ui/icons/Group';
import MessageIcon from '@material-ui/icons/Message';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import CardGiftcard from '@material-ui/icons/CardGiftcard';

import SeekPointType from '../constants/seek-point-type';

export default function SeekToMenu({seekPoints, onSeekTo}) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setAnchorEl(null);
        onSeekTo(seekPoints[index]);
    };
      
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button size="small" color="primary" aria-controls="seek-to-menu" aria-haspopup="true" onClick={handleClick} disabled={seekPoints.length === 0}>
                Seek to
            </Button>
            <Menu
                id="seek-to-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {seekPoints.map((seekPoint, index) => (
                    <MenuItem
                        key={seekPoint.time}
                        dense={true}
                        onClick={(event) => handleMenuItemClick(event, index)}
                    >
                        <ListItemIcon style={{minWidth: '28px'}}>
                            {seekPoint.type===SeekPointType.BEGINNING && <PlayArrowIcon fontSize="small" />}
                            {seekPoint.type===SeekPointType.BIBLE_VERSE && <MenuBookIcon fontSize="small" />}
                            {seekPoint.type===SeekPointType.PRAISE_SONG && <MusicNoteIcon fontSize="small" />}
                            {seekPoint.type===SeekPointType.PRAYER && <TelegramIcon fontSize="small" />}
                            {seekPoint.type===SeekPointType.COMMUNION && <GroupIcon fontSize="small" />}
                            {seekPoint.type===SeekPointType.MESSAGE && <MessageIcon fontSize="small" />}
                            {seekPoint.type===SeekPointType.ANNOUNCEMENTS && <AnnouncementIcon fontSize="small" />}
                            {seekPoint.type===SeekPointType.BENEDICTION && <CardGiftcard fontSize="small" />}
                        </ListItemIcon>
                        <ListItemText primary={seekPoint.label} />
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

SeekToMenu.propTypes = {
    seekPoints: PropTypes.arrayOf(PropTypes.shape({
        time: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    })).isRequired,
    onSeekTo: PropTypes.func.isRequired,
}