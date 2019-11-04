import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Home.css';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import Headline from 'components/headline/Headline';
import LinearProgress from '@material-ui/core/LinearProgress';

const Home = () => {

    // eslint-disable-next-line no-unused-vars
    const [hasErrors, setHasErrors] = useState(false);
    // const [loading, setLoading] = useState(true);
    const [headlines, setHeadlines] = useState();
    
    useEffect(() => {
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=" + process.env.REACT_APP_NEWS_API_KEY)
            .then(res => res.json())
            .then(res => setHeadlines({ headlines: res.articles }))
            .catch(() => setHasErrors({ hasErrors: true }));
    }, []);

    useEffect(() => {
        // console.info(headlines);
    }, [headlines]);

    const useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
          width: '90%',
          margin: 'auto'
        },
        paper: {
          padding: theme.spacing(2),
        //   textAlign: 'center',
        //   color: theme.palette.text.secondary,
        },
    }));

    const classes = useStyles();
    
    return headlines ? (  
        <div className={classes.root}>
            <Grid container spacing={1}>
                {
                    headlines.headlines.map((headline, index) => (
                        <Grid item xs={12} md>
                            <Paper className={classes.paper}>
                                <Headline title={headline.title} content={headline.content} key={index}></Headline>
                            </Paper>
                        </Grid>
                    ))

                } 
            </Grid>
        </div>

    ) : 
    (
        <LinearProgress color="secondary" />
    )

}

export default Home;