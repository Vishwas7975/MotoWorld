import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/uikit.min.css";
import "../assets/css/main.css";

export default function Cart() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate("/checkout");
  };

  // Calculate total price
  const total = cart.reduce((sum, item) => sum + Number(item.price || 0), 0);

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
                    <span>Your Ride Awaits</span>
                    <div className="uk-h1 uk-text-danger">Your Cart</div>
                  </div>
                  <div className="section-hero__breadcrumb">
                    <ul className="uk-breadcrumb">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <span>Cart</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 🔹 Cart Section */}
          <div className="uk-container uk-margin-large-top uk-margin-large-bottom">
            {cart.length === 0 ? (
              <div className="uk-text-center uk-margin-large-top">
                <h3 className="uk-text-danger">Your cart is empty</h3>
                <p>Explore our bikes and add your favorite ride!</p>
                <Link to="/bikes" className="uk-button uk-button-danger">
                  Browse Bikes
                </Link>
              </div>
            ) : (
              <div>
                <div
                  className="uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m"
                  data-uk-grid
                >
                  {cart.map((item, index) => (
                    <div key={index}>
                      <div
                        className="uk-card uk-card-default uk-card-body uk-text-center uk-border-rounded"
                        style={{
                          border: "2px solid #e3000f",
                          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "cover",
                            borderRadius: "10px",
                          }}
                        />
                        <h4 className="uk-text-danger uk-margin-small-top">
                          {item.name}
                        </h4>
                        <p style={{ color: "#666", marginBottom: "5px" }}>
                          {item.description
                            ? item.description.slice(0, 50) + "..."
                            : "Premium performance and style combined."}
                        </p>
                        <h5 className="uk-text-bold uk-margin-small-top">
                          ₹{item.price}
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 🔹 Total and Buttons */}
                <div
                  className="uk-text-center uk-margin-large-top"
                  style={{
                    borderTop: "2px solid #e3000f",
                    paddingTop: "20px",
                  }}
                >
                  <h3>
                    Total: <span className="uk-text-danger">₹{total}</span>
                  </h3>

                  <button
                    className="uk-button uk-button-danger uk-margin-small-right"
                    onClick={handleBuyNow}
                  >
                    Buy Now
                  </button>

                  <button
                    className="uk-button uk-button-secondary"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            )}

            <div className="uk-margin-top uk-text-center">
              <Link to="/" className="uk-button uk-button-default">
                Back to Home
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
