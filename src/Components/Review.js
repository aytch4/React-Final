import React from "react";

export default function Review(props) {
    return (
    <div>
        <h5> User rating: {props.review.rating}</h5>
        <p>User comment: {props.review.comment}</p>
    </div>
    );
} 

// function Review(props) {
//     const { data } = props;
//     return data == undefined ? <h1>404 Not Found</h1> : (
    
//       <Card>
//         <Card.Header>{data.title}</Card.Header>
//         <Card.Body>
//             <Card.Subtitle>{data.date}</Card.Subtitle>
//             <Card.Text>{data.content}</Card.Text>
//           </Card.Body>
//       </Card>
//     );
//   }
  

