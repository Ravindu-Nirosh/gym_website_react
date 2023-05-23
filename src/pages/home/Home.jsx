import "./home.css"
import MainHeader from "../../components/MainHeader"
import Programs from "../../components/Programs"
import Values from "../../components/Values"
import FAQs from "../../components/FAQs"
import Testimonial from "../../components/Testimonial"


export default function Home(){
    
function loadingheadr(){
    var header = document.getElementById("mainHeadr");
    header.classList.add("active")
  }
  
  window.addEventListener("load", loadingheadr);
    return (
        <>
        <MainHeader/>
        <Programs/>
        <Values/>
        <FAQs/>
        <Testimonial/>
        </>
    )
}