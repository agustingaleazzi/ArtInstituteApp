import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import obrasApp from './reducers/reducers';
import thunk from 'redux-thunk';

const store = configureStore(
        {reducer: obrasApp}
    )

export default store;
