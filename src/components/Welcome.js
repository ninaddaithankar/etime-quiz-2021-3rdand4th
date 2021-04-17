import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomeScreen.css';

const Welcome = () => {
	return (
		<div className='all-center'>
			<div className='left-circle'></div>
			<div
				className='raised-card'
				style={{ marginTop: '15vh', color: 'white', fontWeight: '600' }}
			>
				<span className='all-center title-heading' style={{ fontSize: '3rem' }}>
					Welcome to
					<br />
				</span>
				<span
					className='all-center title-heading'
					style={{ color: '#fffdda', fontSize: '7rem' }}
				>
					E-TIME QUIZ
					<br />
				</span>
				<span className='all-center title-heading' style={{ fontSize: '3rem' }}>
					Inter-School
					<br />
				</span>
			</div>
			<Link to='/main' className='btn capital' style={{ marginTop: '20vh' }}>
				Start
			</Link>
		</div>
	);
};

export default Welcome;
