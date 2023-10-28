import { useCallback, useMemo, useState } from 'react';
import './App.css';
import Title from './components/Title';
import ShowCount from './components/ShowCount';
import Button from './components/Button';

function App() {
	// states
	const [countOne, setCountOne] = useState(0);
	const [countTwo, setCountTwo] = useState(0);

	// functions
	const increaseCountByOne = useCallback(() => {
		// use useCallback hook to memoize functions
		setCountOne((prev) => prev + 1);
	}, []);
	const increaseCountByFive = useCallback(() => {
		setCountTwo((prev) => prev + 5);
	}, []);

	const evenOrOdd = useMemo(() => {
		for (let i = 0; i < 1000000000; i++) {
			// do nothing
		}

		return countOne % 2 === 0;
	}, [countOne]);

	return (
		<div>
			<Title />
			<ShowCount count={countOne} title={'Counter 1'} />
			<Button handleClick={increaseCountByOne}>Increment by One</Button>
			<span>{evenOrOdd ? 'Even' : 'Odd'}</span>
			<hr />
			<ShowCount count={countTwo} title={'Counter 2'} />
			<Button handleClick={increaseCountByFive}>Increment by Five</Button>
		</div>
	);
}

export default App;
