import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className="footer-container">
      <p>2024 Kopped Kulture All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
      <p>
        <Link href="/policy">Shipping Policy </Link>
        <Link href="https://www.termsfeed.com/live/f078e3ea-c8bb-4662-b253-d5722ce3ef60">Privacy Policy </Link>
        <Link href="/tandc">T&C </Link>
      </p>
    </div>
  )
}

export default Footer