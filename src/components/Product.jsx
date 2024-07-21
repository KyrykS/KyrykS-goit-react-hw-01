import React from "react";

export const Product = ({ name, imgUrl, price }) => {
  return (
    <div>
      <h2>{name}</h2>
      {imgUrl && <img src={imgUrl} alt={name} />}
      <p>Price: {price}</p>
    </div>
  );
};
