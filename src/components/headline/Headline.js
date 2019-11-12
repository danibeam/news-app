import React from 'react'
import './Headline.css'

import {Typography, Button} from '@material-ui/core'

const Article = props => {
  return (
    <div className='headline'>
      <Typography variant='h4'>{props.title}</Typography>
      <Typography variant='subtitle2'>{props.author}</Typography>
      <Typography variant='body1'>
        {props.description ? props.description : 'No description provided.'}
      </Typography>
      <a href={props.url} target='_blank' rel='noopener noreferrer'>
        <Button variant='text' color='secondary' fullWidth={true}>
          {props.sourceName
            ? 'Read source - ' + props.sourceName
            : 'Read source'}
        </Button>
      </a>
    </div>
  )
}

export default Article
