import React, {Component} from 'react';
import Header from "./Components/Header/Header";
import {connect} from "react-redux";
import Chat from "./Components/Chat/Chat";


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Chat users={this.props.users} dispatch={this.props.dispatch}/>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersState
    }
};
export default connect(mapStateToProps)(App)