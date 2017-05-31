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
                    <Chat users={this.props.users} dispatch={this.props.dispatch}/>
                </div>

            </MuiThemeProvider>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersState
    }
};
export default connect(mapStateToProps)(App)