import React, { useState, useEffect } from 'react';
import Title from '../layout/Title';
import QuestionBox from '../layout/QuestionBox';
import CustomModal from '../layout/CustomModal';
import { VideoQuestions as Video } from './Questions';
import Timer from '../layout/Timer';
import ReactPlayer from 'react-player';
import video1 from '../../assets/video/1.mp4';
import video2 from '../../assets/video/2.mp4';
import video3 from '../../assets/video/3.mp4';
import video4 from '../../assets/video/4.mp4';
import video5 from '../../assets/video/5.mp4';
import video6 from '../../assets/video/6.mp4';
import video7 from '../../assets/video/7.mp4';
import video8 from '../../assets/video/8.mp4';
import correctaudio from '../../assets/audio/mcq/correctsound.wav';
import wrongaudio from '../../assets/audio/mcq/wrongsound.wav';

const VideoQuestion = (props) => {
	const [time, setTime] = useState(30);
	const [modalText, setModalText] = useState({ title: '', body: '' });
	const [modalShow, setModalShow] = useState(false);
	const [isActive, setIsActive] = useState(false);
	let sound = null;

	const videos = [video1, video2, video3, video4, video5, video6, video7, video8];

	const choice = props.match.params.choice_no - 1;

	const showModal = (title, body) => {
		setModalText({ title, body });
		setModalShow(true);
	};

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
				style={{ marginTop: '6vh', fontSize: '1.7rem ' }}
			/>

			<div className='grid-3' style={{ width: '80vw', marginTop: '2vh' }}>
				<div style={{ margin: 'auto' }}>
					<Timer time={time} isActive={isActive} />
				</div>
				<div style={{ marginTop: '2vh' }}>
					<ReactPlayer
						url={videos[choice]}
						controls={true}
						onEnded={startTimer}
						height={480}
						width={854}
					/>
				</div>
				<div style={{ margin: 'auto' }}>
					<button
						className='btn'
						onClick={() => {
							showModal('Clue', Video[choice].clue);
						}}
						style={{ marginTop: '2vh', width: '10.5rem', marginLeft: '2vw' }}
					>
						Clue
					</button>
					<br />
					<button
						className='btn'
						onClick={() => {
							showModal('Answer', Video[choice].answer);
							setIsActive(false);
							sound.play();
						}}
						style={{ marginTop: '4vh', marginLeft: '2vw' }}
					>
						Answer
					</button>
				</div>
			</div>
			<QuestionBox
				question={Video[choice].question}
				style={{ marginTop: '10vh', height: '10vh', width: '60vw' }}
			/>
			<CustomModal
				titletext={modalText.title}
				bodytext={modalText.body}
				show={modalShow}
				onHide={() => setModalShow(false)}
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

export default VideoQuestion;
