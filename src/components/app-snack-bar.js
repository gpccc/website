import React from 'react';
import PropTypes from 'prop-types';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default function AppSnackbar({msg}) {  
  const [open, setOpen] = React.useState(true);
  React.useEffect(
    () => { setOpen(true); },
    [msg]
  );

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  return (
    <Snackbar
    anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
    }}
    open={open}
    autoHideDuration={5000}
    onClose={handleClose}
    message={msg}
    action={
        <React.Fragment>
        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon fontSize="small" />
        </IconButton>
        </React.Fragment>
    }
    />
  );
}

AppSnackbar.propTypes = {
  msg: PropTypes.string.isRequired,
}