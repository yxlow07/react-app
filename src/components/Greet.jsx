import React from "react";

/*function Greet() {
    return <h1>Hello YX</h1>;
}*/

const Greet = props => {
    const {name, greeting} = props
    return (
        <React.Fragment>
            <h1>{greeting} {name}</h1>
        </React.Fragment>
    )
}

export default Greet