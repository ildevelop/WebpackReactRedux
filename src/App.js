import React, {Component} from 'react';
import Header from "./Components/Header/Header";
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Chat from "./Components/Chat/Chat";

const userState = ['ilya', 'tanya', 'ivan'];
const reducer = (state = userState, action) => {
    if (action.type === 'ADD_NEW_USER') {
        console.log(action);
        return state.concat(action.name);
    }
    return state
};
const store = createStore(reducer);
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Header/>
                    <Chat />
                </div>
            </Provider>
        );
    }
}



export default App