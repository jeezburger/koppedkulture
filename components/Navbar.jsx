import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        padding: '10px 20px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', flexGrow: 1, textAlign: 'center' }}>
        <p style={{ margin: 0 }}>
          <Link href="/">
            <img
              src="/assets/DDC.png"
              alt="Kopped Kulture"
              style={{ maxWidth: '30px' }} /* Adjust logo size if needed */
            />
          </Link>
          <span style={{ display: 'block', marginTop: '5px', fontSize: '20px', fontWeight: 'bold' }}>
            Kopped Kulture <br></br> Crafting Emotions In Every Stitch
          </span>
        </p>
      </div>

      <button
        type="button"
        onClick={() => setShowCart(true)}
        style={{
          position: 'absolute',
          right: '20px', /* Position the cart icon on the right */
          border: 'none',
          background: 'none',
          cursor: 'pointer',
        }}
      >
        <AiOutlineShopping size={24} />
        <span style={{ position: 'absolute', top: '-8px', right: '-8px', background: 'red', color: 'white', borderRadius: '50%', padding: '2px 6px', fontSize: '12px' }}>
          {totalQuantities}
        </span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
