import React from 'react';
import ReviewForm from './ReviewForm'
import ReviewList from "./ReviewList"

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
				<div key={`${movie.imdbID}-movie`} className='image-container d-flex justify-content-start m-4 '>
					<div>
					<img src={movie.Poster} alt='movie' />
					</div>
					<br/>
					<div className= "container">
						<h3>{movie.Title}</h3>
						<h5>{movie.Synopsis}</h5>
						<br/>
						<h5>{movie.Rating}</h5>
						
							<ReviewForm  addNewReview={props.addNewReview} id={movie.imdbID} />
							<ReviewList reviews={movie.Reviews} id={movie.imdbID } key={movie.imdbID} />
							
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;