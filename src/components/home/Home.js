/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useContext} from 'react'
import {Helmet} from 'react-helmet'

import {makeStyles} from '@material-ui/core/styles'
import './Home.css'

import CountrySelector from './countrySelector/CountrySelector'
import CategorySelector from './categorySelector/CategorySelector'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
// import { Typography } from '@material-ui/core';
import Headline from 'components/headline/Headline'
import LinearProgress from '@material-ui/core/LinearProgress'

import {Context} from 'stores/store'

const Home = () => {
  const {store, dispatch} = useContext(Context)

  // eslint-disable-next-line no-unused-vars
  const [hasErrors, setHasErrors] = useState(false)
  const [loading, setLoading] = useState(true)
  // const [headlines, setHeadlines] = useState()
  const [headlines, setHeadlines] = useState({headlines: []})
  const [category, setCategory] = useState()

  const fetchHeadlines = code => {
    // setHeadlines(null)
    setLoading(true)
    setHeadlines({headlines: []})
    const country = code || store.country.code
    let apiCategory
    category !== undefined
      ? (apiCategory = '&category=' + category)
      : (apiCategory = '')
    fetch(
      'https://newsapi.org/v2/top-headlines?country=' +
        country +
        apiCategory +
        '&apiKey=' +
        process.env.REACT_APP_NEWS_API_KEY,
    )
      .then(res => res.json())
      .then(res => {
        setHeadlines({headlines: res.articles})
        setLoading(false)
      })
      .catch(() => setHasErrors({hasErrors: true}))
  }

  useEffect(() => {
    fetchHeadlines()
  }, [])

  useEffect(() => {
    if (loading) {
      LoadingTransition()
    }
  }, [loading])

  useEffect(() => {
    // console.info(headlines);
  }, [headlines])

  useEffect(() => {
    fetchHeadlines()
  }, [category])

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      width: '90%',
      margin: 'auto',
    },
    paper: {
      padding: theme.spacing(2),
      //   textAlign: 'center',
      //   color: theme.palette.text.secondary,
    },
    top: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '10px',
      marginBottom: '10px',
    },
    // categories: {
    //   display: 'flex',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // },
  }))

  const classes = useStyles()

  const onChangeAutocomplete = (event, value) => {
    if (value !== null) {
      dispatch({type: 'changeCountry', payload: value})
      fetchHeadlines(value.code)
    }
  }

  const handleOnClickCategory = value => {
    setCategory(value)
  }

  const LoadingTransition = () => {
    return <LinearProgress color='secondary' />
  }

  return (
    <React.Fragment>
      {loading ? <LoadingTransition /> : ''}
      <div className={classes.root}>
        <Helmet>
          <title>News App | Today's headlines</title>
          <meta
            name='description'
            content='Headlines News. Your news app. Headlines by country. News by topic'
          />
          <link
            rel='canonical'
            href='https://newsapp-daniel-belmonte.netlify.com/'
          />
        </Helmet>
        <div className={classes.top}>
          <h1>
            Today's headlines for {store.country.label}
            <strong> ({store.country.code.toUpperCase()})</strong>
          </h1>
          <CountrySelector
            onChange={onChangeAutocomplete.bind(this)}
            value={store.country}
          />
        </div>
        {/* <div className={classes.categories}> */}
        <div className='categories'>
          <CategorySelector
            onClick={handleOnClickCategory.bind(this)}
            selected={category}
          />
        </div>
        <Grid container spacing={1}>
          {headlines.headlines?.map((headline, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper className={classes.paper}>
                <Headline
                  title={headline.title}
                  author={headline.author}
                  description={headline.description}
                  url={headline.url}
                  sourceName={headline.source.name}
                  key={index}
                ></Headline>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </React.Fragment>
  )
}

export default Home
