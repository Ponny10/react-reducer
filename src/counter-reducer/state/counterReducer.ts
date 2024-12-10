import { CounterAction } from "../actions/actions";
import { CounterState } from "../interfaces/Counter";

// Declarar el Reducer
export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
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
