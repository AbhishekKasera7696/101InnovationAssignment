import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "./data.js";
import icon from './icon.png';
import "../App.css"
// import heart from "./heart.png";
// import redHeart from "./redHeart.png";

const myCard = {
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
};

const ProductDetail = () => {
  // const [add, setAdd] = useState(false);
  const { ProductId } = useParams();

  return (
    <div style={myCard}>
      {data
        .filter((item) => item.code === +ProductId)
        .map((product) => {
          return (
            <div style={{textAlign:"center"}}>
              <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <img
                style={{
                  width: "200px",
                  height: "200px",
                  marginBottom: "10px",
                  marginRight:"20px"
                }}
                src={icon}
                alt="img"
              />
               <h2>{product.product_name}</h2>
              </div>
              <table class="table table-striped">
                <tr>
                  <td>Url</td>
                  <td>{product.url}</td>
                </tr>
                <tr>
                  <td>Product Name</td>
                  <td>{product.product_name}</td>
                </tr>
                <tr>
                  <td>Product Generic</td>
                  <td>{product.generic_name}</td>
                </tr>
                <tr>
                  <td>Product Quantity</td>
                  <td>{product.quantity}</td>
                </tr>
                <tr>
                  <td>Product Packaging</td>
                  <td>{product.packaging}</td>
                </tr>
                <tr>
                  <td>Product Serving_Size</td>
                  <td>{product.serving_size}</td>
                </tr>
                <tr>
                  <td>Product Energy</td>
                  <td>{product.energy_100g}</td>
                </tr>
                <tr>
                  <td>Product Energy From Fat</td>
                  <td>{product.energy_from_fat_100g}</td>
                </tr>
                <tr>
                  <td>Product Omega3</td>
                  <td>{product.omega_3_fat_100g}</td>
                </tr>
                <tr>
                  <td>Product Cholestrol</td>
                  <td>{product.cholesterol_100g}</td>
                </tr>
                <tr>
                  <td>Product Carbohydrate</td>
                  <td>{product.carbohydrates_100g}</td>
                </tr>
                <tr>
                  <td>Product Sugar</td>
                  <td>{product.sugars_100g}</td>
                </tr>
                <tr>
                  <td>Product Fiber</td>
                  <td>{product.fiber_100g}</td>
                </tr>
                <tr>
                  <td>Product Protein</td>
                  <td>{product.proteins_100g}</td>
                </tr>
                <tr>
                  <td>Product Salt</td>
                  <td>{product.salt_100g}</td>
                </tr>
                <tr>
                  <td>Product Sodium</td>
                  <td>{product.sodium_100g}</td>
                </tr>
              </table>
            </div>
          );
        })}
    </div>
  );
};

export default ProductDetail;
