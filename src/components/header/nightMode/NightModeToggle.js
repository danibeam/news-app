import React from 'react'

import './NightModeToggle.css'

import {FormControlLabel, Switch} from '@material-ui/core'
import {NightsStay} from '@material-ui/icons'

const NightModeToggle = props => {
  return (
    <React.Fragment>
      <FormControlLabel
        control={
          <Switch aria-label='night mode switch' onClick={props.changeMode} />
        }
      />
      <NightsStay color='secondary' />
    </React.Fragment>
  )
}

export default NightModeToggle
