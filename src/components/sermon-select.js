import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import DoneIcon from '@material-ui/icons/Done';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 221,
    fontSize: 13,
  },
  button: {
    fontSize: 13,
    width: '100%',
    textAlign: 'left',
    paddingBottom: 8,
    fontWeight: 500,
    color: '#3f51b5',
    '& span': {
      width: '100%',
    },
    '& svg': {
      width: 16,
      height: 16,
    },
  },
  tag: {
    marginTop: 3,
    height: 20,
    padding: '.15em 4px',
    fontWeight: 600,
    lineHeight: '15px',
    borderRadius: 2,
  },
  popper: {
    border: '1px solid rgba(27,31,35,.15)',
    boxShadow: '0 3px 12px rgba(27,31,35,.15)',
    borderRadius: 3,
    width: 300,
    zIndex: 1,
    fontSize: 13,
    color: '#586069',
    backgroundColor: '#f6f8fa',
  },
  header: {
    borderBottom: '1px solid #e1e4e8',
    padding: '8px 10px',
    fontWeight: 600,
  },
  inputBase: {
    padding: 10,
    width: '100%',
    borderBottom: '1px solid #dfe2e5',
    '& input': {
      borderRadius: 4,
      backgroundColor: theme.palette.common.white,
      padding: 8,
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      border: '1px solid #ced4da',
      fontSize: 14,
      '&:focus': {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  paper: {
    boxShadow: 'none',
    margin: 0,
    color: '#586069',
    fontSize: 13,
  },
  option: {
    minHeight: 'auto',
    alignItems: 'flex-start',
    padding: 8,
    '&[aria-selected="true"]': {
      backgroundColor: 'transparent',
    },
    '&[data-focus="true"]': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  popperDisablePortal: {
    position: 'relative',
  },
  iconSelected: {
    width: 17,
    height: 17,
    marginRight: 5,
    marginLeft: -2,
  },
  color: {
    width: 14,
    height: 14,
    flexShrink: 0,
    borderRadius: 3,
    marginRight: 8,
    marginTop: 2,
  },
  text: {
    flexGrow: 1,
  },
  close: {
    opacity: 0.6,
    width: 18,
    height: 18,
  },
}));

export default function SermonSelect() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(labels[0]);
  const [pendingValue, setPendingValue] = React.useState(null);

  const handleClick = (event) => {
    setPendingValue(value);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event, reason) => {
    if (reason === 'toggleInput') {
      return;
    }
    setValue(pendingValue);
    if (anchorEl) {
      anchorEl.focus();
    }
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'github-label' : undefined;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Button disableRipple size="small" color="primary" onClick={handleClick}>
          Recent sermons
        </Button>
      </div>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        className={classes.popper}
      >
        <Autocomplete
          open
          onClose={handleClose}
          classes={{
            paper: classes.paper,
            option: classes.option,
            popperDisablePortal: classes.popperDisablePortal,
          }}
          value={pendingValue}
          onChange={(event, newValue) => {
            setPendingValue(newValue);
          }}
          disableCloseOnSelect
          disablePortal
          renderTags={() => null}
          noOptionsText="No labels"
          renderOption={(option, { selected }) => (
            <React.Fragment>
              <DoneIcon
                className={classes.iconSelected}
                style={{ visibility: selected ? 'visible' : 'hidden' }}
              />
              {option.topic === "OLDER SERMONS" ?
                <div className={classes.button}>
                    {option.topic}
                </div>
                :
                <div className={classes.text}>
                    <b>{option.topic}</b>
                    <br />
                    {option.pastor} &middot; {option.date}
                </div>
              }
            </React.Fragment>
          )}
          options={labels}
          getOptionLabel={(option) => option.topic}
          renderInput={(params) => (
            <InputBase
              ref={params.InputProps.ref}
              inputProps={params.inputProps}
              autoFocus
              className={classes.inputBase}
            />
          )}
        />
      </Popper>
    </React.Fragment>
  );
}

const labels = [
  {
    youtubeVideoID: "EWQ__H_85bE",
    topic: "Ezra 4: Rebuilding Opposed",
    pastor: "Pastor Larry Lee",
    date: "2020-10-04"
  },
  {
    youtubeVideoID: "uqmaE9JKGtc",
    topic: "Ezra 3: First Comes Sacrifice",
    pastor: "Pastor Larry Lee",
    date: "2020-09-27"
  },
  {
    youtubeVideoID: "GA94lEQkKo0",
    topic: "Exodus 4:10-17: Talent",
    pastor: "Pastor Steven Chin",
    date: "2020-09-20"
  },
  {
    youtubeVideoID: "Q5x9gZWP6tM",
    topic: "Ezra 2: The Remnant",
    pastor: "Pastor Jerry Lin",
    date: "2020-09-13"
  },
  {
    youtubeVideoID: "OLDER SERMONS",
    topic: "OLDER SERMONS",
    pastor: "",
    date: ""
  },
];