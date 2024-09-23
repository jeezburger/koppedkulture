import React from 'react';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2024 Kopped Kulture All rights reserved</p>
      <p className="icons">
        <a href="https://www.instagram.com/koppedkulture" target="_blank" rel="noopener noreferrer">
          <AiFillInstagram />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61565572238936" target="_blank" rel="noopener noreferrer">
          <AiFillFacebook />
        </a>
      </p>
      <p>
        <Link href="/policy">Contact Us & Shipping-Return Policy</Link>
        <Link href="https://www.termsfeed.com/live/f078e3ea-c8bb-4662-b253-d5722ce3ef60">Privacy Policy</Link>
        <Link href="/tandc">T&C</Link>
      </p>
    </div>
  );
}

export default Footer;
