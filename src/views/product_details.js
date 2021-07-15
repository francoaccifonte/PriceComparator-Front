import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';


const ProductDetails = ({ ledger }) => {
  let { id } = useParams();
  let product_data = ledger.products.productsIndex[id];

  return(
    <div className="productDetails">
      <div >
        <Link to={'/'}>
          <i class="fas fa-arrow-left"></i>
        </Link>
      </div>
      <div className="productDetailsImage">
          <img src={product_data.img()} alt={"asdfg"}/>
      </div>
      <div className="productDetailsText">
        <h1>{product_data.name}</h1>
        <p className="price">${String(parseFloat(product_data.price)-0.01)}</p>
        <p className="description">{product_data.description}</p>
      </div>
      <div className="retailersList">
        <ol>
          <li>uno</li>
          <li>dos</li>
          <li>tres</li>
        </ol>
      </div>
    </div>
  )
};

export default ProductDetails
