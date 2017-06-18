/**
 * Created by Radu on 5/31/2017.
 */
import {combineReducers} from 'redux';
import {ADD_NEW_USER, ADD_NEW_MESSAGE, CONNECTED_NEW_USER} from './constant';



const initState = {
    usersState:['ilya', 'tanya', 'ivan']
};
const messageState = [
    {
        text : 'Hello',
        datetime: 1496425795290,
        author: 'ilya'
    },
    {
        text : 'Hello ilya im ivan',
        datetime: 1496296167171,
        author: 'ivan'
    },
    {
        text : 'Hi ivan',
        datetime: 1498294167171,
        author: 'tanya'
    }

];
const reducerFunctionUser = (state = initState, action) => {
    switch (action.type) {
        case ADD_NEW_USER:
            state = {...state, usersState: state.usersState.concat(action.payload)};
            break;
        case CONNECTED_NEW_USER:
            state = {...state, usersState: state.usersState.concat(action.payload)};
            break;
    }
    return state
};
const reducerFunctionMessage = (state = messageState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            const user = {
                text : action.text,
                datetime: action.time,
                author: action.payload
            };
            state =  state.concat(user);
            break;
    }
    return state
};


export default combineReducers({
    reducerFunctionUser,
    reducerFunctionMessage
})
