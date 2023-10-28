import React from 'react';

function ShowCount({ count, title }) {
	console.log(`Rendering ${title}...`);

	return (
		<p>
			{title} is {count}
		</p>
	);
}

// First step optimization
export default React.memo(ShowCount);
