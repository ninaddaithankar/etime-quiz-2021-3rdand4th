import React from 'react';
import Title from '../layout/Title';
import SingleAnswer from './SingleAnswer';
import { questions } from './RapidFireQuestions';

class RapidFireAnswer extends React.Component {
	choice = this.props.match.params.choice_no;
	render() {
		const { questionCount } = this.props.location.state;
		return (
			<div className='all-center'>
				<Title
					text='Answers'
					style={{ fontSize: '1.7rem', marginTop: '3vh' }}
					showBack={true}
					backLink='/main/rapidfire'
				/>
				<div style={{ width: '80vw', marginTop: '2vh' }}>
					{questions[this.choice].slice(0, questionCount + 1).map(question => (
						<SingleAnswer questionSet={question} />
					))}
				</div>
			</div>
		);
	}
}

export default RapidFireAnswer;
