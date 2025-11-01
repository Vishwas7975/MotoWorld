import React from "react";

import logo from "../assets/img/logo.svg";
import news1 from "../assets/img/news-thumb-1.jpg";
import news2 from "../assets/img/news-thumb-2.jpg";
import news3 from "../assets/img/news-thumb-3.jpg";

function Footer() {
  return (
    <footer className="page-footer">
      <div className="page-footer__top">
        <div className="uk-container">
          <div
            className="uk-grid uk-grid-small uk-child-width-1-4@l uk-child-width-1-2@s"
            data-uk-grid=""
          >
            {/* --- Column 1 --- */}
            <div>
              <div className="uk-margin-medium">
                <div className="logo">
                  <a className="logo__link" href="/">
                    <div className="logo__icon">
                      <img src={logo} alt="KeyMoto" />
                    </div>
                    <div className="logo__text">MOTOWORLD</div>
                  </a>
                </div>
              </div>
              <div className="uk-margin-medium">
                <p>
                  Dolore magna aliq quis nostrud ulamco laboris nisi ut aliquip
                  exa comads conseq asuis aute irure dolor reprehenderit.
                </p>
              </div>
              <div className="uk-margin-medium">
                <div className="support">
                  <a className="support__link" href="tel:13004905008">
                    <div className="support__icon">
                      <i className="fas fa-headset"></i>
                    </div>
                    <div className="support__desc">
                      <div className="support__label">
                        Talk with our support
                      </div>
                      <div className="support__phone">+1 (300) 490 5008</div>
                    </div>
                  </a>
                </div>
              </div>
            
            </div>

            {/* --- Column 2 --- */}
            <div>
              <div className="page-footer__column page-footer__menu">
                <div className="uk-h4">About Motoworld</div>
                <ul className="list-decor">
                  <li><a href="#">Our Company</a></li>
                  <li><a href="#">Renting Facility</a></li>
                  <li><a href="#">MotoWorld Inventory</a></li>
                  <li><a href="#">Our Services</a></li>
                  <li><a href="#">Clients Testimonials</a></li>
                  <li><a href="#">Mission & Vision</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
            </div>

            {/* --- Column 3 --- */}
            <div>
              <div className="page-footer__column page-footer__news">
                <div className="uk-h4">Latest News</div>
                <ul className="latest-news-list">
                  <li>
                    <div className="latest-news-item">
                      <div className="latest-news-item__thumb">
                        <img src={news1} alt="news" />
                      </div>
                      <div className="latest-news-item__info">
                        <a href="#!" className="latest-news-item__title">
                          We Allow Each Rider To Customize Their Rides.
                        </a>
                        <div className="latest-news-item__date">
                          August 25, 2021
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="latest-news-item">
                      <div className="latest-news-item__thumb">
                        <img src={news2} alt="news" />
                      </div>
                      <div className="latest-news-item__info">
                        <a href="#!" className="latest-news-item__title">
                          Motorcycles Which Feels Just Right Like Ease.
                        </a>
                        <div className="latest-news-item__date">
                          August 25, 2021
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="latest-news-item">
                      <div className="latest-news-item__thumb">
                        <img src={news3} alt="news" />
                      </div>
                      <div className="latest-news-item__info">
                        <a href="#!" className="latest-news-item__title">
                          Gaze Upon Unbelievably Exciting To Futuristic.
                        </a>
                        <div className="latest-news-item__date">
                          August 25, 2021
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* --- Column 4 --- */}
            <div>
              <div className="page-footer__column page-footer__info">
                <div className="uk-h4">Dealer Information</div>
                <ul className="info-list">
                  <li>
                    <div className="info-list-item">
                      <div className="info-list-item__title">Sales Hours</div>
                      <div className="info-list-item__value">
                        Monday - Friday: <br /> 09:00 am to 06:00 pm
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="info-list-item">
                      <div className="info-list-item__title">Service Hours</div>
                      <div className="info-list-item__value">
                        Monday - Friday: <br /> 09:00 am to 06:00 pm
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="info-list-item">
                      <div className="info-list-item__title">
                        Parts Shop Hours
                      </div>
                      <div className="info-list-item__value">
                        Monday - Friday: <br /> 09:00 am to 06:00 pm
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Footer Bottom --- */}
      <div className="page-footer__bottom">
        <div className="uk-container">
          <div className="uk-text-center">
            © 2025 - Motoworld Dealer Template. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
