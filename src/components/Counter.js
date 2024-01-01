import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="flex items-center space-x-4 mb-6">
            <button
                className="border border-black px-4 py-2 rounded-md focus:outline-none"
                onClick={handleIncrement}
            >
                +
            </button>
            <span className="border border-black p-2">{count}</span>
            <button
                className="border border-black px-4 py-2 rounded-md focus:outline-none"
                onClick={handleDecrement}
                disabled={count === 0}
            >
                -
            </button>
        </div>
    );
};

export default Counter;
