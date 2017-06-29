/**
 * Created by Radu on 5/29/2017.
 */
import React from 'react'
import './Chat.scss'
import {addMessage, addNewUser} from "../../Store/ActionCreator";
import {FlatButton, TextField} from "material-ui";


export class Chat extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: null,
            newMessage: null,
        }
    }

    // componentDidMount(){
    //     this.setState({
    //         userName: null
    //     })
    // }
    addNewMessage(event){
        const title = event.target.value;
        // console.log(event.target.value);
        this.setState({newMessage: title})
    }
    addNewName(event) {
        const title = event.target.value;
        this.setState({userName: title})
    }
    search(){
        const BASE_URL= "http://api.fixer.io/latest?base=USD";
        fetch(BASE_URL,{method:'GET'}).then(r => r.json()).then(j => console.log("json",j))
    }
    render() {
        const {dispatch, users, message} = this.props;
        return (
            <div className="MainMessage">
                <div className="allMessage">
                    {message.map((i, key) => {
                            var d = new Date(i.datetime);
                            return (
                                <div key={key} className="messageYou">
                                    <span className="messageTime"><i>{`${d.getMonth()}/${d.getDay()} ${d.getHours()}:${d.getMinutes()}`}</i> </span>
                                    <p className="you"><b>{i.author}</b>: {i.text}</p>
                                </div>
                            )
                        }
                    )}
                    <div className="messageMe">
                        <span className="messageTime"><i>05/25 17:12</i></span>
                        <p className="you"><b>ilya</b>: Hi its Me</p>
                    </div>
                    <div className="chat_input">
                        <TextField hintText="Sey Hello !!"
                                   onChange={this.addNewMessage.bind(this)}
                                   onKeyPress={event => {if(event.key==='Enter'){dispatch(addMessage('maxim', this.state.newMessage, Date.now()))}}}
                        />
                        <div className="iconSend" onClick={() => {this.search();
                                                dispatch(addMessage('maxim', this.state.newMessage, Date.now()))}}> </div>
                    </div>
                </div>
                <div className="allTeam">
                    <div className="addUser">
                        <TextField
                            hintText="Ilya"
                            floatingLabelText="User name"
                            onChange={this.addNewName.bind(this)}
                            onKeyPress={event => {if(event.key==='Enter'){dispatch(addNewUser(this.state.userName))}}}
                        /><br />
                        <FlatButton label="ADD NEW USER" primary={true}
                                    onClick={() => dispatch(addNewUser(this.state.userName))}/>

                    </div>
                    <div className="allUsers">
                        {users.map((i, key) =>
                            <p  className="iconSmile" key={key}>{i}</p>
                        )}
                    </div>
                </div>


            </div>
        )
    }
}

export default Chat
