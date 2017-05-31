/**
 * Created by Radu on 5/31/2017.
 */
import {createStore } from 'redux';
import {ADD_NEW_USER} from "./constant";



const initState = {
    usersState:['ilya', 'tanya', 'ivan']
};
const reducerFunction = (state = initState, action) => {
    switch (action.type) {
        case ADD_NEW_USER:
            state = {...state, usersState: state.usersState.concat(action.payload)};
            console.log('STATE',state);
            break;
    }
    return state
};
const store = createStore(reducerFunction);
export default store
