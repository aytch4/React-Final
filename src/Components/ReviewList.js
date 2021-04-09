import React from 'react'
import Review from './Review'

export default class ReviewList extends React.Component {
    render() {

        return (
            <div className="card w-75">
               
                <div className="card-body">
                    {this.props.reviews.map(review => (
                     <Review review={review} key={review.id}/>   
                    ))}
                </div>
            </div>
        );
    }       
};    
     

