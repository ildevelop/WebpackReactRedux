import React, {Component} from 'react';
import Header from "./Components/Header/Header";
import {connect} from "react-redux";
import Chat from "./Components/Chat/Chat";
import {MuiThemeProvider} from "material-ui";

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Header/>
                    <Chat users={this.props.users} message={this.props.message} dispatch={this.props.dispatch}/>
                </div>

            </MuiThemeProvider>
        );
    }
}


const mapStateToProps = (state) => {
    console.log(state.reducerFunctionMessage);
    return {
        users: state.reducerFunctionUser.usersState,
        message: state.reducerFunctionMessage
    }
};
export default connect(mapStateToProps)(App)