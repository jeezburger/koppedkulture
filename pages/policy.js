import React from 'react';

const Policy = () => {
    return (
        <div className="policy-container">
            <h1>Need Help? Lets Chat.</h1>

            <section className="contact-us">
                <div>
                    <h2>Contact Us</h2>
                    <p><strong> Reach out to our friendly customer service team. </strong> <br></br> <strong> Email: </strong> koppedkulture@gmail.com </p>
                    <p><strong>Address:</strong> G-35/138, SFS DDA FLATS, Sector-6, PKT 1, DWARKA, PH-1 NEW DELHI, Dwarka Sec-6, Dwarka, New Delhi, South West Delhi, Delhi - 110075, India</p>
                </div>
            </section>

            <section className="shipment-policy">
                <div>
                    <h2> Shipping Information </h2>

                    <h3>Order Processing: </h3>
                    <p>
                        We hustle! Expect your order to be processed within 48 hours (excluding weekends and holidays). Then, your package is on its way!
                    </p>
                    <br />

                    <h3>Shopping Cart: </h3>
                    <p>
                        If an item is in high demand, we'll let you know. At checkout, you'll see available shipping options.
                    </p>
                    <ul>
                        <li><strong>Standard Shipping:</strong> Get your items within 4-8 business days - reliable and secure!</li>
                    </ul>
                    <br />

                    <h3>Delivery: </h3>
                    <p>
                        Your package will arrive within 3 to 7-10 business days. Don't worry if there's a slight delay, our courier partner will make multiple delivery attempts.
                    </p>
                    <p>
                        Opt for prepaid payments to avoid cash on delivery charges.
                    </p>
                </div>
                <br />
            </section>

            <section className="return-policy">
                <div>
                    <h2>Return Policy </h2>
                    <br />

                    <h3>Refund Policy:</h3>
                    <p>
                        <strong>Love it or Return it: </strong> We want you to be happy with your purchase. If something isn't quite right, you can return it for a refund.
                    </p>
                    <p>
                        <strong>Eligibility:</strong> Refunds are only available for pre-paid orders. Items must be returned within 7 days, with tags intact, unworn, and unwashed.
                    </p>
                    <p>
                        <strong>Refund Processing:</strong> Once we receive and inspect your return (usually within 48 hours), your refund will be initiated.
                    </p>
                    <p>
                        <strong>Funds availiablity: </strong> The refund will appear in your bank account within 48 hours after processing. Consider it a little surprise from Kopped Kulture!
                    </p>
                    <p>
                        <strong>COD Orders: </strong> Refunds are not available for cash on delivery orders. However, you can always exchange your COD item.
                    </p>
                </div>
                <br />
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

                .contact-us p {
                    font-size: 1em;
                    margin-bottom: 10px;
                }
            `}</style>
        </div>
    );
};

export default Policy;
