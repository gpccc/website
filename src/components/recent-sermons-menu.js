import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function RecentSermonsMenu({sermons, onSermonSelect, onOlderSermonsSelect}) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleSermonMenuItemClick = (index) => {
        setAnchorEl(null);
        onSermonSelect(sermons[index]);
    };

    const handleOlderSermonsItemClick = () => {
        setAnchorEl(null);
        onOlderSermonsSelect();
    };
      
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button size="small" color="primary" aria-controls="recent-sermons-menu" aria-haspopup="true" onClick={handleClick}>
                Recent sermons
            </Button>
            <Menu
                id="recent-sermons-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {sermons.map((sermon, index) => (
                    <MenuItem key={"YT" + sermon.youtubeVideoID} onClick={() => handleSermonMenuItemClick(index)}>
                        <ListItemText primary={sermon.topic} secondary={sermon.pastor + " · " + sermon.date} />
                    </MenuItem>
                ))}

                <MenuItem key="OlderSermons" onClick={() => handleOlderSermonsItemClick()} disableRipple style={{backgroundColor: 'transparent'}}>
                    <Button size="small" color="primary" style={{paddingLeft: 0}}>Older sermons</Button>
                </MenuItem>
            </Menu>
        </div>
    );
}

RecentSermonsMenu.propTypes = {
    sermons: PropTypes.arrayOf(PropTypes.shape({
        youtubeVideoID: PropTypes.string.isRequired,
        topic: PropTypes.string.isRequired,
        pastor: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })).isRequired,
    onSermonSelect: PropTypes.func.isRequired,
    onOlderSermonsSelect: PropTypes.func.isRequired,
}