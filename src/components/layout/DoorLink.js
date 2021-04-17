import React from 'react';
import { Link } from 'react-router-dom';
import { isClickedMixedBag } from './IsClicked';

const DoorLink = props => {
	return (
		<div className='all-center'>
			<Link
				className='diamond'
				to={`/main/mixedbag/question/${props.number}`}
				style={
					isClickedMixedBag[props.number - 1]
						? { color: 'grey', ...props.style }
						: { color: 'cyan', ...props.style }
				}
			>
				<div
					style={{ margin: '0.3rem' }}
					onClick={() => {
						isClickedMixedBag[props.number - 1] = true;
					}}
				>
					<span style={numberStyle}>
						{props.number}
						<br />
					</span>
					<i className='far fa-gem' style={doorStyle}></i>
				</div>
			</Link>
		</div>
	);
};

const numberStyle = {
	fontWeight: 'bold',
	fontSize: '3rem'
};

const doorStyle = { fontSize: '7vw' };

export default DoorLink;
