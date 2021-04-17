import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Question.css';
import QuestionBox from '../layout/QuestionBox';
import Title from '../layout/Title';
import Timer from '../layout/Timer';
import correctaudio from '../../assets/audio/mcq/correctsound.wav';
import wrongaudio from '../../assets/audio/mcq/wrongsound.wav';

import { questions } from './McqQuestions';

class Question extends Component {
	state = {
		choice_no: 0,
		group_no: 0,
		question_no: 0,
		optionA: '2',
		optionB: '2',
		optionC: '2',
		optionD: '2',
		option_choice_no: 0,
		options_visible: false,
		time: 20,
		isActive: false,
		timeUp:false
	};

	componentDidMount() {
		this.setState({
			choice_no: this.props.match.params.choice_no - 1,
			group_no: 0,
			question_no: 0,
			options_visible: false,
			time: 20,
			timeUp: false
		});
	}

	componentWillUnmount() {
		if (this.timerId) {
			clearInterval(this.timerId);
			this.setState({
				isActive: false,
			});
		}
	}

	startTimer = () => {
		this.timerId = setInterval(() => this.tick(), 1000);
		this.setState({
			isActive: true,
		});
	};

	tick = () => {
		this.setState({
			time: this.state.time - 1,
		});
		if (this.state.time === 0) {
			this.setState({
				isActive: false,
			});
			clearInterval(this.timerId);
			this.setMCQTimeout();
		}
	};

	updateTimer = (e) => {
		this.setState({
			time: e.target.value - 1,
		});
	};

	showOptions = () => {
		this.setState({
			options_visible: !this.state.options_visible,
		});
		this.startTimer();
	};

	nextQuestion = () => {
		if (this.timerId) {
			this.setState({
				isActive: false,
			});
			clearInterval(this.timerId);
		}
		this.setState({
			time: 20,
			options_visible: false,
			optionA: '2',
			optionB: '2',
			optionC: '2',
			optionD: '2',
			option_choice_no: 0,
			timeUp:false
		});
		if (this.state.question_no < 1) {
			this.setState({
				question_no: this.state.question_no + 1,
			});
			
		} // else if (this.state.group_no < 2) {
		//  	this.setState({
		//  		question_no: 0,
		//  		group_no: this.state.group_no + 1,
		//  	});
		//  }
	};

	checkAnswer = (e) => {
		if (this.state.option_choice_no < 2) {
			if (
				e.target.value ===
				questions[this.state.choice_no][this.state.group_no][
					this.state.question_no
				].answer
			) {
				this.setState({
					[e.target.name]: '1',
				});
				if (this.timerId) {
					this.setState({
						isActive: false,
					});
					clearInterval(this.timerId);
				}
				this.correctaudioplayer.play();
				this.setState({
					option_choice_no: this.state.option_choice_no + 1,
				});
			} else {
				if (this.state.option_choice_no === 1) {
					this.displayCorrectOption();
				}

				this.setState({
					[e.target.name]: '0',
				});
				this.wrongaudioplayer.play();
			}
		}
		this.setState({
			option_choice_no: this.state.option_choice_no + 1,
		});
	};

	displayCorrectOption = () => {
		if (this.timerId) {
			this.setState({
				isActive: false,
			});
			clearInterval(this.timerId);
		}
		const temp_optionA = document.getElementsByName('optionA');
		const temp_optionB = document.getElementsByName('optionB');
		const temp_optionC = document.getElementsByName('optionC');
		const temp_optionD = document.getElementsByName('optionD');
		const correct_answer =
			questions[this.state.choice_no][this.state.group_no][
				this.state.question_no
			].answer;
		if (temp_optionA[0].value === correct_answer) {
			this.setState({
				optionA: '1',
			});
		} else if (temp_optionB[0].value === correct_answer) {
			this.setState({
				optionB: '1',
			});
		} else if (temp_optionC[0].value === correct_answer) {
			this.setState({
				optionC: '1',
			});
		} else if (temp_optionD[0].value === correct_answer) {
			this.setState({
				optionD: '1',
			});
		}
	};

	setMCQTimeout = () => {
		if (this.state.time === 0) {
			// const questionBox = document.getElementById('question_box');
			// questionBox.innerHTML = '<h1>TIME UP</h1>';
			this.setState({
				timeUp:true
			})
			this.displayCorrectOption();
			this.wrongaudioplayer.play();
		}
	};

	render() {
		const {
			group_no,
			choice_no,
			question_no,
			optionA,
			optionB,
			optionC,
			optionD,
			timeUp,
		} = this.state;
		const [optionTextA, optionTextB, optionTextC, optionTextD] = questions[
			choice_no
		][group_no][question_no].options;
		return (
			<div className='all-center'>
				<Title
					style={{ marginTop: '4vh', fontSize: '1.7rem' }}
					text={`Question ${question_no + 1}`}
					backLink='/main/teams'
					showBack={false}
				/>
				
				{!timeUp && (<QuestionBox
					style={{
						fontSize: '2.9rem',
					}}
					question={questions[choice_no][group_no][question_no].question}
				/>)}
				{timeUp && (<QuestionBox
					style={{
						fontSize: '2.9rem',
					}}
					question='Time Up!'
				/>)}

				<div className='inline-grid-9'>
					<Link to='/main/teams' style={{ color: 'white' }}>
						<i
							className='fa fa-chevron-circle-left '
							style={{
								fontSize: '4.5rem',
								gridColumnStart: '1',
								gridColumnEnd: '2',
								marginTop: '5vh',
								cursor: 'pointer',
							}}
							onClick={this.backToOptionSelect}
						></i>
					</Link>
					<Timer
						updateTimer={this.updateTimer}
						time={this.state.time}
						isActive={this.state.isActive}
					/>
					<i
						className='fa fa-chevron-circle-right'
						style={{
							fontSize: '4.5rem',
							gridColumnStart: '9',
							gridColumnEnd: '10',
							marginTop: '5vh',
							cursor: 'pointer',
						}}
						onClick={this.nextQuestion}
					></i>
				</div>
				{!this.state.options_visible && (
					<button
						style={{
							fontFamily: 'Montserrat',
							fontSize: '2rem',
							fontWeight: 'bold',
							marginTop: '4vh',
							height: '35vh',
							cursor: 'pointer',
						}}
						className='all-center textbox bg-dark'
						onClick={this.showOptions}
					>
						Reveal
					</button>
				)}
				{this.state.options_visible && (
					<div
						className='grid-2 large'
						style={{ marginTop: '1vh', border: 'none' }}
					>
						<button
							name='optionA'
							className={
								optionA === '2'
									? 'option-button'
									: optionA === '1'
									? 'btn-correct-answer'
									: 'btn-incorrect-answer'
							}
							onClick={this.checkAnswer}
							value={optionTextA}
						>
							{optionTextA}
						</button>
						<button
							name='optionB'
							className={
								optionB === '2'
									? 'option-button'
									: optionB === '1'
									? 'btn-correct-answer'
									: 'btn-incorrect-answer'
							}
							onClick={this.checkAnswer}
							value={optionTextB}
						>
							{optionTextB}
						</button>
						<button
							name='optionC'
							className={
								optionC === '2'
									? 'option-button'
									: optionC === '1'
									? 'btn-correct-answer'
									: 'btn-incorrect-answer'
							}
							onClick={this.checkAnswer}
							value={optionTextC}
						>
							{optionTextC}
						</button>
						<button
							name='optionD'
							className={
								optionD === '2'
									? 'option-button'
									: optionD === '1'
									? 'btn-correct-answer'
									: 'btn-incorrect-answer'
							}
							onClick={this.checkAnswer}
							value={optionTextD}
						>
							{optionTextD}
						</button>
					</div>
				)}
				<audio
					ref={(ref) => (this.correctaudioplayer = ref)}
					src={correctaudio}
					preload='auto'
				/>
				<audio
					ref={(ref) => (this.wrongaudioplayer = ref)}
					src={wrongaudio}
					preload='auto'
				/>
			</div>
		);
	}
}

export default Question;
