import React from "react";

const Card = ({image, title, content, source, date}) => {
  return (
    <div className='card h-100 w-100'>
      <img
        src={image}
        className='card-img-top'
        style={{ objectFit: "cover" }}
        width={100}
        height={200}
        alt='imageNews'
      />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{content}</p>
      </div>
      <div className='card-footer d-flex justify-content-between'>
        <small className='text-muted'>{source}</small>
        <small className='text-muted'>{date}</small>
      </div>
    </div>
  );
};

export default Card;
