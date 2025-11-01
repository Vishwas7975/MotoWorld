import React from "react";
import "../assets/css/uikit.min.css";
import "../assets/css/main.css";
import { Link } from "react-router-dom";

export default function AddToCart() {
  return (
    <div className="page-cart">
      <div className="page-wrapper">
        <main className="page-main">
          {/* 🔹 Hero Section */}
          <div className="section-hero">
            <div
              className="section-hero__bg"
              style={{
                backgroundImage: "url(/src/assets/img/bg/contacts.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="uk-container">
                <div className="section-hero__content">
                  <div className="section-hero__title">
                    <span>Ride With Passion</span>
                    <div className="uk-h1 uk-text-danger">Your Cart</div>
                  </div>
                  <div className="section-hero__breadcrumb">
                    <ul className="uk-breadcrumb">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <span>Add to Cart</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 🔹 Cart Section */}
          <div className="uk-container uk-margin-large-top uk-margin-large-bottom">
            <div className="uk-grid-large" data-uk-grid>
              {/* 🔸 Left Section - Cart Items */}
              <div className="uk-width-2-3@m">
                <div
                  className="uk-card uk-card-default uk-card-body"
                  style={{
                   
                    borderRadius: "12px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  }}
                >
                  <h3 className="uk-text-bold uk-text-danger">
                    My Cart (2 Items)
                  </h3>
                  <hr />

                  {/* 🏍️ Item 1 */}
                  <div className="uk-grid-small uk-margin" data-uk-grid>
                    <div className="uk-width-auto">
                      <img
                        src="/src/assets/img/product-1.jpg"
                        alt="Royal Enfield Classic 350"
                        style={{
                          width: 120,
                          borderRadius: 10,
                          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                        }}
                      />
                    </div>
                    <div className="uk-width-expand">
                      <h4 className="uk-margin-remove uk-text-danger">
                        Royal Enfield Classic 350
                      </h4>
                      <p className="uk-margin-remove">
                        Color: Black | Type: Cruiser
                      </p>
                      <p className="uk-text-success uk-margin-small-top">
                        In Stock
                      </p>
                      <h5 className="uk-text-bold uk-margin-small-top">
                        ₹1,93,000
                      </h5>
                      <div>
                        <button className="uk-button uk-button-text uk-text-danger">
                          REMOVE
                        </button>
                        <button className="uk-button uk-button-text">
                          SAVE FOR LATER
                        </button>
                      </div>
                    </div>
                  </div>

                  <hr />

                  {/* 🏍️ Item 2 */}
                  <div className="uk-grid-small uk-margin" data-uk-grid>
                    <div className="uk-width-auto">
                      <img
                        src="/src/assets/img/product-4.jpg"
                        alt="Yamaha MT-15"
                        style={{
                          width: 120,
                          borderRadius: 10,
                          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                        }}
                      />
                    </div>
                    <div className="uk-width-expand">
                      <h4 className="uk-margin-remove uk-text-danger">
                        Yamaha MT-15
                      </h4>
                      <p className="uk-margin-remove">
                        Color: Blue | Type: Sports
                      </p>
                      <p className="uk-text-success uk-margin-small-top">
                        In Stock
                      </p>
                      <h5 className="uk-text-bold uk-margin-small-top">
                        ₹1,68,000
                      </h5>
                      <div>
                        <button className="uk-button uk-button-text uk-text-danger">
                          REMOVE
                        </button>
                        <button className="uk-button uk-button-text">
                          SAVE FOR LATER
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 🔸 Right Section - Price Details */}
              <div className="uk-width-1-3@m">
                <div
                  className="uk-card uk-card-default uk-card-body"
                  style={{
                   
                    borderRadius: "12px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  }}
                >
                  <h4 className="uk-text-bold uk-text-danger">
                    PRICE DETAILS
                  </h4>
                  <hr />
                  <p className="uk-flex uk-flex-between">
                    <span>Price (2 items)</span>
                    <span>₹3,61,000</span>
                  </p>
                  <p className="uk-flex uk-flex-between uk-text-success">
                    <span>Discount</span>
                    <span>− ₹12,000</span>
                  </p>
                  <p className="uk-flex uk-flex-between">
                    <span>Delivery Charges</span>
                    <span className="uk-text-success">Free</span>
                  </p>
                  <hr />
                  <h4 className="uk-flex uk-flex-between uk-text-bold">
                    <span>Total Amount</span>
                    <span>₹3,49,000</span>
                  </h4>
                  <p className="uk-text-success uk-margin-small-top">
                    You will save ₹12,000 on this order
                  </p>

                  <button
                    className="uk-button uk-button-danger uk-width-1-1 uk-margin-top"
                    style={{ padding: "10px", fontWeight: "600" }}
                  >
                    PLACE ORDER
                  </button>
                </div>
              </div>
            </div>

            {/* 🔹 Back Button */}
            <div className="uk-text-center uk-margin-large-top">
              <Link to="/bikes" className="uk-button uk-button-default"style={{
                color: "#e60000",
              }}>
                
                Continue Shopping
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
