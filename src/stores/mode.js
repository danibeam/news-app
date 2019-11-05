import React from 'react';

export const initialState = { 
    mode: 'light'
    // 
 };

 export const reducer = (state, action) => {
     switch(action.type) {
        case "changeMode":
            return {
                mode: state.mode === 'light' ? 'dark' : 'light'
            }
        //  
        default:
            return state;
     }
 } 

 export const Context = React.createContext();

