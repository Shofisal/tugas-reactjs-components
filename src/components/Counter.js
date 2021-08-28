import {useState} from 'react';
function Counter () {
    const [ count, setCount ] = useState(0)
    const increment = () => {
        setCount (count + 1)
    }

    const decrement = () => {
        if (count <= 0) {
            setCount(count)
        }
        else {
            setCount(count - 1)
        }
    }
    return (
        <div>
        <button onClick={decrement}>-</button>
        <h3 style={{display : "inline"}}>{count}</h3>
        <button onClick= {increment}>+</button>
        </div>
    )


}

export default Counter;