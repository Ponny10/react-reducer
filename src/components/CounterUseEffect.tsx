import { useEffect, useState } from 'react'

const MAX_NUM: number = 10;

const CounterUseEffect = () => {

	const [counter, setCounter] = useState<number>(5);

    useEffect(() => {

    }, [counter]);

    const handleClick = () => {
        if (counter > MAX_NUM - 1) return;
        setCounter((e) => e + 1);
    }
    

	return (
		<div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <h1>Counter: {counter}</h1>
            <button onClick={handleClick}>
                <strong>+1</strong>
            </button>
		</div>
	)
}

export default CounterUseEffect
