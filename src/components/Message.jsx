import React, { Component } from "react";

class Message extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Welcome visitor',
            count: 0
        }
    }

    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing!',
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button className="btn btn-outline-info" onClick={ () => this.changeMessage() }>Subscribe</button>
                <div>Subscribers: {this.state.count}</div>
            </div>
        )
    }
}
export default Message