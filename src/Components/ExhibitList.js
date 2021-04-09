import React from 'react';
import ReviewForm from './ReviewForm'
import ReviewList from "./ReviewList"

const ExhibitList = (props) => {
	return (
		<>
			{props.exhibits.map((exhibit, index) => (
				<div key={`${exhibit.imdbID}-exhibit`} className='image-container d-flex justify-content-start m-4 '>
					
					<div>
					<hr/>	
					<img src={exhibit.Poster} alt='exhibit' />
					</div>
					<br/>
					<div className= "container">
						<hr/>
						<h3>{exhibit.Title}</h3>
						{/* <h5>{movie.Synopsis}</h5> */}
						<br/>
						<h5>{exhibit.Rating}</h5>
						
							<ReviewForm  addNewReview={props.addNewReview} id={exhibit.imdbID} />
							<ReviewList reviews={exhibit.Reviews} id={exhibit.imdbID } key={exhibit.imdbID} />
									
					</div>
				</div>
			))}
		</>
	);
};

export default ExhibitList;