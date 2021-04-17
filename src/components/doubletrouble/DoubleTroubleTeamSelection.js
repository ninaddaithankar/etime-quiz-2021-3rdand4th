import React from 'react';
import Title from '../layout/Title';
import Repeat from 'react-repeat-component';
import AudioLink from '../layout/AudioLink';
import VideoLink from '../layout/VideoLink';

const DoubleTroubleTeamSelection = () => {
	return (
		<div className='all-center'>
			<Title text='Double Trouble' showBack={true} backLink='/main' />
			<Repeat times={8} className='grid-8' style={{ marginTop: '13vh' }}>
				{(i) => <VideoLink key={i + 1} number={i + 1} />}
			</Repeat>

			<Repeat times={8} className='grid-8' style={{ marginTop: '5vh' }}>
				{(i) => <AudioLink key={i + 1} number={i + 1} />}
			</Repeat>
		</div>
	);
};

export default DoubleTroubleTeamSelection;
