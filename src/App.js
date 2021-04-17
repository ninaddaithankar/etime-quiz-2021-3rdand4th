import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import '../node_modules/video-react/dist/video-react.css';
import Welcome from './components/Welcome';
import Main from './components/Main';
import TeamSelection from './components/mcq/TeamSelection';
import Question from './components/mcq/Question';
import NoMatch from './components/NoMatch';
import RapidFireQuestion from './components/rapidfire/RapidFireQuestion';
import RapidFireAnswer from './components/rapidfire/RapidFireAnswer';
import MixedBagQuestion from './components/mixedbag/MixedBagQuestion';
import MixedBagTeamSelection from './components/mixedbag/MixedBagTeamSelection';
import DoubleTroubleTeamSelection from './components/doubletrouble/DoubleTroubleTeamSelection';
import AudioQuestion from './components/doubletrouble/AudioQuestion';
import VideoQuestion from './components/doubletrouble/VideoQuestion';
import TieBreakerTeamSelection from './components/tiebreaker/TeamSelection';
import TieBreakerQuestion from './components/tiebreaker/TieBreakerQuestion';

function App() {
	return (
		<Router>
			<div className='App'>
				<Switch>
					{/* Initial Routes */}
					<Route exact path='/' component={Welcome} />
					<Route exact path='/main' component={Main} />

					{/* Take-Your-Pick Routes */}
					<Route
						exact
						path='/main/teams'
						render={props => (
							<TeamSelection
								{...props}
								round='Take Your Pick'
								link='/main/teams'
							/>
						)}
					/>
					<Route
						exact
						path='/main/teams/question/:choice_no'
						component={Question}
					/>

					{/* Mixed-Bag Routes */}
					<Route
						exact
						path='/main/mixedbag'
						component={MixedBagTeamSelection}
					/>
					<Route
						exact
						path='/main/mixedbag/question/:choice_no'
						component={MixedBagQuestion}
					/>

					{/* Double Trouble Routes */}
					<Route
						exact
						path='/main/double'
						component={DoubleTroubleTeamSelection}
					/>
					<Route
						exact
						path='/main/double/audioquestion/:choice_no'
						component={AudioQuestion}
					/>
					<Route
						exact
						path='/main/double/videoquestion/:choice_no'
						component={VideoQuestion}
					/>

					{/* Rapid-Fire Routes */}
					<Route
						exact
						path='/main/rapidfire'
						render={props => (
							<TeamSelection
								{...props}
								round='Rapid Fire'
								link='/main/rapidfire'
							/>
						)}
					/>
					<Route
						exact
						path='/main/rapidfire/answers/:choice_no'
						component={RapidFireAnswer}
					/>
					<Route
						exact
						path='/main/rapidfire/question/:choice_no'
						component={RapidFireQuestion}
					/>

					{/* Tie Breaker Route */}
					<Route
						exact
						path='/main/tiebreaker'
						component={TieBreakerTeamSelection}
					/>
					<Route
						exact
						path='/main/tiebreaker/question/:choice_no'
						component={TieBreakerQuestion}
					/>

					<Route component={NoMatch} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
