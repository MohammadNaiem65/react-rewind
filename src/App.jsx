import Clock from './components/Clock';
import './App.css';
import SideEffectWithClass from './components/SideEffectWithClass';
import SideEffectWithFunction from './components/SideEffectWithFunction';
import { useState } from 'react';

function App() {
	const [show, setShow] = useState(true);
	return (
		<div>
			{/* <Clock locale={'bn-BD'} /> */}
			{/* <SideEffectWithClass /> */}
			{show && <SideEffectWithFunction setShow={setShow} />}
		</div>
	);
}

export default App;
