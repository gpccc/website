import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import PastorJerry from '../images/rev-jerry-lin.jpg';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        maxWidth: 480,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    photo: {
        objectFit: 'contain',
        marginLeft: 16,
    },
}));

export default function StaffCardSameAspectRatio() {
    const classes = useStyles();

    return (
    <Card className={classes.root}>
        <CardMedia
            className={classes.photo}
            component="img"
            image={PastorJerry}
            title="Pastor Jerry Lin"
        />
        <div className={classes.details}>
            <CardContent className={classes.content}>
                <Typography variant="h5">
                    <Box textAlign="center">
                        Jerry Lin
                    </Box>
                </Typography>
                <Typography variant="body2">
                    Favorite verse is&nbsp;
                    <Tooltip title={'Then the Lord God said, "It is not good that the man should be alone; I will make him a helper fit for him."'} arrow enterTouchDelay={25}>
                        <Link href="#" onClick={(event) => event.preventDefault()}>Genesis 2:18</Link>
                    </Tooltip>
                    , as this verse played a key role in God&apos;s call on his life.<br/>
                    <br/>
                    Ministry Focus:<br/>
                    English college & young adult<br/>
                    <br/>
                    Any questions, please contact
                    <Link href="mailto:jerrylin@gpccc.org"> jerrylin@gpccc.org</Link>
                </Typography>
            </CardContent>
        </div>
    </Card>
    );
}