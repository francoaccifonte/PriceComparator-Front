import React from 'react';
import ApiClient from '../lib/api_client';
import './styles/product_list.css'
import './styles/product_grid.css'

function ProductList({ resultDisplayMode }) {
  let api_client = new ApiClient();
  const products = api_client.product_list(22, 0);

  return(
    <div className="productsResults">
      <ol className="productResults" displayStyle={resultDisplayMode}>
        {products.map(
          (product, index, array) => {
            return(
              <li>
                <div className="productCard" displayStyle={resultDisplayMode}>
                  <div className="productCardImage">
                    <img src={product.img()} alt={"asdfg"}/>
                  </div>
                  <div className="productCardText" displayStyle={resultDisplayMode}>
                    <h1>{product.name}</h1>
                    <p className="price">${String(parseFloat(product.price)-0.01)}</p>
                    <p className="description">{product.description}</p>
                  </div>
                </div>
              </li>)
          }
        )}
      </ol>
    </div>
  );
}

export default ProductList
