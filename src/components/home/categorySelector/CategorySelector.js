import React from 'react'

import categoriesList from './categoriesList'

import {Button} from '@material-ui/core'

const CategorySelector = props => {
  return (
    <React.Fragment>
      {categoriesList.map((category, index) => (
        <Button
          variant='contained'
          color={category === props.selected ? 'secondary' : 'default'}
          onClick={() => props.onClick(category)}
          key={index}
        >
          {category}
        </Button>
      ))}
    </React.Fragment>
  )
}

export default CategorySelector
