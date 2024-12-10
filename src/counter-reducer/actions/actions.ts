// Declarar los tipos de acciones
export type CounterAction = 
    {
        type: 'increaseBy',
        payload: {value: number}
    } |
    {
        type: 'reset'
    };


// Declarar las acciones, también conocidad como disparadores.

export const resetCounter = ():CounterAction => ({type: 'reset'});
export const IncreaseBy = (value: number):CounterAction => ({type: 'increaseBy', payload: {value}});