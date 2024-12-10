import { useReducer } from 'react';

// Declarar la interfaz del State
interface CounterState {
    counter: number;
    previous: number;
    changes: number;
}

// Declarar el state
const State: CounterState = {
    changes: 0,
    counter: 0,
    previous: 0,
}

// Declarar los tipos de acciones
type CounterAction = {type: 'increaseBy', payload: {value: number}} | {type: 'reset'};

// Declarar el Reducer
const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
    switch (action.type) {
        case 'increaseBy':

            console.log('Valor que llega al state = ', action.payload.value);
            return state = {
                counter: state.counter + action.payload.value,
                changes: state.changes + 1,
                previous: state.counter,
            }
        case 'reset':
            return {
                changes: 0,
                counter: 0,
                previous: 0,
            };
        default:
            return state;
    }
}


const CounterReducer = () => {

	const [counter, dispatch] = useReducer(counterReducer, State);

    const handleClick = (val: number) => {
        dispatch({type: 'increaseBy', payload: {value: val}})
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
            <button onClick={() => dispatch({type: 'reset'})}>
                <strong>Reset</strong>
            </button>
		</div>
	)
}

export default CounterReducer;
