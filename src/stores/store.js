import React from 'react';

export const initialState = { 
    mode: 'light',
    country: { code: 'us', label: 'United States' }
    // 
 };

 export const reducer = (state, action) => {
     switch(action.type) {
        case "changeMode":
            return {
                mode: state.mode === 'light' ? 'dark' : 'light'
            }
        case "changeCountry":
            return {
                country: action.payload
            }
        //  
        default:
            return state;
     }
 } 

 export const Context = React.createContext();

