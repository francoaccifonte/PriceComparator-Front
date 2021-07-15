import React from 'react';
import './styles/product_list.css'
import './styles/product_grid.css'
import { Link } from 'react-router-dom';

function ProductList({ resultDisplayMode, products }) {

  console.log(typeof products.map === 'function');

  return(
    <div className="productsResults">
      <ol className="productResults" displayStyle={resultDisplayMode}>
        {products.map(
          (product, index, array) => {
            return(
              <li>
                <div className="productCard" displayStyle={resultDisplayMode}>
                  <div className="productCardImage">
                    <Link to={`/product/${product.id}`}>
                      <img src={product.img()} alt={"asdfg"}/>
                    </Link>
                  </div>
                  <div className="productCardText" displayStyle={resultDisplayMode}>
                    <Link to={`/product/${product.id}`}>
                      <h1>{product.name}</h1>
                    </Link>
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
