import { createSlice } from '@reduxjs/toolkit'

//import all languages
import en from '../Language/en'
import es from '../Language/es'

const languages = {
    en,
    es
};

//Check if user has pre-set language settings - default to english
let defaultLanguage = window.navigator.language;

if(!languages[defaultLanguage]){
    defaultLanguage = "en";
}

//uses immer to make "mutable" state in reducers
export const i18n = createSlice({
    name: 'i18n',
    initialState: {
        languages: languages,
        i18nData: languages[defaultLanguage]
    },
    reducers: {
        changeLanguage: (state, action) => {
            let lang = action.payload.lang;
            if(state.languages[lang]){
                state.i18nData = state.languages[lang];
            }  
        }
    }
});

export const { changeLanguage } = i18n.actions

export default i18n.reducer