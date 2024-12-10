import { useState } from 'react'

interface CounterProps {
    initialValue: number;
}

interface StateProps {
    counter: number;
    clicks: number
}

const CounterBy = ({initialValue = 15}: CounterProps) => {

	const [{clicks, counter}, setCounter] = useState<StateProps>({
        counter: initialValue,
        clicks: 0,
    });

    const operation = (val: number) => {
        setCounter(({clicks, counter}) => ({
            counter: counter + val,
            clicks: clicks + 1,
        }));
    }

	return (
		<div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <h1>{`CounterBy: ${counter}`}</h1>
            <h1>{`CounterBy: ${clicks}`}</h1>
            <button onClick={() => operation(1)}><strong>+1</strong></button>
            <button onClick={() => operation(5)}><strong>+5</strong></button>
		</div>
	)
}

export default CounterBy
