import React, { useState } from 'react';
import api from '../../servises/fetchMovies';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState(null);
  useEffect(() => {
    api.fetchReview(movieId).then(data => setReview(data.results));
  }, [movieId]);

  console.log(review);
  return (
    <ul>
      {review &&
        review.map(rev => {
          return (
            <li key={rev.id}>
              <h3>{rev.author}</h3>
              <p>{rev.content}</p>
            </li>
          );
        })}
    </ul>
  );
};
export default Reviews;
