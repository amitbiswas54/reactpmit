import About from "../About";
import Faq from "../Faq";
import ProjectShowCase from "../ProjectShowCase";
import Team from "../Team";
import Hero from "./Hero";
import ServiceProvider from "./ServiceProvider";
import WorkProces from "./WorkProces";

function Home (){
    return (
        <>
           <div id="smooth-wrapper">

        <div id="smooth-content">
        <Hero/>
        <WorkProces/>
        <About/> 
        
        <ServiceProvider/>
    
        <Faq/>
        <Team/>
        <ProjectShowCase/>
        </div>
        </div>
        </>
    )
}


export default Home;