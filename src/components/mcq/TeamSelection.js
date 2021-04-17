import React from 'react';
import Title from '../layout/Title';
import RoundCardsSelection from '../layout/RoundCardsSelection';

import '../../App.css';

const TeamSelection = props => {
	return (
		<div className='all-center'>
			<Title
				style={{ marginTop: '5vh', fontSize: '2.5rem' }}
				text={props.round}
				backLink='/main'
				showBack={true}
			/>

			<RoundCardsSelection link={props.link} />
		</div>
	);
};

export default TeamSelection;
