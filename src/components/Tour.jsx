import { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article>
      <img
        src={image}
        alt={name}
        style={{ width: '250px', height: '200px' }}
      ></img>
      <span>${price}</span>
      <div>
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}

          <button type="button" onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
      </div>
      <button type="button" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </article>
  );
};
export default Tour;
