import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        width: 480,
        margin: 'auto',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    photo: {
        width: '100%',
    },
}));

export default function StaffCard() {
    const classes = useStyles();

    return (
    <Card className={classes.root}>
        <CardMedia
            className={classes.photo}
            image="/images/rev-jerry-lin.jpg"
            title="Pastor Jerry Lin"
        />
        <div className={classes.details}>
            <CardContent className={classes.content}>
                <Typography variant="h5">
                    <Box textAlign="center">
                        Jerry Lin
                    </Box>
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Favorite verse is Genesis 2:18, as this verse played a key role in God&apos;s call on his life.
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Ministry Focus:
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    English college & young adult
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Any questions, please contact jerrylin@gpccc.org
                </Typography>
            </CardContent>
        </div>
    </Card>
    );
}