import React from 'react'

import './CountrySelector.css'
import Countries from './countryList'

import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import {makeStyles} from '@material-ui/core/styles'

// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11
function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
        .toUpperCase()
        .replace(/./g, char =>
          String.fromCodePoint(char.charCodeAt(0) + 127397),
        )
    : isoCode
}

const useStyles = makeStyles({
  autocomplete: {
    width: 300,
    // '& > button': {
    //     display: 'none'
    // }
  },
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
  button: {
    '& svg': {
      display: 'none',
    },
  },
})

const CountrySelector = props => {
  // onChangeInput.bind();
  const classes = useStyles()

  return (
    <Autocomplete
      className='autocomplete'
      value={props.value}
      // style={{ width: 300 }}
      // style={classes.autocomplete}
      options={Countries}
      onChange={props.onChange}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={option => option.label}
      renderOption={(option, {inputValue}) => {
        return (
          <div>
            <span>{countryToFlag(option.code)}</span>
            &nbsp;{option.label}
          </div>
        )
      }}
      renderInput={params => (
        <TextField
          {...params}
          label='Choose a country'
          variant='outlined'
          className={classes.button}
          fullWidth
          inputProps={{
            ...params.inputProps,
            autoComplete: 'disabled', // disable autocomplete and autofill
          }}
        />
      )}
    />
  )
}

export default CountrySelector
