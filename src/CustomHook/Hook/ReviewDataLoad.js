import React, { useEffect, useState } from 'react';

const ReviewDataLoad = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    return [ reviews, setReviews];
};

export default ReviewDataLoad;