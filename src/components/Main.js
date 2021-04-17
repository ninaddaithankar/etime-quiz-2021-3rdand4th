import React from 'react';
import { Link } from 'react-router-dom';
import './MainScreen.css';
import Title from './layout/Title';

const Main = () => {
	return (
		<div className='all-center'>
			<Title
				text='Rounds'
				showBack={true}
				backLink='/'
				style={{ fontSize: '2rem', marginTop: '8vh' }}
			/>
			<div className='grid-2' style={{ marginTop: '7vh' }}>
				<Link to='main/teams' className='rectangle-card'>
					Take Your Pick
				</Link>
				<Link to='/main/mixedbag' className='rectangle-card'>
					Mixed Bag
				</Link>
				<Link to='/main/double' className='rectangle-card'>
					Double Trouble
				</Link>
				<Link to='/main' className='rectangle-card'>
					Rapid Fire
				</Link>
			</div>
		</div>
	);
};

export default Main;
