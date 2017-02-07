import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

// import reducer from '../reducers/index';
import reducer from '../reducers/tvReducer';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
// const store = createStore(reducer, (applyMiddleware(ReduxPromise)
// ));
// const store = createStore(reducer);
const store = createStoreWithMiddleware(reducer);

export default store;
