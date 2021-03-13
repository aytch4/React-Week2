import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Movie from './Components/Movie';
import Heading from './Components/Heading';

function App() {
	return (
		<div className='container-fluid movie-app'>
			<div className='row'>
				<Heading/>
        		<Movie/>			
			</div>
			<br/>
		</div>
	);
};

export default App;
