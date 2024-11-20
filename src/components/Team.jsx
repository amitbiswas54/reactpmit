import babluDutta from '../external/assets/img/Bablu_Dutta.png'
import DebbornineeMistri from '../external/assets/img/Debborninee_Mistri.png'
import amitBiswas from '../external/assets/img/Amit_Biswas.png'
import saptakDas from '../external/assets/img/Saptak_Das.png'
import parthaSakha from '../external/assets/img/Partha_Sakha_Adhikary.png'
import sudipSaha from '../external/assets/img/Sudip_Saha.png'
import pritamModak from '../external/assets/img/Pritam_Modak.png'
import rohit from '../external/assets/img/Rohit_Dey.png'
import riti from '../external/assets/img/Riti_Mukherjee.png'


function Team(){
    return(
        <>

<div className="running-text testi">
  <div className="carouselTicker carouselTicker-nav" data-speed="fast">
    <ul className="text-anim carouselTicker__list">
      <li>Our Success is a Reflection</li>
      <li>of Our Team's Excellence</li>
    </ul>
  </div>
</div>



        <section className="testimonial-section overflow-hidden">
  <div className="container">
    <div className="testi-carousel swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="testi-item text-center">
            <div className="testi-thumb">
              <img src={babluDutta} alt="img" />
            </div>
            <div className="testi-content">
              <h3 className="author">
                Bablu Dutta <span>Director</span>
              </h3>
              {/*<p>Curabitur accumsan nec aliquam mauris placat primis lacinia egestas congue facilisis ligula leo sociosqu consequat</p>*/}
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="testi-item text-center">
            <div className="testi-thumb">
              <img src={DebbornineeMistri} alt="img" />
            </div>
            <div className="testi-content">
              <h3 className="author">
                Debborninee Mistri <span>Digital Marketing Manager</span>
              </h3>
              {/*<p>Curabitur accumsan nec aliquam mauris placat primis lacinia egestas congue facilisis ligula leo sociosqu consequat</p>*/}
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="testi-item text-center">
            <div className="testi-thumb">
              <img src={saptakDas} alt="img" />
            </div>
            <div className="testi-content">
              <h3 className="author">
                Saptak Das <span>Software Developer</span>
              </h3>
              {/*<p>Curabitur accumsan nec aliquam mauris placat primis lacinia egestas congue facilisis ligula leo sociosqu consequat</p>*/}
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="testi-item text-center">
            <div className="testi-thumb">
              <img src={amitBiswas} alt="img" />
            </div>
            <div className="testi-content">
              <h3 className="author">
                Amit Biswas <span>UI/UX Designer</span>
              </h3>
              {/*<p>Curabitur accumsan nec aliquam mauris placat primis lacinia egestas congue facilisis ligula leo sociosqu consequat</p>*/}
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="testi-item text-center">
            <div className="testi-thumb">
              <img src={parthaSakha} alt="img" />
            </div>
            <div className="testi-content">
              <h3 className="author">
                Partha Sakha Adhikary <span>Software Developer</span>
              </h3>
              {/*<p>Curabitur accumsan nec aliquam mauris placat primis lacinia egestas congue facilisis ligula leo sociosqu consequat</p>*/}
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="testi-item text-center">
            <div className="testi-thumb">
              <img src={sudipSaha} alt="img" />
            </div>
            <div className="testi-content">
              <h3 className="author">
                Sudip Saha <span>Software Developer</span>
              </h3>
              {/*<p>Curabitur accumsan nec aliquam mauris placat primis lacinia egestas congue facilisis ligula leo sociosqu consequat</p>*/}
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="testi-item text-center">
            <div className="testi-thumb">
              <img src={riti} alt="img" />
            </div>
            <div className="testi-content">
              <h3 className="author">
                Riti Mukherjee <span>Graphic Designer</span>
              </h3>
              {/*<p>Curabitur accumsan nec aliquam mauris placat primis lacinia egestas congue facilisis ligula leo sociosqu consequat</p>*/}
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="testi-item text-center">
            <div className="testi-thumb">
              <img src={rohit} alt="img" />
            </div>
            <div className="testi-content">
              <h3 className="author">
                Rohit Dey <span>Android Developer</span>
              </h3>
              {/*<p>Curabitur accumsan nec aliquam mauris placat primis lacinia egestas congue facilisis ligula leo sociosqu consequat</p>*/}
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="testi-item text-center">
            <div className="testi-thumb">
              <img src={pritamModak} alt="img" />
            </div>
            <div className="testi-content">
              <h3 className="author">
                Pritam Modak <span>Branding Manager</span>
              </h3>
              {/*<p>Curabitur accumsan nec aliquam mauris placat primis lacinia egestas congue facilisis ligula leo sociosqu consequat</p>*/}
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-pagination" />
    </div>
  </div>
</section>




        </>
    )
}

export default Team;