import React from 'react';

export const initialState = { 
    mode: 'light',
    country: 'us'
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
                country: action.value
            }
        //  
        default:
            return state;
     }
 } 

 export const Context = React.createContext();

