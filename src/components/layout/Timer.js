import React from 'react';

const Timer = props => {
	return (
		<h1
			className={props.isActive ? 'round-timer animate-timer' : 'round-timer'}
			style={{
				gridColumnStart: '5',
				gridColumnEnd: '6',
				marginTop: '3vh',
				fontWeight: 'bold',
				...props.style
			}}
			// onChange={props.updateTimer}
			onClick={props.startTimer}
		>
			{props.time}
		</h1>
	);
};

export default Timer;
