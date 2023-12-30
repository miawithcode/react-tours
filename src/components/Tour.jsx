const Tour = ({ id, name, info, image, price, removeTour }) => {
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
        <p>{info}</p>
      </div>
      <button type="button" onClick={()=> removeTour(id)}>
        Not Interested
      </button>
    </article>
  );
};
export default Tour;
