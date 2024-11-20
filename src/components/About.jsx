import { Link } from "react-router-dom";
import roundShape from '../external/assets/img/round-shape.png';
import dotedShape from "../external/assets/img/about-dot-shape.png";
import aboutimg from "../external/assets/img/about-img.jpg";
import aboutimg1 from "../external/assets/img/about-img-1.jpg";
import abouttextlinelight from "../external/assets/img/about-text.png";
import abouttextlinedark from "../external/assets/img/about-text-light.png";



function About () {
    return (
        <>
       
       <div className="about-section pb-130">
  <div className="round-shape">
    <img src={roundShape} alt="shape" />
  </div>
  <div className="about-wrap">
    <div className="shape">
      <img src={dotedShape} alt="shape" />
    </div>
    <div className="row about-wrapper align-items-center">
      <div className="col-lg-7">
        <div className="about-content fade-wrapper">
          <div className="section-heading mb-0">
            <h4
              className="sub-heading"
              data-text-animation="fade-in"
              data-duration="1.5"
            >
              About Our Company
            </h4>
            <h2
              className="section-title overflow-hidden"
              data-text-animation=""
              data-split="word"
              data-duration={1}
            >
              Give us your LEGACY, and we'll transform it into a BRAND
            </h2>
            <p>
              At PMIT Technologies, we specialize in creating impactful digital
              marketing strategies and stunning web designs that elevate brands.
              Our team blends creativity with technology to deliver tailored
              solutions that boost online visibility, engage audiences, and
              drive measurable results. Let us help you turn your digital
              presence into a powerful business asset.
            </p>
            <a href="javascript:void(0)" className="rr-primary-btn">
              To Know More
              <i className="fa fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="about-img-wrap">
          <div className="img-shape" />
          <div className="about-img reveal">
            <img src={aboutimg} className="img-1"  alt="img" />
          </div>
          <div className="about-img-2 reveal">
            <img className="img-2" src={aboutimg1} alt="img" />
          </div>
        </div>
      </div>
    </div>
    <div className="about-text">
      <img className="dark-img" src={abouttextlinelight} alt="about" />
      <img
        className="light-img"
        src={abouttextlinedark}
        alt="about"
      />
    </div>
  </div>
</div>

        </>
    )
}

export default About;