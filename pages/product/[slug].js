import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { client, urlFor } from '../../lib/client';
import { Product } from '../../components'; 
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('Medium');
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleBuyNow = () => {
    onAdd({ ...product, size: selectedSize }, qty); // Pass the selected size with the product
    setShowCart(true);
  };

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[index])} className="product-detail-image" />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          {/* <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div> */}
          <p className="price">
            Rs.<s style={{ marginRight: '8px' }}>1999</s> Rs.{price}
          </p>



          <div className="size-selector">
            <h3>Choose Size:</h3>
            <select value={selectedSize} onChange={handleSizeChange}>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="Extra Large">Extra Large</option>
            </select>
          </div>

          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={() => onAdd({ ...product, size: selectedSize }, qty)}>
              Add to Cart
            </button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>
              Buy Now
            </button>


          </div>

          <h4> <br></br> <br></br>Additional Features:</h4>
          <p><ul>
            <li><strong>Country of Origin:</strong> INDIA</li>
            <li><strong>Composition:</strong> 100% Terry Cotton</li>
            <li><strong>GSM:</strong> 240</li>
            <li><strong>Type:</strong> UNISEX T-Shirt</li>
            <li><strong>Neckline:</strong> Round Neck</li>
            <li><strong>Fit:</strong> Oversized</li>
            <li><strong>Size and Fit:</strong> Model (Height 5'8") is wearing size M</li>
          </ul>
            <p><strong>LITTLE THINGS THAT MATTER MUCH</strong></p> <br></br>
            <ul>
              <li>Soft and Comfortable: Made from high-quality Terry Cotton for all-day comfort.</li>
              <li>Breathable Fabric: Keeps you cool and comfortable in any weather.</li>
              <li>Relaxed Fit: Provides a comfortable, flattering silhouette.</li>
              <li>Classic Round Neckline: A timeless and versatile design.</li>
              <li>Unisex Style: Suitable for everyone.</li>
          <br></br>
            </ul>

            
            <p><strong>NOTE:</strong> Machine wash cold with like colors, Tumble dry low or hang dry</p>
            <p><strong>Order yours today and experience the comfort and style of a tshirt with Kopped Kulture.</strong> </p>
          </p>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
