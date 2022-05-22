import React, { useState } from 'react';

function Exercise4() {
    const [count, setCount] = useState(0);

    return (
        <div className="center flex-column" >
            <p>Button has been clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default Exercise4;
