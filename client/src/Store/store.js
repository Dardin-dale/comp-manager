import { configureStore } from '@reduxjs/toolkit'
import i18nReducer from '../services/localizationService';

export default configureStore({
  reducer: {
    i18n: i18nReducer
  }
})