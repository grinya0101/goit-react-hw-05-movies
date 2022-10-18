import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetReviews } from 'components/utils/api-request';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  //определяем id фильма из адресной строки
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviewsMovies = async () => {
      try {
        const data = await GetReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviewsMovies();
  }, [movieId]);

  const elements = reviews.map(({ id, author, content }) => (
    <li key={id}>
      <p>
        <b>Author: {author}</b>
      </p>
      <p>{content}</p>
    </li>
  ));
  return reviews.length > 0 ? (
    <ul> {elements} </ul>
  ) : (
    <p>We don't have any reviews for this movie</p>
  );
}
