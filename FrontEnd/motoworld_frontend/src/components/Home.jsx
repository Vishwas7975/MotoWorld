export default function Home() {
  return (
    <>
      {/* Slideshow Section */}
      <div classNameName="section-hero"> 
   
        <div data-uk-slideshow="autoplay: true; min-height: 560; max-height: 950; animation: fade">
          <div className="uk-position-relative" tabindex="-1">
            <ul className="uk-slideshow-items">
              <li className="slideshow-item"><img src="src/assets/img/img-home-slideshow.jpg" alt =""data-uk-cover/>
                <div className="uk-position-center uk-position-small">
                  <div className="uk-container">
                    <div className="uk-grid" data-uk-grid>
                      <div className="uk-width-3-5@m">
                        <div className="slideshow-item__content">
                          <div className="slideshow-item__decor" data-uk-slideshow-parallax="opacity: 0,1">MotoWorld</div>
                          <div className="slideshow-item__title" data-uk-slideshow-parallax="x: 100,-100"><span>Taking rides to a newer level</span>
                            <div className="uk-h2">the combination of<br/> power & perfection</div>
                          </div>
                          <div className="slideshow-item__desc" data-uk-slideshow-parallax="x: 200,-200">
                            <p>Consectetur adipiscing elit sed ipsum eiusmod tempor ncdidunt<br/> labore et dolore magna aliqua quis ipsum suspendisse.</p>
                          </div>
                          <div className="slideshow-item__btns" data-uk-slideshow-parallax="x: 300,-300"><a className="uk-button uk-button-danger" href="#section-about">Learn more </a><a className="uk-button uk-button-secondary" href="#section-category">Motorcycles </a></div>
                        </div>
                      </div>
                      <div className="uk-width-2-5@m uk-visible@l"></div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="slideshow-item"><img src="src/assets/img/img-home-slideshow-2.jpg" 
              alt="" data-uk-cover/>
                <div className="uk-position-center uk-position-small">
                  <div className="uk-container">
                    <div className="uk-grid" data-uk-grid>
                      <div className="uk-width-2-5@m uk-visible@l"></div>
                      <div className="uk-width-3-5@m">
                        <div className="slideshow-item__content">
                          <div className="slideshow-item__decor" data-uk-slideshow-parallax="opacity: 0,1">MotoWorld</div>
                          <div className="slideshow-item__title" data-uk-slideshow-parallax="x: 100,-100"><span>Taking rides to a newer level</span>
                            <div className="uk-h2">putting a reliable<br/> machine on road</div>
                          </div>
                          <div className="slideshow-item__desc" data-uk-slideshow-parallax="x: 200,-200">
                            <p>Consectetur adipiscing elit sed ipsum eiusmod tempor ncdidunt<br/> labore et dolore magna aliqua quis ipsum suspendisse.</p>
                          </div>
                          <div className="slideshow-item__btns" data-uk-slideshow-parallax="x: 300,-300"><a className="uk-button uk-button-danger" href="#!">Learn more </a><a className="uk-button uk-button-secondary" href="#!">Motorcycles </a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="slideshow-item"><img src="src/assets/img/img-home-slideshow-3.jpg"
               alt =""data-uk-cover/>
                <div className="uk-position-center uk-position-small">
                  <div className="uk-container">
                    <div className="uk-grid" data-uk-grid>
                      <div className="uk-width-3-5@m">
                        <div className="slideshow-item__content">
                          <div className="slideshow-item__decor" data-uk-slideshow-parallax="opacity: 0,1">MotoWorld</div>
                          <div className="slideshow-item__title" data-uk-slideshow-parallax="x: 100,-100"><span>Taking rides to a newer level</span>
                            <div className="uk-h2">modern designed<br/> for a Sleek look</div>
                          </div>
                          <div className="slideshow-item__desc" data-uk-slideshow-parallax="x: 200,-200">
                            <p>Consectetur adipiscing elit sed ipsum eiusmod tempor ncdidunt<br/> labore et dolore magna aliqua quis ipsum suspendisse.</p>
                          </div>
                          <div className="slideshow-item__btns" data-uk-slideshow-parallax="x: 300,-300"><a className="uk-button uk-button-danger" href="#!">Learn more </a><a className="uk-button uk-button-secondary" href="#!">Motorcycles </a></div>
                        </div>
                      </div>
                      <div className="uk-width-2-5@m uk-visible@l"></div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="slideshow-nav"><a href="#" data-uk-slidenav-previous data-uk-slideshow-item="previous"></a>
            <div className="slideshow-nav__count">
              <ul>
                <li data-uk-slideshow-item="0"><span>1 </span></li>
                <li data-uk-slideshow-item="1"><span>2</span></li>
                <li data-uk-slideshow-item="2"><span>3</span></li>
              </ul><span>/ 3</span>
            </div><a href="#" data-uk-slidenav-next data-uk-slideshow-item="next"></a>
          </div>
        </div>
        
        
        
        </div>
     

      {/* About Section */}
      <div className="section-about" id="section-about"> 
        
        
          <div className="section-about" id="section-about">
        <div className="uk-section-large uk-container">
          <div className="uk-grid uk-grid-collapse" data-uk-grid>
            <div className="uk-width-1-3@m"><img class="section-about__img" 
            src="src/assets/img/img-about.jpg" alt="img-about"/></div>
            <div className="uk-width-2-3@m">
              <div className="section-about__content">
                <div className="section-title"> <span>Taking rides to a newer level</span>
                  <h3 className="uk-h2">Great performance<br/> that matters in future</h3>
                </div>
                <div className="section-content">
                  <p>Dolore magna aliqua quis nostrud exercitation ullamco laboris nisi ut aliquip exa comads consequat asuis aute irure dolor in reprehenderit in voluptate velit esse cilum dolore fugiat sed ipsum nulla pariatur nostrul done elit magna.</p>
                  <div className="uk-margin-medium">
                    <div className="uk-grid uk-child-width-1-2@s" data-uk-grid>
                      <div>
                        <div className="block-icon">
                          <div className="block-icon__icon"><img className="block-icon__img"
                           src="src/assets/img/icons/about-1.svg" alt="icon-about"/></div>
                          <div className="block-icon__desc">
                            <div className="block-icon__title">Cutting Edge Tech</div>
                            <div className="block-icon__text">Exercitation ullamco laboris nis exa duis aute irure dolor.</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="block-icon">
                          <div className="block-icon__icon"><img className="block-icon__img" 
                          src="src/assets/img/icons/about-2.svg" alt="icon-about"/></div>
                          <div className="block-icon__desc">
                            <div className="block-icon__title">Perfect Styling</div>
                            <div className="block-icon__text">Exercitation ullamco laboris nis exa duis aute irure dolor.</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="block-icon">
                          <div className="block-icon__icon"><img className="block-icon__img" 
                          src="src/assets/img/icons/about-3.svg" alt="icon-about"/></div>
                          <div className="block-icon__desc">
                            <div className="block-icon__title">Distinctive Beauty</div>
                            <div className="block-icon__text">Exercitation ullamco laboris nis exa duis aute irure dolor.</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="block-icon">
                          <div className="block-icon__icon"><img className="block-icon__img" 
                          src="src/assets/img/icons/about-4.svg" alt="icon-about"/></div>
                          <div className="block-icon__desc">
                            <div className="block-icon__title">Radiance Polishing </div>
                            <div className="block-icon__text">Exercitation ullamco laboris nis exa duis aute irure dolor.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="section-about__gallery">
                    <div className="uk-grid uk-grid-small uk-child-width-1-2@s" data-uk-grid>
                      <div><img className="uk-width-1-1"
                       src="src/assets/img/about-gallery-1.jpg" alt="about-gallery"/></div>
                      <div><img className="uk-width-1-1"
                       src="src/assets/img/about-gallery-2.jpg" alt="about-gallery"/></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
      </div>
      <div className="section-category" id="section-category">
  <div className="uk-container uk-container-large">
    <div className="uk-position-relative" tabIndex="-1" data-uk-slider>
      <ul className="uk-slider-items uk-grid uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-child-width-1-5@xl">
        <li>
          <div className="category-item">
            <a className="category-item__link" href="#">
              <div className="category-item__title">
                <strong>Roadster</strong>
                <span>Explore type</span>
              </div>
              <div className="category-item__icon">
                <img src="src/assets/img/icons/category-1.svg" alt="icon-category" data-uk-svg />
              </div>
            </a>
          </div>
        </li>

        <li>
          <div className="category-item">
            <a className="category-item__link" href="#">
              <div className="category-item__title">
                <strong>Sportbike</strong>
                <span>Explore type</span>
              </div>
              <div className="category-item__icon">
                <img src="src/assets/img/icons/category-2.svg" alt="icon-category" data-uk-svg />
              </div>
            </a>
          </div>
        </li>

        <li>
          <div className="category-item">
            <a className="category-item__link" href="#">
              <div className="category-item__title">
                <strong>Chopper</strong>
                <span>Explore type</span>
              </div>
              <div className="category-item__icon">
                <img src="src/assets/img/icons/category-3.svg" alt="icon-category" data-uk-svg />
              </div>
            </a>
          </div>
        </li>

        <li>
          <div className="category-item">
            <a className="category-item__link" href="#">
              <div className="category-item__title">
                <strong>Cruiser</strong>
                <span>Explore type</span>
              </div>
              <div className="category-item__icon">
                <img src="src/assets/img/icons/category-4.svg" alt="icon-category" data-uk-svg />
              </div>
            </a>
          </div>
        </li>

        <li>
          <div className="category-item">
            <a className="category-item__link" href="#">
              <div className="category-item__title">
                <strong>Touring bike</strong>
                <span>Explore type</span>
              </div>
              <div className="category-item__icon">
                <img src="src/assets/img/icons/category-5.svg" alt="icon-category" data-uk-svg />
              </div>
            </a>
          </div>
        </li>
      </ul>

      <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin-top"></ul>
    </div>
  </div>
</div>

{/* -------- Section Info -------- */}
<div className="section-info">
  <div className="uk-container uk-container-expand">
    <div className="uk-grid uk-flex-middle uk-child-width-1-2@m" data-uk-grid="">
      <div>
        <img
          className="section-info__img"
          src="src/assets/img/img-info.png"
          alt="img-info"
        />
      </div>
      <div>
        <div className="section-info__content">
          <div className="section-title">
            <span>Taking rides to a newer level </span>
            <h3 className="uk-h2">
              A step above with
              <br />
              rider-friendly nature
            </h3>
          </div>
          <div className="section-content">
            <p>
              Dolore magna aliqua quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cilum dol sed ipsum nulla pariatur nostrul
              done elit magna.
            </p>
            <div className="uk-margin-medium-top">
              <div
                className="uk-grid uk-grid-small uk-child-width-1-3@l uk-child-width-1-2@m uk-child-width-1-3@s"
                data-uk-grid=""
              >
                <div>
                  <div className="block-icon">
                    <div className="block-icon__icon">
                      <img
                        className="block-icon__img"
                        src="src/assets/img/icons/info-1.svg"
                        alt="icon-info"
                      />
                    </div>
                    <div className="block-icon__desc">
                      <div className="block-icon__title">
                        Easy To Book for rentals
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="block-icon">
                    <div className="block-icon__icon">
                      <img
                        className="block-icon__img"
                        src="src/assets/img/icons/info-2.svg"
                        alt="icon-info"
                      />
                    </div>
                    <div className="block-icon__desc">
                      <div className="block-icon__title">
                        Longer rides for All day
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="block-icon">
                    <div className="block-icon__icon">
                      <img
                        className="block-icon__img"
                        src="src/assets/img/icons/info-3.svg"
                        alt="icon-info"
                      />
                    </div>
                    <div className="block-icon__desc">
                      <div className="block-icon__title">
                        Get mileage Unlimited
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* -------- Section Video -------- */}
<div className="section-video">
  <div className="video-block">
    <div className="video-info">
      <div className="video-info__title">
        The Powerful performance
        <br />
        With optimized balanced
      </div>
      <div className="video-info__subtitle">
        Adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore.
      </div>
      <div className="video-info__list-thumb">
        <ul>
          <li>
            <img
              src="src/assets/img/img-video-thumb-1.jpg"
              alt="img-video-thumb"
            />
          </li>
          <li>
            <img
              src="src/assets/img/img-video-thumb-2.jpg"
              alt="img-video-thumb"
            />
          </li>
          <li>
            <img
              src="src/assets/img/img-video-thumb-3.jpg"
              alt="img-video-thumb"
            />
          </li>
        </ul>
      </div>
    </div>
    <div className="video-box" data-uk-lightbox="video-autoplay: true">
      <a
        href="https://www.youtube.com/watch?v=c2pz2mlSfXA"
        data-caption="YouTube"
        data-attrs="width: 1280; height: 720;"
      >
        <div className="btn-play">
          <img src="src/assets/img/icons/play.png" alt="play" />
          <span>Play video</span>
        </div>
      </a>
    </div>
  </div>
</div>
<section className="section-rental">
  <div className="uk-section uk-container">
    <div className="section-title uk-text-center">
      <img src="src/assets/img/logo-dark.svg" alt="" />
      <span>Taking rides to a newer level</span>
      <h3 className="uk-h2">Motorcycles for Sale</h3>
    </div>

    <div className="section-content">
      <div className="uk-text-center uk-margin-medium-bottom">
        <p>
          Dolore magna aliqua quis nostrud exercitation ullamco laboris nisi ut
          aliquip exa comds <br /> consequat duis aute irure dolor repreh
          enderit in voluptate velit esse cilum.
        </p>
      </div>

      <div className="uk-position-relative" tabIndex="-1" data-uk-slider="">
        <ul className="uk-slider-items uk-child-width-1-1">
          <li>
            <div className="rental-item">
              <div
                className="uk-grid uk-grid-small uk-flex-middle"
                data-uk-grid=""
              >
                <div className="uk-width-3-5@m uk-flex-last@m">
                  <div className="rental-item__img">
                    <img
                      src="src/assets/img/img-rental.jpg"
                      alt="Ducati X Diavel S"
                    />
                  </div>
                </div>
                <div className="uk-width-2-5@m uk-flex-first@m">
                  <div className="rental-item__desc">
                    <div className="rental-item__title">
                      2021 Ducati X Diavel S <br /> - Glossy Black
                    </div>
                    <div className="rental-item__price">
                      <div className="label">Rent for as low as</div>
                      <div className="price">$35</div>
                      <div className="value">
                        <span>per </span>
                        <span>day</span>
                      </div>
                    </div>
                    <div className="rental-item__text">
                      Meet the new Ducati - A beauty with high speed excitement
                      cruiser control, best of both worlds & sporty power.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
