import ProcesCard from "../ProcesCard";
import procesdark_1 from "../../external/assets/img/process-1-light.png"
import procesLight_1 from "../../external/assets/img/process-1.png"
import procesdark_2 from "../../external/assets/img/process-2-light.png"
import procesLight_2 from "../../external/assets/img/process-2.png"
import procesdark_3 from "../../external/assets/img/process-3-light.png"
import procesLight_3 from "../../external/assets/img/process-3.png"
import procesdark_4 from "../../external/assets/img/process-4-light.png"
import procesLight_4 from "../../external/assets/img/process-4.png"
import procesShape from "../../external/assets/img/process-shape.png"
import procesImg from "../../external/assets/img/process-img.png"
import procesImglight from "../../external/assets/img/process-img-light.png"
import HeadingMiddle from "../HeadingMiddle";


function WorkProces(){
    return (
        <>
      <section className="process-section pt-130 fade-wrapper">
  <div className="bg-shape">
    <img src={procesShape} alt="shape" />
  </div>
  <div className="container">
    <HeadingMiddle 
    mainHeading={"Work Process"}
    subHeading={"Follow 4 Step Process to Digital Success"}
    />
  
    <div className="row gy-lg-0 gy-5">

            <ProcesCard  
            imgDark={procesLight_1}
            imgLight={procesdark_1}
            title={"Design &amp; Implementation"}
            content={"Customized solutions, from web  design to digital campaigns."}
            />

            <ProcesCard  
            imgDark={procesLight_2}
            imgLight={procesdark_2}
            title={"Design &amp; Implementation"}
            content={"Customized solutions, from web  design to digital campaigns. debor"}
            />

                <ProcesCard  
                imgDark={procesLight_3}
                imgLight={procesdark_3}
                title={"Design &amp; Implementation"}
                content={"Customized solutions, from web  design to digital campaigns."}
                />

                <ProcesCard  
                imgDark={procesLight_4}
                imgLight={procesdark_4}
                title={"Design &amp; Implementation"}
                content={"Customized solutions, from web  design to digital campaigns. mistri"}
                />
      
    </div>
  </div>
  <div className="process-text wow fade-in-bottom" data-wow-delay="400ms">
    <img className="dark-img" src={procesImg} alt="process" />
    <img
      className="process-img-light light-img"
      src={procesImglight}
      alt="process"
    />
  </div>
</section>

        
        </>

    )
}

export default WorkProces;