import React, { Component } from "react";

class Welcome extends Component {
    render() {
        const {name, greeting} = this.props;
        // const {state1, state2} = this.state;
        return (
            <h1>{greeting} {name}</h1>
        );
    }
}
export default Welcome