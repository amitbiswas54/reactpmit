import projectThumb from '../../src/external/assets/img/project-1.png'


function ProjectShowCase (){
    return (
        <>
        <section className="project-section pt-130 pb-130">
  <div className="container">
    <div className="project-top heading-space align-items-end">
      <div className="section-heading mb-0">
        <h4
          className="sub-heading after-none"
          data-text-animation="fade-in"
          data-duration="1.5"
        >
          Project Showcase
        </h4>
        <h2
          className="section-title"
          data-text-animation=""
          data-split="word"
          data-duration={1}
        >
          Let’s Look Our Recent <br /> Project Gallery
        </h2>
      </div>
      <a href="javascript:void(0)" className="rr-primary-btn">
        View More Project
        <i className="fa fa-arrow-right" />
      </a>
    </div>
    <div className="project-accordion">
      <div className="accordion" id="projectAccordion">
        <div className="accordion-item project-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <span className="project-content">
                <span className="number">01</span>
                <span className="project-right">
                  <span className="category">UI/UX Design</span>
                  <span className="title">Custom Web Design</span>
                </span>
              </span>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#projectAccordion"
          >
            <div className="accordion-body">
              <div className="hover-content">
                <div className="content-left">
                  <p>
                    We create visually appealing and responsive websites
                    tailored to engage users and improve conversion rates,
                    ensuring your brand stands out online.
                  </p>
                  <a
                    href="web-design-development.html"
                    className="rr-primary-btn"
                  >
                    View Details
                    <i className="fa fa-arrow-right" />
                  </a>
                </div>
                <div className="content-right">
                  <div className="project-thumb">
                    <img src={projectThumb} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item project-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <span className="project-content">
                <span className="number">02</span>
                <span className="project-right">
                  <span className="category">Digital Marketing</span>
                  <span className="title">Results-Driven Strategy</span>
                </span>
              </span>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#projectAccordion"
          >
            <div className="accordion-body">
              <div className="hover-content">
                <div className="content-left">
                  <p>
                    Our data-driven digital marketing strategies boost your
                    online presence, attract targeted traffic, and increase ROI
                    through SEO, PPC, social media, and more.
                  </p>
                  <a href="digital-marketing.html" className="rr-primary-btn">
                    View Details
                    <i className="fa fa-arrow-right" />
                  </a>
                </div>
                <div className="content-right">
                  <div className="project-thumb">
                    <img src={projectThumb} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item project-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <span className="project-content">
                <span className="number">03</span>
                <span className="project-right">
                  <span className="category">Branding</span>
                  <span className="title">Creative Design</span>
                </span>
              </span>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#projectAccordion"
          >
            <div className="accordion-body">
              <div className="hover-content">
                <div className="content-left">
                  <p>
                    We crafted unique brand identities through creative design
                    that captures your brand’s essence.
                  </p>
                  <a href="branding.html" className="rr-primary-btn">
                    View Details
                    <i className="fa fa-arrow-right" />
                  </a>
                </div>
                <div className="content-right">
                  <div className="project-thumb">
                    <img src={projectThumb} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item project-item">
          <h2 className="accordion-header" id="projectHeadingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#projectCollapseFour"
              aria-expanded="false"
              aria-controls="projectCollapseFour"
            >
              <span className="project-content">
                <span className="number">05</span>
                <span className="project-right">
                  <span className="category">Application Design</span>
                  <span className="title">App Design and Development</span>
                </span>
              </span>
            </button>
          </h2>
          <div
            id="projectCollapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="projectHeadingFour"
            data-bs-parent="#projectAccordion"
          >
            <div className="accordion-body">
              <div className="hover-content">
                <div className="content-left">
                  <p>
                    We develop intuitive, feature-rich mobile applications that
                    enhance user engagement and drive business growth across
                    Android.
                  </p>
                  <a href="app-development.html" className="rr-primary-btn">
                    View Details
                    <i className="fa fa-arrow-right" />
                  </a>
                </div>
                <div className="content-right">
                  <div className="project-thumb">
                    <img src={projectThumb} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item project-item">
          <h2 className="accordion-header" id="projectHeadingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#projectCollapseSix"
              aria-expanded="false"
              aria-controls="projectCollapseSix"
            >
              <span className="project-content">
                <span className="number">06</span>
                <span className="project-right">
                  <span className="category">Software Development</span>
                  <span className="title">Tailored Custom Software</span>
                </span>
              </span>
            </button>
          </h2>
          <div
            id="projectCollapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="projectHeadingSix"
            data-bs-parent="#projectAccordion"
          >
            <div className="accordion-body">
              <div className="hover-content">
                <div className="content-left">
                  <p>
                    From enterprise software to custom solutions, our
                    development team builds scalable, secure, and efficient
                    applications that streamline business operations.
                  </p>
                  <a
                    href="software-development.html"
                    className="rr-primary-btn"
                  >
                    View Details
                    <i className="fa fa-arrow-right" />
                  </a>
                </div>
                <div className="content-right">
                  <div className="project-thumb">
                    <img src={projectThumb} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    )
}

export default ProjectShowCase;