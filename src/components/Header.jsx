import { Link } from "react-router-dom"
import pmitLogodark from '../../src/external/assets/img/logo-2.png'
import pmitLogolight from '../../src/external/assets/img/logo-3.png'


function Header(){
    return(
        <>
        <header className="header sticky-active">
  <div className="primary-header">
    <div className="primary-header-inner">
      <div className="header-logo d-lg-block">
        <Link to="/">
          <img className="logo-dark" src={pmitLogodark} alt="Logo" />
          <img className="logo-light" src={pmitLogolight} alt="Logo" />
        </Link>
      </div>
      <div className="header-right-wrap">
        <div className="header-menu-wrap">
          <div className="mobile-menu-items">
            <ul>
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li className="menu-item-has-children">
                <Link to="/">About Us</Link>
              </li>
              <li className="menu-item-has-children">
                <Link to="/">Services</Link>
                <ul>
                  <li>
                    <Link to="/">
                      Web Design &amp; Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Digital Marketing</Link>
                  </li>
                  <li>
                    <Link to="/">Branding</Link>
                  </li>
                  <li>
                    <Link to="/">App Development</Link>
                  </li>
                  <li>
                    <Link to="/">Software Development</Link>
                  </li>
                  {/* <li><a href="index-6.html"></a></li> */}
                </ul>
              </li>
              {/* <li class="menu-item-has-children">

                                  <a href="service.html">Services</a>

                                  <ul>

                                      <li><a href="service.html">Service</a></li>

                                      <li><a href="service-details.html">Service Details</a></li>

                                  </ul>

                              </li>

                              <li class="menu-item-has-children">

                                  <a href="shop.html">Shop</a>

                                  <ul>

                                      <li><a href="shop.html">Shop</a></li>

                                      <li><a href="shop-details.html">Shop Details</a></li>

                                      <li><a href="cart.html">Cart</a></li>

                                      <li><a href="wishlist.html">Wishlist</a></li>

                                      <li><a href="checkout.html">Checkout</a></li>

                                  </ul>

                              </li>

                              <li class="menu-item-has-children">

                                  <a href="blog-grid.html">Blog</a>

                                  <ul>

                                      <li><a href="blog-grid.html">Blog Grid</a></li>

                                      <li><a href="blog-grid-2.html">Blog list</a></li>

                                      <li><a href="blog-details.html">Blog Details</a></li>

                                  </ul>

                              </li> */}
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        {/* /.header-menu-wrap */}
        <div className="header-right">
          <div className="sidebar-icon">
            <button className="sidebar-trigger open">
              <svg
                width={24}
                height={23}
                viewBox="0 0 24 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.300781 0H5.30078V5H0.300781V0Z"
                  fill="currentColor"
                />
                <path
                  d="M0.300781 9H5.30078V14H0.300781V9Z"
                  fill="currentColor"
                />
                <path
                  d="M0.300781 18H5.30078V23H0.300781V18Z"
                  fill="currentColor"
                />
                <path d="M9.30078 0H14.3008V5H9.30078V0Z" fill="currentColor" />
                <path
                  d="M9.30078 9H14.3008V14H9.30078V9Z"
                  fill="currentColor"
                />
                <path
                  d="M9.30078 18H14.3008V23H9.30078V18Z"
                  fill="currentColor"
                />
                <path d="M18.3008 0H23.3008V5H18.3008V0Z" fill="currentColor" />
                <path
                  d="M18.3008 9H23.3008V14H18.3008V9Z"
                  fill="currentColor"
                />
                <path
                  d="M18.3008 18H23.3008V23H18.3008V18Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* /.header-right */}
      </div>
    </div>
    {/* /.primary-header-inner */}
  </div>
</header>

        </>
    )
}



export default Header;