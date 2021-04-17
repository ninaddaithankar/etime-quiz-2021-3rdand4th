import React from 'react';
import { Link } from 'react-router-dom';
import { isClickedVideo } from '../layout/IsClicked';

const VideoLink = (props) => {
	return (
		<div className='all-center'>
			<Link to={`/main/double/videoquestion/${props.number}`}>
				<div
					className='myvideo-link'
					style={
						isClickedVideo[props.number - 1]
							? { color: 'grey', ...props.style }
							: { color: 'lightgreen', ...props.style }
					}
					onClick={() => {
						isClickedVideo[props.number - 1] = true;
					}}
				>
					<span style={numberStyle}>
						{props.number}
						<br />
					</span>
					<i className='fas fa-film' style={iconStyle}></i>
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

export default VideoLink;
