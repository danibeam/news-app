import React from 'react'

import categoriesList from './categoriesList'

import {Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  category: {
    margin: '5px',
  },
})

const CategorySelector = props => {
  const classes = useStyles()
  return (
    <React.Fragment>
      {categoriesList.map((category, index) => (
        <Button
          variant='contained'
          color={category === props.selected ? 'secondary' : 'default'}
          onClick={() => props.onClick(category)}
          key={index}
          className={classes.category}
        >
          {category}
        </Button>
      ))}
    </React.Fragment>
  )
}

export default CategorySelector
