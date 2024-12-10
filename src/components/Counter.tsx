import { useState } from 'react'

interface CounterProps {
    initialValue: number;
}

const Counter = ({initialValue = 15}: CounterProps) => {

	const [counter, setCounter] = useState(initialValue);

	return (
		<div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <h1>Counter: {counter}</h1>
            <button onClick={() => setCounter((val) => val + 1)}>
                <strong>+</strong>
            </button>
		</div>
	)
}

export default Counter
