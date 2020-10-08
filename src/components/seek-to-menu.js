import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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

SeekToMenu.propTypes = {
    seekPoints: PropTypes.arrayOf(PropTypes.shape({
        time: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    })).isRequired,
    onSeekTo: PropTypes.func.isRequired,
}