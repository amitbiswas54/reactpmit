import footershape from '../../src/external/assets/img/footer-shape.png'
import Brand from './Brand';
import { useEffect } from 'react';



function Footer() {



  useEffect(() => {
    const script = document.createElement('script');
    script.src = '../../src/assets/js/vendor/jquary-3.6.0.min.js'; // Ensure the path matches
    script.async = true;
    document.body.appendChild(script);
  
    return () => {
      document.body.appendChild(script);
    };
  }, []);

  return (

    <>
      <Brand />
      <footer className="footer-section bg-dark-1">
        <div className="shape">
          <img src={footershape} alt="footer" />
        </div>
        <div className="container">
          <div className="row footer-wrap">
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <div className="widget-header">
                  <div className="footer-logo">

                  </div>
                </div>
                <p className="mb-20">
                  Our mission is to bridge the gap between businesses and digital
                  transformation with data-driven solutions that drive growth,
                  engagement, and measurable results.
                </p>

              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-col-2">
                <div className="widget-header">
                  <h3 className="widget-title">Useful Links</h3>
                </div>
                <ul className="footer-list">

                  <li>
                    <a href="javascript:void(0)">Our Gallery</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Terms &amp; Conditions</a>
                  </li>

                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <div className="widget-header">
                  <h3 className="widget-title">Contact Us</h3>
                </div>
                <ul className="address-list">
                  <li>
                    <a href="mailto:care@pmittechnologies.com">
                      care@pmittechnologies.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+91 7605084958">+91 7605084958</a>
                  </li>
                  <li>

                    41/1B, Ramkanto Bose Street <br /> Kolkata - 700 003, India
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <div className="widget-header">
                  <h3 className="widget-title">Subscribe newsletter</h3>
                </div>
                <div className="footer-form mb-20">
                  <form action="#" className="rr-subscribe-form">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Email address"
                    />
                    <input
                      type="hidden"
                      name="action"
                      defaultValue="mailchimpsubscribe"
                    />
                    <button className="submit">Sign Up</button>
                    <div className="clearfix" />
                  </form>
                </div>
                <div className="form-check form-item">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="man"
                  />
                  <label className="form-check-label" htmlFor="man">
                    I’m okay with getting emails and having that tracked to improve
                    my experience
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row copyright-content">
              <div className="col-md-6">
                <p>© 2024 PMIT Technologies. All Rights Reserved.</p>
              </div>
              <div className="col-md-6">
                <ul className="side-menu-social">
                  <li className="facebook">
                    <a href="https://www.facebook.com/pmittechnologies">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="instagram">
                    <a href="https://www.instagram.com/pmittechnologies/">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li className="twitter">
                    <a href="https://x.com/pmittech">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="linkedin-in">
                    <a href="https://www.linkedin.com/company/104944189/admin/page-posts/published/">
                      <i className="fab fa-fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div id="scroll-percentage">
        <span id="scroll-percentage-value" />
      </div>

      <div id="theme-toogle" className="switcher-button">
        <div className="switcher-button-inner-left" />
        <div className="switcher-button-inner" />
      </div>
    </>



  )
}

export default Footer;