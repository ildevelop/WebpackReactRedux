import React, {Component} from 'react';
import Header from "./Components/Header/Header";
import {connect} from "react-redux";
import Chat from "./Components/Chat/Chat";
import {MuiThemeProvider} from "material-ui";
import Webrtc from './Components/Chat/WebRtc'
class App extends Component {
    render() {
        var object = {
            roomname : "jsfiddletest",
            /*provide a valid url for signalmaster otherwise this won't work*/
            signalmasterUrl: "127.0.0.1"
        };
        console.log("OBJ",object);
        return (
            <MuiThemeProvider>
                <div>
                    <Header/>
                    <Chat users={this.props.users} message={this.props.message} dispatch={this.props.dispatch}/>
                    <Webrtc obj = {object}/>
                </div>

            </MuiThemeProvider>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.reducerFunctionUser.usersState,
        message: state.reducerFunctionMessage
    }
};
export default connect(mapStateToProps)(App)