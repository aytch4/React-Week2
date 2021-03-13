import React from "react";

export default function Review(props) {
    return (
    <div>
        <h5> User rating: {props.review.rating}</h5>
        <p>User comment: {props.review.comment}</p>
    </div>
    );
} 
