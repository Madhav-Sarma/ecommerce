import React from 'react';
import products from '../products';
import '../App.css';

const Catalogue = ({ addToCart }) => {
  return (
    <main className="container mt-5">
      <h2 className="text-center mb-4">Catalogue</h2>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={product.image} className="card-img-top fixed-image" alt={product.name} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text flex-grow-1">{product.description}</p>
                <p className="card-text">${product.price}</p>
                <button className="btn btn-dark mt-auto" onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Catalogue;
