import React, {useState} from 'react';
import ApiClient from '../lib/api_client';
import './styles/product_list.css'

function ProductList(props) {
  let api_client = new ApiClient();
  // var products = api_client.product_list();
  const [products, setProducts] = useState(api_client.product_list(22, 0));
  // const [products, setProducts] = useState({a: 1})
  const [status, setStatus] = useState('open')

  return(
    <div className="productListContainer">
      <ol className="productList">
        {products.map(
          (product, index, array) => {return(
            <li>
              <div className="productCard">
                <img src={product.img()} alt={"asdfg"}/>
                <h1>{product.name}</h1>
                <p className="price">${String(parseFloat(product.price)-0.01)}</p>
                <p className="description">{product.description}</p>
              </div>
            </li>
          )}
        )}
      </ol>
    </div>
  );
}

export default ProductList