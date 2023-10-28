import React from 'react';

class SideEffectWithClass extends React.Component {
	// local states
	state = {
		count: 0,
		date: new Date(),
	};

	componentDidMount() {
		// update the title for the first time after mounting
		document.title = `Clicked ${this.state.count} times`;

		// run the clock
		setInterval(this.tick, 1000);
	}

	componentDidUpdate() {
		document.title = `Clicked ${this.state.count} times`;
	}

	// increase count
	addCount = () => {
		this.setState({
			count: this.state.count + 1,
		});
	};

	// make the clock work
	tick = () => {
		this.setState({
			date: new Date(),
		});
	};

	render() {
		const { date, count } = this.state;
		return (
			<div>
				<h1>{date.toLocaleTimeString()}</h1>
				<h2>{count}</h2>
				<button onClick={this.addCount}>Add</button>
			</div>
		);
	}
}

export default SideEffectWithClass;
