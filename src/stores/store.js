import React from 'react';

export const initialState = { 
    mode: localStorage.getItem('mode') || 'light',
    country: { 
        code: localStorage.getItem('country-code') || 'us', 
        label: localStorage.getItem('country-label') || 'United States' 
    },
    loading: false
    // 
 };

 export const reducer = (state, action) => {
     switch(action.type) {
        case "changeMode":
            return {
                ...state,
                mode: state.mode === 'light' ? 'dark' : 'light'
            }
        case "changeCountry":
            return {
                ...state,
                country: action.payload
            }
        case "changeLoading":
            return {
                ...state,
                loading: action.payload
            }
        //  
        default:
            return state;
     }
 } 

 export const Context = React.createContext();

