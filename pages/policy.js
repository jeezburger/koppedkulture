import React from 'react';

const Policy = () => {
    return (
        <div className="policy-container">
            <h1>Contact Us & Shipment - Return Policies</h1>

            <section className="contact-us">
                <div>
                    <h2>Contact Us</h2>
                    <p><strong> Reach out to our friendly customer service team. </strong> <br> <strong> Email: </strong> koppedkulture@gmail.com </p>
                    <p><strong>Address:</strong> G-35/138, SFS DDA FLATS, Sector-6, PKT 1, DWARKA, PH-1 NEW DELHI, Dwarka Sec-6, Dwarka, New Delhi, South West Delhi, Delhi - 110075, India</p>
                </div>
            </section>

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
                    <h2>Return Policy </h2>
                    <br />

                    <h3>Refund Policy:</h3>
                    <p>
                        We hope you love what you ordered, but if the vibe wasn’t right, here’s how we’ll get your refund rolling:
                    </p>
                    <p>
                        <strong>Eligibility:</strong> Refunds are available for <strong>PRE-PAID</strong> orders only. The items must meet our return conditions—tags intact, unwashed, unworn, and returned within 7 days.
                    </p>
                    <p>
                        <strong>Processing:</strong> Once we receive your returned items and give them the green light (aka verification is complete), the refund magic happens. We’ll process your refund within 48 hours.
                    </p>
                    <p>
                        <strong>Credit Timeline:</strong> After the refund is processed, the amount will appear in your bank account within 48 hours. So keep an eye on your balance—it’ll be like a little surprise party from us to you!
                    </p>
                    <p>
                        <strong>Important Notes:</strong> Refunds are not applicable for <strong>COD</strong> orders. For those, feel free to opt for an exchange instead!
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
