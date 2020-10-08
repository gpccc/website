import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const seekPoints = [
    {time: "00:00:00", label: "Beginning"},
    {time: "00:10:57", label: "Opening prayer"},
    {time: "00:12:35", label: "O Come to the Altar"},
    {time: "00:18:02", label: "Psalm 18:2-6, 16-17, 46, 49"},
    {time: "00:19:20", label: "Rock of Ages (You will Stand)"},
    {time: "00:23:46", label: "Gracefully Broken"},
    {time: "00:28:54", label: "The Wonderful Cross"},
    {time: "00:34:17", label: "Congregational prayer"},
    {time: "00:36:01", label: "Communion"},
    {time: "00:44:23", label: "Message"},
    {time: "01:23:01", label: "Announcements"},
    {time: "01:24:45", label: "Benediction"},
];

export default function SeekToMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setAnchorEl(null);
        console.info('seek point', seekPoints[index])
    };
      
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button size="small" color="primary" aria-controls="seek-to-menu" aria-haspopup="true" onClick={handleClick}>
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
                        onClick={(event) => handleMenuItemClick(event, index)}
                    >
                        {seekPoint.label}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}