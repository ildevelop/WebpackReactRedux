/**
 * Created by Radu on 5/29/2017.
 */
import React from 'react'
import './Chat.scss'
import {addNewUser} from "../../Store/ActionCreator";
import {FlatButton, TextField} from "material-ui";


export class Chat extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: ''
        }
    }

    // componentDidMount(){
    //     this.setState({
    //         userName: null
    //     })
    // }
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
                        <blockquote className="me">Hi its me</blockquote>
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

                </div>
                <div className="allTeam">
                    <div className="addUser">
                        <TextField
                            hintText="Ilya"
                            floatingLabelText="User name"
                            onChange={this.addNewName.bind(this)}
                        /><br />
                        <FlatButton label="ADD NEW USER" primary={true} onClick={() => dispatch(addNewUser(this.state.userName))}/>

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
