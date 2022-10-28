import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  const products = [
    {
      id: 1,
      name: "Backpack",
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    },
    {
      id: 2,
      name: "T-Shirts ",
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
    },
    {
      id: 3,
      name: "Jacket",
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.",
    },
  ];
  return (
    <div className='row row-cols-3'>
      {products.map(({ id, name, description }) => (
        <div class='col' key={id}>
          <div class='card'>
            <div class='card-body'>
              <h5 class='card-title'>{name}</h5>
              <p class='card-text'>{description}</p>
              <Link to={`detail/${name}`} class='btn btn-primary'>
                Go Detail
              </Link>
            </div>
          </div>
        </div>
      ))}

      <Outlet />
    </div>
  );
};

export default Product;
