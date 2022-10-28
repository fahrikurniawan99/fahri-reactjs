import React from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  return (
    <div className=''>
      <h1>Detail of {params.name}</h1>{" "}
      <Link to='/product' className='btn btn-outline-dark'>
        Back to Product
      </Link>
    </div>
  );
};

export default Detail;
