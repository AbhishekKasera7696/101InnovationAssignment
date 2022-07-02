import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { data } from './data.js';
import icon from './icon.png'

const Movies = () => {
  return (
    <div className='ProductList'>
      {data.map((product) => {
        return (
          <Link to={`/product/${product.code}`}>
            <div className='Product'>
              <img style={{width: '100px', height:'100px', marginRight:'20px', cursor:'pointer'}} src={icon} alt='img' />
              <h3 style={{marginTop:'30px', cursor:'pointer'}} key={product.code}>{`${product.product_name} (${product.generic_name})`}</h3>
            </div>
          </Link>
        )
      }) }
    </div>
  )
}

export default Movies
