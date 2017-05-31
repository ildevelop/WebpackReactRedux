/**
 * Created by Radu on 5/29/2017.
 */
import React from 'react'
import './Chat.scss'
import {addNewUser} from "../../Store/ActionCreator";

export class Chat extends React.Component {
    constructor(){
        super();
        this.state ={
            userName: 'ILYA'
        }
    }
    addNewName(event){
        const title= event.target.value;
        this.setState({userName:title})
    }

    render() {
        const {dispatch ,users} = this.props;
        return (
            <div>
                <input type="text" onChange={this.addNewName.bind(this)}/>
                <button onClick={(userName)=> dispatch(addNewUser(this.state.userName))}>ADD NEW USER</button>
                {users.map((i,key)=>
                    <p key={key}>Hello {i}</p>

                )}

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
