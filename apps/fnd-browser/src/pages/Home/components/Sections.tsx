import React from "react";

import "./assets/vendor/bootstrap/css/bootstrap.css";
import "./assets/vendor/boxicons/css/boxicons.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
// import "./assets/vendor/aos/aos.css";
import "./assets/css/style.css";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

function Sections() {
  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <h1>
            Welcome to <span>TrueCast</span>
          </h1>
          <h2>
            Detect fake news with Web-Scrapping and Advance Machine Learning to
            avoid widespread of misinformation{" "}
          </h2>
          <div className="d-flex">
            <Link
              to={{ pathname: "/predict" }}
              className="btn-get-started scrollto"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="featured-services" className="featured-services">
          <div className="container" data-aos="fade-up">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 mr-5">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="icon">
                    <i className="bi bi-newspaper"></i>
                  </div>
                  <h4 className="title">
                    <a href="">News Detection</a>
                  </h4>
                  <p className="description">
                    Collection News articles worldwide
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 mr-5">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="icon">
                    <i className="bi bi-cpu-fill"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Machine Learning</a>
                  </h4>
                  <p className="description">
                    Designed using Adavanced Machine Learning
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 mr-5">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="icon">
                    <i className="bi bi-browser-chrome"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Web-Scrapping</a>
                  </h4>
                  <p className="description">
                    Scrapping off news searches from various authentic news
                    soruces
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 mr-5">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="icon">
                    <i className="bi bi-globe"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Authenication and Classifcation</a>
                  </h4>
                  <p className="description">
                    Using Passive Agressive Classifier Algorithm for the
                    classifcation of collected news articles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>About</h2>
              <h3>
                Find Out More <span>About Us</span>
              </h3>
              <p>We are here for you no matter where you are.</p>
            </div>

            <div className="row">
              <div
                className="col-lg-6 mt-6"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <img
                  src={require("./assets/img/about.jpg")}
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div
                className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3>Our Commitment</h3>
                <p className="fst-italic">
                  Our top most priority is to bring clarity to chaos.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-book-half"></i>
                    <div>
                      <h5>Ethics</h5>
                      <p>
                        Ethics for TrueCast means ensuring our customers the
                        confidentiality and authenticity of the service they are
                        provided with. A client must be reassured by the fact
                        that the service provided to them is made-to-measure and
                        will not be used for the disinformation.
                      </p>
                    </div>
                  </li>
                  <li>
                    <i className="bi bi-box2-heart"></i>
                    <div>
                      <h5>Quality</h5>
                      <p>
                        TrueCast is committed to ensuring that our news
                        detection and classification are based on the best
                        combination of machine learning methods, information
                        research, creativity and internal quality assurance for
                        fake news detection.{" "}
                      </p>
                    </div>
                  </li>
                  <li>
                    <i className="bi bi-circle-square"></i>
                    <div>
                      <h5>Continuity</h5>
                      <p>
                        TrueCast considers that the continuity of relations on
                        the long term with its clients is the guarantee of the
                        satisfaction of these and the quality of the services
                        provided.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="counts" className="counts">
          <div className="container" data-aos="fade-up">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="bi bi-emoji-smile"></i>
                  <CountUp className="purecounter" end={232} />
                  <p>Happy Clients</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-md-0 mr-5">
                <div className="count-box">
                  <i className="bi bi-journal-richtext"></i>
                  <CountUp className="purecounter" end={50} />
                  <p>News Sources</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 mr-5">
                <div className="count-box">
                  <i className="bi bi-headset"></i>
                  <CountUp className="purecounter" end={78} />
                  <p>Hours Of Support</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 mr-5">
                <div className="count-box">
                  <i className="bi bi-people"></i>
                  <CountUp className="purecounter" end={2} />
                  <p>Hard Workers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="clients" className="clients section-bg">
          <div className="container" data-aos="zoom-in">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src={require("./assets/img/clients/client-1.png")}
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src={require("./assets/img/clients/client-2.png")}
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src={require("./assets/img/clients/client-3.png")}
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src={require("./assets/img/clients/client-4.png")}
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src={require("./assets/img/clients/client-5.png")}
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src={require("./assets/img/clients/client-6.png")}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Services</h2>
              <h3>
                Check our <span>Services</span>
              </h3>
              <p>
                TrueCast is working day & night so that fakes news might not
                haunt you!
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
              // className="columns multiline"
            >
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bi bi-globe2"></i>
                  </div>
                  <h4>
                    <a href="">Global Updates</a>
                  </h4>
                  <p>
                    Follow breaking news on global political, technological and
                    financial markets with our real-time news feed. Access
                    TrueCast news live and read about the latest trends
                    affecting commodities, indices and more.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bi bi-file-earmark-post"></i>
                  </div>
                  <h4>
                    <a href="">News Insight</a>
                  </h4>
                  <p>
                    News Insight features top news and insights on Latest News
                    covering the latest technology developments, political dogma
                    and geographical aspects all across the world.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0 "
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-tachometer"></i>
                  </div>
                  <h4>
                    <a href="">Analytical Reports</a>
                  </h4>
                  <p>
                    Analytical Reports tend to provide us data data insight and
                    best courses of action for the detection of fake news and
                    misinformation on the basis of crawled results
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-world"></i>
                  </div>
                  <h4>
                    <a href="">Newswire</a>
                  </h4>
                  <p>
                    A global service transmitting the latest news stories, crisp
                    topics and weekly news buzz right at your desktop.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 "
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bi bi-calendar2-day-fill"></i>
                  </div>
                  <h4>
                    <a href="">Real-Time</a>
                  </h4>
                  <p>
                    Follow our real-time news feed for latest news and top
                    stories all around the world.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bi bi-person-circle"></i>
                  </div>
                  <h4>
                    <a href="">User Profile</a>
                  </h4>
                  <p>
                    Sign in to your own TrueCast Account, and get the most out
                    of all the services you use.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="testimonials" className="testimonials">
          <div className="container" data-aos="zoom-in">
            <div className="section-title">
              <h2>Team</h2>
            </div>

            <div
              className="testimonials-slider swiper"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src={require("./assets/img/testimonials/testimonials-1.png")}
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Wahaj Khokhar</h3>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      UI/UX Designer, Front-End Developer & Research Lead.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src={require("./assets/img/testimonials/testimonials-2.png")}
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Ahmed Khan</h3>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      MERN Stack Developer and Python Engineer.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section> */}

        <section id="faq" className="faq section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>F.A.Q</h2>
              <h3>
                Frequently Asked <span>Questions</span>
              </h3>
              <p>Feel free for asking qeustions and calrifying your queries.</p>
            </div>

            <div className="row justify-content-center">
              <div className="col-xl-10">
                <ul className="faq-list">
                  <li>
                    <div
                      data-bs-toggle="collapse"
                      className="collapsed question"
                      // ref={faq1Ref}
                    >
                      What is TrueCast?{" "}
                      <i className="bi bi-chevron-down icon-show"></i>
                      <i className="bi bi-chevron-up icon-close"></i>
                    </div>
                    <div
                      id="faq1"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p>
                        TrueCast is a news detection source comprising of
                        Web-Scrapping tools and Machine Learning techniques for
                        identifying Fake news labels using Natural Language
                        Processing.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div
                      data-bs-toggle="collapse"
                      // ref="#faq2"
                      className="collapsed question"
                    >
                      Does the story include attributions or citations to other
                      reliable sources of information?
                      <i className="bi bi-chevron-down icon-show"></i>
                      <i className="bi bi-chevron-up icon-close"></i>
                    </div>
                    <div
                      id="faq2"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p>
                        Consider where the facts of the story come from. Our
                        TrueCast team tends to gather news feeds from various
                        authentic articles like BBC News, CNN, Geo, Dunya,
                        Al-Jazeera, New York Times, Wallstreet Journal & Fox
                        News etc.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div
                      data-bs-toggle="collapse"
                      // ref="#faq3"
                      className="collapsed question"
                    >
                      Does it say who wrote the piece or is it anonymous?{" "}
                      <i className="bi bi-chevron-down icon-show"></i>
                      <i className="bi bi-chevron-up icon-close"></i>
                    </div>
                    <div
                      id="faq3"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p>
                        Check for a date, author and sources which are mentioned
                        in analytical charts or result details.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div
                      data-bs-toggle="collapse"
                      // ref="#faq4"
                      className="collapsed question"
                    >
                      Why using TruceCast?{" "}
                      <i className="bi bi-chevron-down icon-show"></i>
                      <i className="bi bi-chevron-up icon-close"></i>
                    </div>
                    <div
                      id="faq4"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p>
                        TrueCast provides news headlines and plausible news
                        articles from google search engine, social media
                        platforms and various news resources thus giving an
                        immense ease to user for getting updated with latest
                        news.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div
                      data-bs-toggle="collapse"
                      // ref="#faq5"
                      className="collapsed question"
                    >
                      How does TrueCast detects Fake News?{" "}
                      <i className="bi bi-chevron-down icon-show"></i>
                      <i className="bi bi-chevron-up icon-close"></i>
                    </div>
                    <div
                      id="faq5"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p>
                        Though, TrueCast works on the legitimacy of the news
                        resources its fetching news feed and articles from, but
                        its uses various Machine Learning Algorihms for Natural
                        Language Processing and predicting results.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div
                      data-bs-toggle="collapse"
                      // ref="#faq6"
                      className="collapsed question"
                    >
                      Is TrueCast deployed yet?{" "}
                      <i className="bi bi-chevron-down icon-show"></i>
                      <i className="bi bi-chevron-up icon-close"></i>
                    </div>
                    <div
                      id="faq6"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p>
                        Since, it is a Final Year Project of IIUI students, it
                        is only available in developement mode for now, but we
                        intend to increase its avalibility for future purposes.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer">
        <div className="footer-newsletter">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h4>Join Our Newsletter</h4>
                <p>
                  With our free newsletter service, get constantly updated with
                  our latest email news feeds and analytical insights
                </p>
                <form>
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>
                  TrueCast<span>.</span>
                </h3>
                <p>
                  International Islamic University
                  <br />
                  H10, Islamabad, 44000
                  <br />
                  Pakistan <br />
                  <br />
                  <strong>Email:</strong> truecast@gmail.com
                  <br />
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="#">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Project Management</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Application Development</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">UI/UX & Graphic Design</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Networks</h4>
                <p>
                  Feel free to stay in touch with our exquisite team behind
                  TrueCast via social media platforms
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="#" className="facebook">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="#" className="instagram">
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a href="#" className="google-plus">
                    <i className="bx bxl-skype"></i>
                  </a>
                  <a href="#" className="linkedin">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-4">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>TrueCast</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>

      {/* <main id="main">
  
  

  

 

  

  




      
  

 

</main>

<footer id="footer">

  <div className="footer-newsletter">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h4>Join Our Newsletter</h4>
          <p>With our free newsletter service, get constantly updated with our latest email news feeds and analytical insights</p>
          <form action="" method="post">
            <input type="email" name="email"><input type="submit" value="Subscribe">
          </form>
        </div>
      </div>
    </div>
  </div>

  <div className="footer-top">
    <div className="container">
      <div className="row">

        <div className="col-lg-3 col-md-6 footer-contact">
          <h3>TrueCast<span>.</span></h3>
          <p>
            International Islamic University<br/>
            H10, Islamabad, 44000<br/>
            Pakistan <br/><br/>
            <strong>Email:</strong> truecast@gmail.com<br/>
          </p>
        </div>

        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Project Management</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Application Development</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">UI/UX & Graphic Design</a></li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Our Social Networks</h4>
          <p>Feel free to stay in touch with our exquisite team behind TrueCast via social media platforms</p>
          <div className="social-links mt-3">
            <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
            <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
            <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div className="container py-4">
    <div className="copyright">
      &copy; Copyright <strong><span>TrueCast</span></strong>. All Rights Reserved
    </div>
  </div>
</footer>  */}

      <div id="preloader"></div>
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}

export default Sections;
