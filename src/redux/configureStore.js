import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import currenciesReducer from './currency/currency';
import ratesReducer from './converter/converter';

const finalReducer = combineReducers({ currenciesReducer, ratesReducer });

const store = createStore(finalReducer, applyMiddleware(thunk, logger));

export default store;
