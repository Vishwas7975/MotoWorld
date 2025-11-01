import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/uikit.min.css";
import "../assets/css/main.css";

export default function Bike() {
  const bikes = [
    {
      id: 1,
      name: "Royal Enfield Classic 350",
      image: "/src/assets/img/about-gallery-1.jpg",
      price: "₹1,93,000",
      description:
        "Timeless design and modern performance with unmatched comfort on every road.",
    },
    {
      id: 2,
      name: "Yamaha MT-15",
      image: "/src/assets/img/about-gallery-2.jpg",
      price: "₹1,68,000",
      description:
        "The dark side of Japan — sporty, muscular, and thrilling to ride.",
    },
    {
      id: 3,
      name: "KTM Duke 200",
      image: "/src/assets/img/brand-1.png",
      price: "₹1,96,000",
      description:
        "Sharp, agile, and powerful — perfect for city and highway rides.",
    },
    {
      id: 4,
      name: "TVS Apache RTR 310",
      image: "/src/assets/img/brand-2.png",
      price: "₹2,43,000",
      description:
        "Precision street machine with track DNA and cutting-edge features.",
    },
    {
      id: 5,
      name: "Bajaj Pulsar N250",
      image: "/src/assets/img/brand-3.png",
      price: "₹1,49,000",
      description:
        "Bold, muscular, and dynamic — built for real street performance.",
    },
    {
      id: 6,
      name: "Hero Xtreme 160R",
      image: "/src/assets/img/brand-4.png",
      price: "₹1,32,000",
      description:
        "Quick, stylish, and agile — perfect for city rides with attitude.",
    },
    {
      id: 7,
      name: "Honda Hornet 2.0",
      image: "/src/assets/img/brand-5.png",
      price: "₹1,40,000",
      description:
        "A perfect balance of design, power, and comfort for every ride.",
    },
    {
      id: 8,
      name: "Suzuki Gixxer SF 250",
      image: "/src/assets/img/img-about-3.jpg",
      price: "₹1,98,000",
      description:
        "Aerodynamic full-faired sports bike for road and track adventures.",
    },
  ];

  return (
    <div className="page-contacts">
      <div className="page-wrapper">
        <main className="page-main">
          {/* 🔹 Hero Banner */}
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
                <div className="section-hero__content uk-text-center">
                  <div className="section-hero__title">
                    <span>Find Your Perfect Ride</span>
                    <div className="uk-h1 uk-text-bold">Our Bikes</div>
                  </div>
                  <div className="section-hero__breadcrumb">
                    <ul className="uk-breadcrumb uk-flex uk-flex-center">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <span>Bikes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 🔹 Bike Grid */}
          <div className="uk-container uk-margin-large-top uk-margin-large-bottom">
            <div
              className="uk-grid uk-child-width-1-2@s uk-child-width-1-4@m uk-grid-match"
              data-uk-grid
            >
              {bikes.map((bike) => (
                <div key={bike.id}>
                  <div
                    className="uk-card uk-card-default uk-border-rounded uk-text-center"
                    style={{
                      border: "2px solid rgba(230, 0, 0, 0.7)",
                      borderRadius: "16px",
                      overflow: "hidden",
                      background: "linear-gradient(180deg, #fff, #f9f9f9)",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                      transition: "none",
                    }}
                  >
                    {/* 🔹 Image Click = Bike Details */}
                    <Link to={`/bike/${bike.id}`}>
                      <div className="uk-card-media-top">
                        <img
                          src={bike.image}
                          alt={bike.name}
                          style={{
                            width: "100%",
                            height: "220px",
                            objectFit: "cover",
                            display: "block",
                          }}
                        />
                      </div>
                    </Link>

                    {/* 🔹 Text Details */}
                    <div className="uk-card-body" style={{ padding: "15px 10px" }}>
                      <h4
                        style={{
                          color: "#e60000",
                          fontWeight: "700",
                          marginBottom: "5px",
                        }}
                      >
                        <Link
                          to={`/bike/${bike.id}`}
                          style={{
                            color: "#e60000",
                            textDecoration: "none",
                          }}
                        >
                          {bike.name}
                        </Link>
                      </h4>
                      <p
                        className="uk-text-small uk-text-muted"
                        style={{
                          margin: "0 auto",
                          maxWidth: "230px",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                        title={bike.description}
                      >
                        {bike.description}
                      </p>
                      <h5
                        style={{
                          color: "#111",
                          fontWeight: "bold",
                          marginTop: "10px",
                        }}
                      >
                        {bike.price}
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
