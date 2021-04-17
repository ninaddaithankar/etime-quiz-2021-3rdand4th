import React from 'react';

const SingleAnswer = props => {
	const { question, answer } = props.questionSet;
	return (
		<React.Fragment>
			<div
				className='grid-12'
				style={{
					fontFamily: 'Cardo',
					fontSize: '1.5rem',
					borderTop: '1px dotted white',
					padding: '0.5rem'
				}}
			>
				<span
					style={{
						gridColumnStart: '1',
						gridColumnEnd: '8',
						textAlign: 'left'
					}}
				>
					{question}
				</span>
				<span>
					<i className='fa fa-arrow-right'></i>
				</span>
				<span
					style={{
						gridColumnStart: '9',
						gridColumnEnd: '13'
					}}
				>
					{answer}
				</span>
			</div>
		</React.Fragment>
	);
};

export default SingleAnswer;
