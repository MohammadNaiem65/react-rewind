import { useEffect, useState } from 'react';

export default function SideEffectWithFunction() {
	// local states
	const [count, setCount] = useState(0);
	const [text, setText] = useState({ t: '', count: 0 });

	useEffect(() => {
		console.log('rendered');
		document.title = `Count - ${count}`;
	}, [count]);

	// print each time this component render
	console.log(text);

	return (
		<div>
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
		</div>
	);
}
