import React from 'react';
import { Link } from 'react-router-dom';
import { isClickedAudio } from '../layout/IsClicked';

const AudioLink = (props) => {
	return (
		<div className='all-center'>
			<Link to={`/main/double/audioquestion/${props.number}`}>
				<div
					className='audio-link'
					style={
						isClickedAudio[props.number - 1]
							? { color: 'grey', ...props.style }
							: { color: 'cyan', ...props.style }
					}
					onClick={() => {
						isClickedAudio[props.number - 1] = true;
					}}
				>
					<span style={numberStyle}>
						{props.number}
						<br />
					</span>
					<i className='fas fa-headset' style={iconStyle}></i>
				</div>
			</Link>
		</div>
	);
};

const numberStyle = {
	fontWeight: 'bold',
	fontSize: '2rem',
};

const iconStyle = { fontSize: '7vw' };

export default AudioLink;
