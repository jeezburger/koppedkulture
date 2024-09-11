import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { Cart } from './';
import { useStateContext } from '../context/StateContext';
import SaleBanner from './salebanner';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <div className="logo-and-links">
        <p className="logo">
          <Link href="/">
            <img src="/assets/DDC.png" alt="Kopped Kulture" />
          </Link>
        </p>
        <div className="nav-links">
          {/* <Link href="/policy">Policies</Link>
          <Link href="/shipments">Shipments</Link> */}
        </div>
      </div>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}

      {/* Add Sale Banner */}
      {/* <SaleBanner /> */}
    </div>
  )
}

export default Navbar;
