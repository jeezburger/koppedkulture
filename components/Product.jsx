import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div className="product-card-wrapper">
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            alt={name} // Add alt text for accessibility
            className="product-image"
          />

        </div>
        <p className="product-name">{name}</p>
        <p className="product-price">Rs.<s style={{ marginRight: '8px' }}>1999</s> Rs.{price}</p>
      </Link>
    </div>
  );
}

export default Product;
