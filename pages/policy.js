import React from 'react';

const Policy = () => {
    return (
        <div className="policy-container">
            <h1>Shipment and Return Policies</h1>

            <section className="shipment-policy">
                <div>
                    <h2>Shipping</h2>

                    <h3>1. Processing:</h3>
                    <p>
                        We don't have a magic wand, but we're quick! Give us 48 hours (excluding weekends and holidays)
                        to process your order. Your package's journey starts after this party!
                    </p>
                    <br />

                    <h3>2. Purchasing:</h3>
                    <p>
                        Shopping cart hog? Beware, it's a wild ride! If an item takes off, we'll give you a shout.
                        At checkout, we'll spill the beans on available shipping options:
                    </p>
                    <ul>
                        <li><strong>Standard Shipping:</strong> 4-8 business days. It's like a snail on roller skates, but it's assured!</li>
                    </ul>
                    <br />

                    <h3>3. Shipping:</h3>
                    <p>
                        Your package embarks on an adventure! It's got a minimum of 3 days and a maximum of 7-10 days to reach you.
                        If it plays hide and seek, don't worry! Our partner will make not one, not two, but three more attempts.
                    </p>
                    <p>
                        We're all about efficiency, so we'd love it if you opt for prepaid payments. Avoid those extra charges on delivery!
                    </p>
                </div>
                <br />
            </section>

            <section className="return-policy">
                <div>
                    <h2>Got a change of heart or size? No worries, but here's the deal:</h2>
                    <br />

                    <h3>Returns:</h3>
                    <p>
                        Within 7 days of getting your goodies, if your order was <strong>PRE-PAID</strong> and not COD
                        (we do not accept returns on COD orders, only PRE-PAID orders can be returned), and they're
                        still with the tags, unwashed, and unworn, WhatsApp us on
                        <a href="https://wa.me/917777019901">+91 7777019901</a>.
                    </p>
                    <p>
                        We're only keeping Rs. 100 <strong>PER PRODUCT</strong> as the return cost, this will require
                        you to send us Rs. 100 <strong>PER PRODUCT</strong> for us to do the exchange.
                    </p>
                    <br />

                    <h3>Exchanges:</h3>
                    <p>
                        Swap meet time! Create an exchange request on our WhatsApp number
                        <a href="https://wa.me/917777019901">+91 7777019901</a>. We'll send a party bus for your items,
                        and once they're back home and party-ready, we'll send out the new goodies.
                    </p>
                    <p>
                        But again, this will require you to send us Rs. 100 <strong>PER PRODUCT</strong> for us to do
                        the exchange. Conditions for exchange are the same as RETURN conditions:
                    </p>
                    <ul>
                        <li>Returns are accepted only on PRE-PAID orders and not on COD orders whereas EXCHANGES are accepted on COD orders as well.</li>
                        <li>The product should be unused, unwashed & unworn.</li>
                        <li>Charges for both Return or Exchange are Rs. 100/- per product.</li>
                    </ul>
                    <br />

                    <p>
                        Please remember, we're like fashion police - anything worn, washed, or used won't be accepted!
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
            `}</style>
        </div>
    );
};

export default Policy;
