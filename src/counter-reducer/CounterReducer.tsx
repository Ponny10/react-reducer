import { useReducer } from 'react';
import { counterReducer } from './state/counterReducer';
import { CounterState } from './interfaces/Counter';
import { IncreaseBy, resetCounter } from './actions/actions';

// Declarar el state
const State: CounterState = {
    changes: 0,
    counter: 0,
    previous: 0,
}

const CounterReducer = () => {

	const [counter, dispatch] = useReducer(counterReducer, State);

    const handleClick = (value: number) => {
        dispatch(IncreaseBy(value));
    }

	return (
		<div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            
            <h1>Counter with Reducer</h1>
            <hr />

            <h2>Counter: {counter.counter}</h2>
            <h2>Previous: {counter.previous}</h2>
            <h2>Changes: {counter.changes}</h2>

            <button onClick={() => handleClick(1)}>
                <strong>+1</strong>
            </button>
            <br />
            <button onClick={() => handleClick(5)}>
                <strong>+5</strong>
            </button>
            <br />
            <button onClick={() => dispatch(resetCounter())}>
                <strong>Reset</strong>
            </button>
		</div>
	)
}

export default CounterReducer;
