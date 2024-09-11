import React from 'react';

const Tandc = () => {
    return (
        <div className="policy-container">
            <h1>Terms and Conditions</h1>
            <p><strong>Effective Date:</strong> 11 September 2024</p>

            <section className="shipment-policy">
                <p>Welcome to Kopped Kulture! These Terms and Conditions govern your use of our website and the purchase of any products from Kopped Kulture, located at 6-35/138, SFS DDA FLATS, Sector-6, PKT 1, DWARKA, PH-1 NEW DELHI, Dwarka Sec-6, Dwarka, New Delhi, South West Delhi, Delhi - 110075, India ("we," "us," "our"). By using our website or purchasing products from us, you agree to these Terms and Conditions. Please read them carefully.</p>

                <h2>1. General Use of the Website</h2>
                <p>By accessing and using our website, you agree to comply with these Terms and Conditions. You must be at least 18 years old or have parental consent to use the site.</p>

                <h2>2. Products and Services</h2>
                <p>Kopped Kulture offers a range of clothing products available for purchase through our website. All product descriptions, including prices, designs, and availability, are subject to change at any time without prior notice. We reserve the right to modify or discontinue any product or service without notice.</p>

                <h2>3. Pricing and Payments</h2>
                <p>All prices on our website are in [Insert Currency] and inclusive of applicable taxes. We strive to ensure accurate pricing, but errors may occur. If we discover an error in pricing, we will notify you and give you the option to reconfirm your order at the correct price or cancel it. Payments must be made through the methods provided on the website.</p>

                <h2>4. Order and Shipping Policy</h2>
                <p>All orders placed through our website are subject to acceptance by Kopped Kulture. We reserve the right to refuse or cancel any order for any reason. Upon successful order confirmation, you will receive a shipping confirmation email with tracking details. Shipping times and costs vary based on location, and we are not responsible for any delays caused by the shipping provider.</p>

                <h2>5. Return and Refund Policy</h2>
                <p>Your package embarks on an adventure! It's got a minimum of 3 days and a maximum of 7-10 days to reach you. If it plays hide and seek, don't worry! Our partner will make not one, not two, but three more attempts. We're all about efficiency, so we'd love it if you opt for prepaid payments to avoid those extra charges on delivery!</p>
                <p>Within 7 days of receiving your goodies, if your order was PRE-PAID and not COD (we do not accept returns on COD orders, only PRE-PAID orders can be returned), and they're still with the tags, unwashed, and unworn, WhatsApp us on +91 7777019901 to initiate the return. Please note that Rs. 100 PER PRODUCT will be retained as the return cost, which must be paid by you to process the exchange or return.</p>
                <p>Swap meet time! If you wish to exchange, create a request via our WhatsApp number +91 7777019901. We'll arrange for the items to be picked up, and once they’re back and in party-ready condition, we'll send out the new goodies. This process also requires you to pay Rs. 100 PER PRODUCT for the exchange.</p>
                <p><strong>Conditions for exchanges and returns:</strong></p>
                <ul>
                    <li>Returns are accepted only on PRE-PAID orders and not on COD orders, while EXCHANGES are accepted for COD orders as well.</li>
                    <li>The product must be unused, unwashed, and unworn.</li>
                    <li>Charges for both Returns and Exchanges are Rs. 100/- per product.</li>
                    <li>Please remember, we’re like the fashion police—anything worn, washed, or used won’t be accepted! Any amount due will be deducted or refunded via your original method of payment.</li>
                </ul>

                <h2>6. Intellectual Property</h2>
                <p>All content on the Kopped Kulture website, including but not limited to text, graphics, logos, images, product descriptions, and software, is the exclusive property of Kopped Kulture or its content suppliers and is protected by Indian and international copyright, trademark, and other intellectual property laws. You may not reproduce, modify, distribute, or use any content without our express written consent.</p>

                <h2>7. User Responsibilities</h2>
                <p>You agree not to:</p>
                <ul>
                    <li>Use our website for unlawful purposes.</li>
                    <li>Engage in any activity that interferes with or disrupts the website’s operations.</li>
                    <li>Upload or transmit any content that is abusive, defamatory, or harmful.</li>
                </ul>

                <h2>8. Limitation of Liability</h2>
                <p>Kopped Kulture shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the website or the purchase of products, including but not limited to damages for loss of data, profits, or goodwill.</p>

                <h2>9. Governing Law</h2>
                <p>These Terms and Conditions are governed by the laws of India. Any disputes arising from or related to these terms shall be subject to the exclusive jurisdiction of the courts of New Delhi, India.</p>

                <h2>10. Changes to Terms and Conditions</h2>
                <p>We reserve the right to update or modify these Terms and Conditions at any time. Any changes will be posted on this page with the updated effective date. Your continued use of our website after any changes indicates your acceptance of the new terms.</p>

                <h2>11. Contact Information</h2>
                <p>If you have any questions or concerns about these Terms and Conditions, please contact us at:</p>
                <p><strong>Kopped Kulture</strong><br />
                    6-35/138, SFS DDA FLATS,<br />
                    Sector-6, PKT 1, DWARKA, PH-1,<br />
                    New Delhi, South West Delhi, Delhi - 110075, India<br />
                    Email: <a href="mailto:koppedkulture@gmail.com">koppedkulture@gmail.com</a>
                </p>
            </section>

            <style jsx>{`
                .policy-container {
                    background-color: black;
                    color: white;
                    padding: 40px;
                    max-width: 800px;
                    margin: 0 auto;
                }

                h1 {
                    font-size: 2em;
                    margin-bottom: 20px;
                }

                section {
                    margin-bottom: 30px;
                }

                h2 {
                    font-size: 1.5em;
                    margin-bottom: 10px;
                }

                p {
                    font-size: 1em;
                    line-height: 1.5;
                }

                ul {
                    margin: 10px 0;
                    padding-left: 20px;
                }

                li {
                    margin-bottom: 10px;
                }
            `}</style>
        </div>
    );
};

export default Tandc;
