import bgShape from '../../external/assets/img/hero-bg-shape.png'
import bgShape1 from '../../external/assets/img/hero-shape-1.png'
import hero from '../../external/assets/img/hero-img.png'
import hero1 from '../../external/assets/img/hero-img-1.png'
import hero2 from '../../external/assets/img/hero-img-2.png'
import hero3 from '../../external/assets/img/hero-img-3.png'

import { Link } from 'react-router-dom'

function Hero(){
    return (
        <>
       <div className="hero-section">
            <div className="hero-bg-shape">
                <img src={bgShape} alt="shape" />
            </div>
            <div className="hero-shape">
                <img src={bgShape1} alt="shape" />
            </div>
            <div className="hero-images">
                <img src={hero1} alt="hero" />
                <img src={hero2} alt="hero" />
                <img src={hero3} alt="hero" />
            </div>
            <div className="hero-img">
                <img src={hero} alt="hero" />
            </div>
            <div className="container">
                <div className="hero-content">
                <h4 className="sub-title anim-text">Transforming 2</h4>
                <h2 className="title anim-text">Visions into</h2>
                <h3 className="bottom-title anim-text">Digital Reality</h3>
                <Link to="/" className="hero-btn">
                    <i className="fa fa-arrow-right" />
                </Link>
                </div>
            </div>
</div>

        
        </>

    )
}

export default Hero;