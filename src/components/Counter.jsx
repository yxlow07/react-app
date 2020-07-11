import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }
    }

    increment(){
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log('Callback value:', this.state.count)
        // })
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }
    
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <button className="btn btn-outline-warning" onClick={() => this.incrementFive()}>
                    Subscribe
                </button>
                <div>Subscribers: {this.state.count}</div>
            </div>
        )
    }
}

export default Counter
