import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import Policy from '@/pages/policy';
import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <div className="logo-and-links">
        <p className="logo">
          <Link href="/">
            <img src="/assets/1SX.png" alt="Kopped Kulture" />
          </Link>
        </p>
        <div className="nav-links">
          <Link href="/policy">Policies</Link>
          <Link href="/shipments">Shipments</Link>
        </div>
      </div>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar;
