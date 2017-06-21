/**
 * Created by Radu on 5/28/2017.
 */
import React from 'react'
import './Header.scss'
export class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            counter: 0
        }
    }
    render(){
        return (
            <div className="header1">
                <h1 onClick={()=>this.setState({counter: this.state.counter+1})}>Hello {this.state.counter}</h1>
            </div>
            )


    }
}
export default Header