import React from 'react';

class Clock extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			date: new Date(),
		};
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState({
				date: new Date(),
			});
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render() {
		return (
			<h1>
				<span>
					{this.state.date.toLocaleTimeString(this.props.locale)}
				</span>
			</h1>
		);
	}
}

export default Clock;
