import { Link } from "react-router-dom";
function ServiceCard ({shape, serviceimage, linkto,Linkhead, linkSub, linkSubText, dPathOne, dPathTwo  }){

    return(
        <>
         <div className="col-lg-3 col-md-6">
              <div className="service-item md-pb-30 fade-top">
                <h4 className="service-text">
                  <Link to={linkto}>{Linkhead}</Link>
                </h4>
                <div className="service-thumb">
                  <div className="overlay-color" />
                  <div className="transparent-shape">
                    <img src={shape} alt="shape" />
                  </div>
                  <img src={serviceimage} alt="service" />
                  <div className="service-icon">
                    <svg
                      width={50}
                      height={50}
                      viewBox="0 0 50 50"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                      d={dPathOne}
                        fill="currentColor"
                      />
                      <path
                       d={dPathTwo}
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <Link to={linkSub} className="service-btn">
                   {linkSubText}
                    <i className="fa fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
        </>

    )

}

export default ServiceCard;