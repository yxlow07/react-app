import React from 'react';

function FunctionClick(props) {

    function clickHandler() {
        console.log('Hello World')
    }

    return (
        <div>
            <button className="btn-outline-warning btn" onClick={clickHandler}>Click Me</button>
        </div>
    );
}

export default FunctionClick;