import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/uikit.min.css";
import "../assets/css/main.css";

export default function Checkout() {
  return (
    <div className="page-checkout">
      <div className="page-wrapper">
        <main className="page-main">
          {/* 🔹 Hero Section */}
          <div className="section-hero">
            <div
              className="section-hero__bg"
              style={{
                backgroundImage: "url(/src/assets/img/bg/contacts.jpg)",
              }}
            >
              <div className="uk-container">
                <div className="section-hero__content">
                  <div className="section-hero__title">
                    <span>Finalize Your Order</span>
                    <div className="uk-h1">Checkout</div>
                  </div>
                  <div className="section-hero__breadcrumb">
                    <ul className="uk-breadcrumb">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/addtocart">Cart</Link>
                      </li>
                      <li>
                        <span>Checkout</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 🔹 Checkout Details Section */}
          <div className="uk-section uk-section-default uk-margin-large-top uk-margin-large-bottom">
            <div className="uk-container">
              <div
                className="uk-grid uk-grid-large uk-child-width-1-2@m"
                data-uk-grid
              >
                {/* 🧍‍♀️ Customer Information */}
                <div>
                  <div className="uk-card uk-card-default uk-card-body uk-border-rounded uk-box-shadow-medium">
                    <h3 className="uk-card-title uk-text-danger">
                      Billing Details
                    </h3>
                    <form className="uk-form-stacked uk-margin-top">
                      <div className="uk-margin">
                        <label className="uk-form-label">Full Name</label>
                        <div className="uk-form-controls">
                          <input
                            className="uk-input"
                            type="text"
                            placeholder="Enter your name"
                          />
                        </div>
                      </div>
                      <div className="uk-margin">
                        <label className="uk-form-label">Email</label>
                        <div className="uk-form-controls">
                          <input
                            className="uk-input"
                            type="email"
                            placeholder="example@email.com"
                          />
                        </div>
                      </div>
                      <div className="uk-margin">
                        <label className="uk-form-label">Phone Number</label>
                        <div className="uk-form-controls">
                          <input
                            className="uk-input"
                            type="text"
                            placeholder="+91 9876543210"
                          />
                        </div>
                      </div>
                      <div className="uk-margin">
                        <label className="uk-form-label">Address</label>
                        <div className="uk-form-controls">
                          <textarea
                            className="uk-textarea"
                            rows="3"
                            placeholder="Your full delivery address"
                          ></textarea>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                {/* 🛒 Order Summary */}
                <div>
                  <div className="uk-card uk-card-default uk-card-body uk-border-rounded uk-box-shadow-medium">
                    <h3 className="uk-card-title uk-text-danger">
                      Order Summary
                    </h3>

                    <ul className="uk-list uk-list-divider uk-margin-top">
                      <li>
                        <div className="uk-flex uk-flex-between">
                          <span>Royal Enfield Classic 350</span>
                          <span>₹1,93,000</span>
                        </div>
                      </li>
                      <li>
                        <div className="uk-flex uk-flex-between">
                          <span>Yamaha MT-15</span>
                          <span>₹1,68,000</span>
                        </div>
                      </li>
                      <li>
                        <div className="uk-flex uk-flex-between uk-text-bold">
                          <span>Total</span>
                          <span>₹3,61,000</span>
                        </div>
                      </li>
                    </ul>

                    {/* 💳 Payment Section */}
                    <div className="uk-margin-top">
                      <h4 className="uk-text-danger">Select Payment Method</h4>
                      <div className="uk-margin-small-top">
                        <label>
                          <input
                            className="uk-radio"
                            type="radio"
                            name="payment"
                            defaultChecked
                          />{" "}
                          Credit / Debit Card
                        </label>
                        <br />
                        <label>
                          <input
                            className="uk-radio"
                            type="radio"
                            name="payment"
                          />{" "}
                          UPI / Netbanking
                        </label>
                        <br />
                        <label>
                          <input
                            className="uk-radio"
                            type="radio"
                            name="payment"
                          />{" "}
                          Cash on Delivery
                        </label>
                      </div>
                    </div>

                    {/* 🔘 Place Order Button */}
                    <div className="uk-margin-top">
                      <button className="uk-button uk-button-danger uk-width-1-1">
                        Place Order
                      </button>
                    </div>

                    <p className="uk-text-center uk-text-muted uk-margin-small-top">
                      Payment integration coming soon...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
