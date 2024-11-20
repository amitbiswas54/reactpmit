
import faqShape1 from "../external/assets/img/faq-shape-1.png";
import faqImg from "../external/assets/img/faq-img.png";


function Faq(){
    return(
 
       <>

  <div className="faq-section pt-130 pb-130">
    <div className="faq-shape">
      <img src={faqShape1} alt="shape" />
    </div>
    <div className="faq-top-shape" />
    <div className="container">
      <div className="row gy-lg-0 gy-4">
        <div className="col-xl-6 col-lg-12 col-md-12">
          <div className="faq-content">
            <div className="section-heading">
              <h4
                className="sub-heading after-none"
                data-text-animation="fade-in"
                data-duration="1.5"
              >
                Just Ask us some question
              </h4>
              <h2
                className="section-title"
                data-text-animation=""
                data-split="word"
                data-duration={1}
              >
                Digital Solution That Boost Your Business Visibility
              </h2>
            </div>
            <div className="accordion" id="accordionExampleTwo">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseFour"
                  >
                    How can digital marketing help grow your business?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExampleTwo"
                >
                  <div className="accordion-body">
                    Digital marketing boosts your online visibility, drives
                    targeted traffic to your website, and converts leads into
                    loyal customers, ensuring sustainable growth.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Which digital marketing strategy is best for your business?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExampleTwo"
                >
                  <div className="accordion-body">
                    The ideal strategy depends on your goals, audience, and
                    industry. We tailor SEO, social media, PPC, and content
                    marketing to align with your business objectives.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    How do you measure the success of digital marketing
                    campaigns?
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSix"
                  data-bs-parent="#accordionExampleTwo"
                >
                  <div className="accordion-body">
                    We track key metrics like website traffic, lead conversions,
                    and ROI using data analytics tools, providing transparent
                    reports to optimize ongoing strategies.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-12 col-md-12">
          <div className="faq-img reveal text-center">
            <img src={faqImg} alt="faq" />
          </div>
        </div>
      </div>
    </div>
  </div>
</>

        
        

    )


}


export default Faq;