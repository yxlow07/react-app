import React, {Component} from 'react';

class ClassClick extends Component {
    clickHandler(){
        console.log('Hello World')
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler} className="btn btn-outline-danger">Click me</button>
            </div>
        );
    }
}

export default ClassClick;