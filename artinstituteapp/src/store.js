import {configureStore } from '@reduxjs/toolkit';
import obrasApp from './reducers/reducers';

const store = configureStore(
        {reducer: obrasApp}
    )

export default store;
