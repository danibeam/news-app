import React from 'react';

import Countries from './countryList';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11
function countryToFlag(isoCode) {
    return typeof String.fromCodePoint !== 'undefined'
      ? isoCode.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397))
      : isoCode;
  }
  
  const useStyles = makeStyles({
    option: {
        fontSize: 15,
        '& > span': {
            marginRight: 10,
            fontSize: 18,
        },
    },
  });

  const onChangeInput = (ev) => {
    console.info(ev.tarjet.value);
  }

const CountrySelector = (props) => {
    // onChangeInput.bind();
    const classes = useStyles();

    return (
        <Autocomplete
        style={{ width: 300 }}
        options={Countries}
        classes={{
            option: classes.option
        }}
        autoHighlight
        getOptionLabel={option => option.label}
        renderOption={option => (
            <React.Fragment>
                <span>{countryToFlag(option.code)}</span>
                {option.label} ({option.code})
            </React.Fragment>
        )}
        renderInput={params => (
            <TextField
                {...params}
                label="Choose a country"
                variant="outlined"
                fullWidth
                onChange={onChangeInput.bind(this)}
                inputProps={{
                    ...params.inputProps,
                    autoComplete: 'disabled', // disable autocomplete and autofill
                }}
            />
        )}
        />
    );
}

export default CountrySelector;