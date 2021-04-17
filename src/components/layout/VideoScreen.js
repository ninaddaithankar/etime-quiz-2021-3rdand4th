import React from 'react';
import { Player } from 'video-react';

class VideoScreen extends React.Component {
	render() {
		return (
			<Player
				ref={player => {
					this.player = player;
				}}
				fluid={false}
				width={800}
				playsInline
				poster='/assets/poster.png'
				src={this.props.source}
			/>
		);
	}
}

export default VideoScreen;
