import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../assets/css/uikit.min.css";
import "../assets/css/main.css";

export default function BikeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const bikes = {
    1: {
      name: "Royal Enfield Classic 350",
      image: "src/assets/img/bikes/classic350.jpg",
      price: "₹1,93,000",
      description:
        "The Royal Enfield Classic 350 is a timeless icon of Indian motorcycling. Powered by a 349cc engine, it offers smooth performance and classic style.",
    },
    2: {
      name: "Yamaha MT-15",
      image: "src/assets/img/bikes/mt15.jpg",
      price: "₹1,68,000",
      description:
        "The Yamaha MT-15 is a sporty streetfighter with performance and agility. Perfect for thrill-seekers.",
    },
  };

  const bike = bikes[id];

  if (!bike) {
    return (
      <div className="uk-container uk-margin-large-top uk-margin-large-bottom">
        <h2>Bike Not Found</h2>
        <Link to="/" className="uk-button uk-button-danger">
          Back to Home
        </Link>
      </div>
    );
  }

  // 🛒 Add to cart redirect
  const handleCart = () => {
    navigate("/cart");
  };

  return (
    <div className="page-contacts">
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
                    <span>Power, Style, and Precision</span>
                    <div className="uk-h1">{bike.name}</div>
                  </div>
                  <div className="section-hero__breadcrumb">
                    <ul className="uk-breadcrumb">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <span>Bike Details</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 🔹 Bike Detail Section */}
          <div className="uk-container uk-margin-large-top uk-margin-large-bottom uk-text-justify">
            <div className="uk-grid uk-grid-large" data-uk-grid>
              <div className="uk-width-1-2@m">
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="uk-border-rounded"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              <div className="uk-width-1-2@m">
                <h2 className="uk-text-danger">{bike.name}</h2>
                <p className="uk-text-lead">{bike.description}</p>
                <h3 className="uk-text-bold">Price: {bike.price}</h3>

                <div className="uk-margin-top">
                  <button
                    className="uk-button uk-button-danger uk-margin-small-right"
                    onClick={handleCart}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="uk-button uk-button-primary"
                    onClick={() => navigate("/checkout")}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
