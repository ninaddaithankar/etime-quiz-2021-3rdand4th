import React from 'react';
import Title from '../layout/Title';
import { Link } from 'react-router-dom';
import { questionNo } from '../layout/IsClicked';
const TeamSelection = props => {
	return (
		<div className='all-center'>
			<Title text='Tie Breaker' showBack={true} backLink='/main' />
			<div
				className='grid-3'
				style={{ marginTop: '5vh', gridColumnGap: '7rem' }}
			>
				<div>
					<Link
						to='/main/tiebreaker/question/1'
						style={{
							color: questionNo[0] >= 1 ? 'grey' : 'cyan',
							fontSize: '13rem',
							padding: '2rem'
						}}
					>
						<i
							className='fas fa-dice-one'
							onClick={() => {
								if (questionNo[0] < 1) questionNo[0]++;
								console.log(questionNo[0]);
							}}
						></i>
					</Link>
				</div>
				<div>
					<Link
						to='/main/tiebreaker/question/2'
						style={{
							color: questionNo[1] >= 1 ? 'grey' : 'cyan',
							fontSize: '13rem',
							padding: '2rem'
						}}
					>
						<i
							className='fas fa-dice-two'
							onClick={() => {
								if (questionNo[1] < 1) questionNo[1]++;
							}}
						></i>
					</Link>
				</div>
				<div>
					<Link
						to='/main/tiebreaker/question/3'
						style={{
							color: questionNo[2] >= 1 ? 'grey' : 'cyan',
							fontSize: '13rem',
							padding: '2rem'
						}}
					>
						<i
							className='fas fa-dice-three'
							onClick={() => {
								if (questionNo[2] < 1) questionNo[2]++;
							}}
						></i>
					</Link>
				</div>
				<div>
					<Link
						to='/main/tiebreaker/question/4'
						style={{
							color: questionNo[3] >= 1 ? 'grey' : 'cyan',
							fontSize: '13rem',
							padding: '2rem'
						}}
					>
						<i
							className='fas fa-dice-four'
							onClick={() => {
								if (questionNo[3] >= 1) questionNo[3]++;
							}}
						></i>
					</Link>
				</div>
				<div>
					<Link
						to='/main/tiebreaker/question/5'
						style={{
							color: questionNo[4] >= 1 ? 'grey' : 'cyan',
							fontSize: '13rem',
							padding: '2rem'
						}}
					>
						<i
							className='fas fa-dice-five'
							onClick={() => {
								if (questionNo[4] < 1) questionNo[4]++;
							}}
						></i>
					</Link>
				</div>
				<div>
					<Link
						to='/main/tiebreaker/question/6'
						style={{
							color: questionNo[5] >= 1 ? 'grey' : 'cyan',
							fontSize: '13rem',
							padding: '2rem'
						}}
					>
						<i
							className='fas fa-dice-six'
							onClick={() => {
								if (questionNo[5] < 1) questionNo[5]++;
							}}
						></i>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TeamSelection;
