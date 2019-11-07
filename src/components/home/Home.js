import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Home.css';

import CountrySelector from './countrySelector/CountrySelector';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Headline from 'components/headline/Headline';
import LinearProgress from '@material-ui/core/LinearProgress';

import { Context } from "stores/store";

const Home = () => {

    const { store, dispatch } = useContext(Context)    

    // eslint-disable-next-line no-unused-vars
    const [hasErrors, setHasErrors] = useState(false);
    const [loading, setLoading] = useState(false);
    const [headlines, setHeadlines] = useState();

    const fetchHeadlines = (code) => {
        const country = code || store.country.code;
        fetch("https://newsapi.org/v2/top-headlines?country=" + country + "&apiKey=" + process.env.REACT_APP_NEWS_API_KEY)
            .then(res => res.json())
            .then(res => setHeadlines({ headlines: res.articles }))
            .catch(() => setHasErrors({ hasErrors: true }));
    }
    
    useEffect(() => {
        fetchHeadlines();
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
        }
    }));

    const classes = useStyles();

    const onChangeAutocomplete = (event, value) => {
        if(value !== null) {
            dispatch({ type: "changeCountry", payload: value});
            fetchHeadlines(value.code);
        }
    }
    
    return headlines ? (  
        <div className={classes.root}>
            <h1>
                Today's headlines for { store.country.label }
                <strong> ({
                    store.country.code.toUpperCase()
                })</strong>
            </h1>
            <CountrySelector onChange={onChangeAutocomplete.bind(this)} value={store.country} />
            <Grid container spacing={1}>
                {
                    headlines.headlines.map((headline, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Paper className={classes.paper}>
                                <Headline title={headline.title} author={headline.author} content={headline.content} key={index}></Headline>
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