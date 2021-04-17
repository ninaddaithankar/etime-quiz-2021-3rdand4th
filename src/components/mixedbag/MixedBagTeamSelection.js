import React from 'react';
import Repeat from 'react-repeat-component';
import Title from '../layout/Title';
import DoorLink from '../layout/DoorLink';

const MixedBagTeamSelection = () => {
	return (
		<div className='all-center'>
			<Title showBack={true} backLink={'/main'} text='Mixed Bag' />

			<Repeat times={14} className='grid-7' style={{ marginTop: '10vh' }}>
				{i => <DoorLink key={i + 1} number={i + 1} />}
			</Repeat>
		</div>
	);
};

export default MixedBagTeamSelection;
