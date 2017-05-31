/**
 * Created by Radu on 5/29/2017.
 */
import React from 'react'
import './Chat.scss'
import {addNewUser} from "../../Store/ActionCreator";

export class Chat extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: 'ILYA'
        }
    }

    addNewName(event) {
        const title = event.target.value;
        this.setState({userName: title})
    }

    render() {
        const {dispatch, users} = this.props;
        return (
            <div className="MainMessage">
                <div className="allMessage">
                    {/*{users.map((i,key)=>*/}
                    {/*<p  key={key}>Hello {i}</p>*/}
                    {/*)}*/}
                    <div className="clearfix">
                        <blockquote className="me">Hi</blockquote>
                    </div>
                    <div className="clearfix">
                        <blockquote className="you">Hello</blockquote>
                    </div>
                    <div className="clearfix">
                        <blockquote className="me">wass up !</blockquote>
                    </div>
                    <div className="clearfix">
                        <blockquote className="you">Film was up u!</blockquote>
                    </div>
                    <div className="clearfix">
                        <blockquote className="me">Just outing</blockquote>
                    </div>
                    <div className="clearfix">
                        <blockquote className="you">Hello how do u do ?</blockquote>
                    </div>
                    <div className="clearfix">
                        <blockquote className="me">Yup great !</blockquote>
                    </div>
                </div>
                <div className="allTeam">
                    <div className="addUser">
                        <input type="text" onChange={this.addNewName.bind(this)}/>
                        <button onClick={(userName) => dispatch(addNewUser(this.state.userName))}>ADD NEW USER</button>
                    </div>
                    <div className="allUsers">
                        {users.map((i, key) =>
                            <p key={key}> {i}</p>
                        )}
                    </div>
                </div>


            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {user: state}
// };
// const mapDispatchToProps = (dispatch) => {
//     return { addNewUser: (name)=>dispatch({type:'ADD_NEW_USER', name})}
// };
export default Chat
