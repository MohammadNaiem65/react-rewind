import { useEffect, useState } from 'react';

export default function SideEffectWithFunction({ setShow }) {
	// local states
	const [count, setCount] = useState(0);
	const [timer, setTimer] = useState(new Date());
	const [text, setText] = useState({ t: '', count: 0 });

	useEffect(() => {
		console.log('print each time count updates');
		document.title = `Count - ${count}`;
	}, [count]);

	useEffect(() => {
		console.log('run only when componentDidMount with empty dependency');
		const runningTimer = setInterval(tick, 1000);

		// do cleanup to prevent memory leaking
		return () => {
			console.log('print when unmounted');

            clearInterval(runningTimer)
		};
	}, []);

	// make the clock dynamic
	const tick = () => {
		console.log('print each time clicking');
		setTimer(new Date());
	};

	return (
		<div>
			<h1>{timer.toLocaleTimeString()}</h1>
			<input
				type='text'
				value={text.t}
				onChange={(e) =>
					setText((prev) => ({
						t: e.target.value,
						count: prev.count + 1,
					}))
				}
			/>

			<button onClick={() => setCount((prev) => prev + 1)}>Add</button>
			<button onClick={() => setShow(false)}>Hide</button>
		</div>
	);
}
