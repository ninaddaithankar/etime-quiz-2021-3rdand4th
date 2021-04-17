import React from 'react';

const QuestionBox = props => {
	return (
		<div
			id='question_box'
			className='all-center textbox'
			style={{ marginTop: '1vh', ...props.style }}
		>
			<span className='animate-textbox'>{props.question}</span>
		</div>
	);
};

export default QuestionBox;
