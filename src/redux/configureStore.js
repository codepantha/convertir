import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import currenciesReducer from './currency/currency';

const finalReducer = combineReducers({ currenciesReducer });

const store = createStore(finalReducer, applyMiddleware(thunk, logger));

export default store;
