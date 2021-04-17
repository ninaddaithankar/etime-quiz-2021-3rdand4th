import React, { Component } from 'react';
import Timer from '../layout/Timer';
import QuestionBox from '../layout/QuestionBox';
import { questions } from './RapidFireQuestions';
import { Link } from 'react-router-dom';
import correctaudio from '../../assets/audio/mcq/correctsound.wav';
import wrongaudio from '../../assets/audio/mcq/wrongsound.wav';

class RapidFireQuestion extends Component {
	state = {
		time: 60,
		choice: this.props.match.params.choice_no - 1,
		question_no: 0,
		showAnswers: false,
		isActive: false
	};

	componentDidMount() {
		this.timerId = setInterval(() => this.tick(), 1000);
		this.setState({
			isActive: true
		});
	}

	tick = () => {
		this.setState({
			time: this.state.time - 1
		});
		if (this.state.time === 0) {
			clearInterval(this.timerId);
			this.setTimeUp();
		}
	};

	componentWillUnmount() {
		if (this.timerId) {
			clearInterval(this.timerId);
		}
	}

	nextQuestion = () => {
		if (this.state.question_no < questions[this.state.choice].length - 1) {
			console.log(this.state.question_no, questions[this.state.choice].length);
			this.setState({
				question_no: this.state.question_no + 1
			});
		} else {
			document.getElementById('sound').src = correctaudio;
			this.sound.play();
			document.getElementById('question_box').innerHTML =
				'Congrats!<br>You completed all questions in time!';
			if (this.timerId) clearInterval(this.timerId);
			this.setState({ showAnswers: true, isActive: false });
		}
	};

	setTimeUp = () => {
		document.getElementById('sound').src = wrongaudio;
		this.sound.play();
		document.getElementById('question_box').innerHTML = 'TIME UP!';
		this.setState({ showAnswers: true, isActive: false });
	};

	render() {
		const { choice, question_no } = this.state;
		return (
			<div className='all-center'>
				<Timer
					style={{ marginTop: '5vh' }}
					time={this.state.time}
					isActive={this.state.isActive}
				/>
				<QuestionBox
					style={{
						marginTop: '7vh',
						height: '45vh',
						fontSize: '3rem',
						wordSpacing: '3px'
					}}
					question={questions[choice][question_no].question}
				/>
				{this.state.showAnswers && (
					<Link
						to={{
							pathname: `/main/rapidfire/answers/${this.state.choice}`,
							state: { questionCount: this.state.question_no }
						}}
					>
						<i
							className='fa fa-chevron-circle-right'
							style={{
								color: 'white',
								fontSize: '6rem',
								gridColumnStart: '9',
								gridColumnEnd: '10',
								marginTop: '10vh',
								cursor: 'pointer'
							}}
						/>
					</Link>
				)}
				{!this.state.showAnswers && (
					<i
						className='fa fa-chevron-circle-right'
						style={{
							fontSize: '6rem',
							gridColumnStart: '9',
							gridColumnEnd: '10',
							marginTop: '10vh',
							cursor: 'pointer'
						}}
						onClick={this.nextQuestion}
					/>
				)}
				<audio
					id='sound'
					ref={ref => {
						this.sound = ref;
					}}
					src={correctaudio}
					preload='auto'
				/>
			</div>
		);
	}
}

export default RapidFireQuestion;
