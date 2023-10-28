import Clock from './components/Clock';
import './App.css';
import SideEffectWithClass from './components/SideEffectWithClass';
import SideEffectWithFunction from './components/SideEffectWithFunction';

function App() {
	return (
		<div>
			{/* <Clock locale={'bn-BD'} /> */}
			{/* <SideEffectWithClass /> */}
			<SideEffectWithFunction />
		</div>
	);
}

export default App;
