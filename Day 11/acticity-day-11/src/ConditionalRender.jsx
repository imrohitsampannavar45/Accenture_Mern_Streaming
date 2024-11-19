import React from 'react';


function ConditionalRender({ flag }) {
    return (
        <div>
            {flag === 1 ? (
                <button>Button</button>
            ) : flag === 2 ? (
                <label>
                    <input type="checkbox" />
                    Checkbox
                </label>
            ) : (
                <p></p>
            )}
        </div>
    );
};



export default ConditionalRender;