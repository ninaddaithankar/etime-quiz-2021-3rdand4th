import React, { useState, useEffect } from 'react';
import Title from '../layout/Title';
import { AudioQuestions as Audio } from './Questions';
import QuestionBox from '../layout/QuestionBox';
import Timer from '../layout/Timer';
import CustomModal from '../layout/CustomModal';
import audio1 from '../../assets/audio/1.mp3';
import audio2 from '../../assets/audio/2.mp3';
import audio3 from '../../assets/audio/3.mp3';
import audio4 from '../../assets/audio/4.mp3';
import audio5 from '../../assets/audio/5.mp3';
import audio6 from '../../assets/audio/6.mp3';
import audio7 from '../../assets/audio/7.mp3';
import audio8 from '../../assets/audio/7.mp3';
import correctaudio from '../../assets/audio/mcq/correctsound.wav';
import wrongaudio from '../../assets/audio/mcq/wrongsound.wav';

const AudioQuestion = (props) => {
	let audioplayer = null;
	const choice = props.match.params.choice_no - 1;
	const [modalText, setModalText] = useState({ title: '', body: '' });
	const [modalShow, setModalShow] = useState(false);
	const [time, setTime] = useState(30);
	const [isActive, setIsActive] = useState(false);
	const [playing, setPlaying] = useState(false);
	const showModal = (title, body) => {
		setModalText({ title, body });
		setModalShow(true);
	};
	const audio = [audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8];
	let sound = null;

	const startTimer = () => {
		document.addEventListener('keydown', logKey);
		setIsActive(!isActive);
	};

	const logKey = (e) => {
		if (e.code == 'KeyW') {
			document.getElementById('sound').src = wrongaudio;
		}
		if (e.code == 'KeyC') {
			document.getElementById('sound').src = correctaudio;
		}
	};

	const playAudio = () => {
		if (audio) {
			audioplayer.src = audio[choice];
			audioplayer.play();
			setPlaying(true);
			audioplayer.addEventListener('ended', audioStopped);
		}
	};

	const audioStopped = () => {
		setPlaying(false);
		startTimer();
	};

	const pauseAudio = () => {
		if (playing) {
			audioplayer.pause();
			setPlaying(false);
		}
	};

	useEffect(() => {
		let interval = null;
		if (isActive && time === 0) {
			clearInterval(interval);
			setIsActive(false);
			setTimeUp();
		} else if (isActive) {
			interval = setInterval(() => {
				setTime((time) => time - 1);
			}, 1000);
		}
		return () => {
			clearInterval(interval);
		};
	}, [isActive, time]);

	const setTimeUp = () => {
		if (time === 0) {
			document.getElementById('question_box').innerHTML = 'TIME UP!';
			document.getElementById('sound').src = wrongaudio;
			sound.play();
		}
	};

	return (
		<div className='all-center'>
			<Title
				text='Question'
				showBack={true}
				backLink='/main/double'
				style={{ marginTop: '10vh', fontSize: '1.7rem ' }}
			/>
			<div className='grid-3' style={{ width: '80vw', marginTop: '3vh' }}>
				<div style={{ margin: 'auto' }}>
					<Timer time={time} isActive={isActive} />
				</div>
				<QuestionBox
					question={Audio[choice].question}
					style={{
						marginTop: '4vh',
						width: '40vw',
						height: '40vh',
						fontSize: '3rem',
					}}
				/>
				<div style={{ marginTop: '14vh', margin: 'auto' }}>
					<button
						className='btn'
						onClick={() => {
							showModal('Clue', Audio[choice].clue);
						}}
						style={{ width: '10.5rem' }}
					>
						Clue
					</button>
					<br />
					<button
						className='btn'
						onClick={() => {
							showModal('Answer', Audio[choice].answer);
							setIsActive(false);
							sound.play();
						}}
						style={{ marginTop: '4vh' }}
					>
						Answer
					</button>
				</div>
			</div>

			<div style={{ marginTop: '10vh', width: '25vw' }}>
				{playing ? (
					<i
						className='fas fa-pause-circle'
						style={{
							fontSize: '7rem',
							margin: 'auto',
							gridColumn: '1 / span 1',
						}}
						onClick={pauseAudio}
					/>
				) : (
					<i
						className='fas fa-play-circle'
						style={{
							fontSize: '7rem',
							margin: 'auto',
							gridColumn: '1 / span 1',
						}}
						onClick={playAudio}
					/>
				)}
			</div>
			<CustomModal
				titletext={modalText.title}
				bodytext={modalText.body}
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
			<audio
				ref={(ref) => {
					audioplayer = ref;
				}}
			/>
			<audio
				id='sound'
				ref={(ref) => {
					sound = ref;
				}}
				src={correctaudio}
				preload='auto'
			/>
		</div>
	);
};

export default AudioQuestion;
