import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './Store/store'
import {Provider} from "react-redux";
import './index.scss';
import {createStore, applyMiddleware} from "redux";
import reduxThunk from 'redux-thunk'
import {CONNECTED_NEW_USER} from "./Store/constant";
import {addNewUser} from "./Store/ActionCreator";
const loggerMiddleware = (store) => {
    return (next) => {
        return (action) => {
            console.log('trigger', action);
            let result = next(action);
            console.log('store after action', store.getState());
            return result
        }
    }
};
const checkUserServerMW = store => next => action => {
    if (action.type === CONNECTED_NEW_USER) {
        let fakeRequest = () => new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, 2500)
        });
        console.log('checkUserServerMW');
        fakeRequest().then(() => {
            store.dispatch(addNewUser('vasily'))
        })
    }
    return next(action)
};

const store = createStore(rootReducer, applyMiddleware(reduxThunk,loggerMiddleware, checkUserServerMW));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);