import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviewer, setreviewer] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setreviewer(data));
    },[])
    console.log(reviewer);
    return (
        <div>
            <h2 className="text-center">What our customer say!</h2>
            {
                reviewer.map( review => <Review name={review.name}
                rating={review.address.zipcode}
                comment={review.company.catchPhrase}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;