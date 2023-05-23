import SectionHeader from "./Section_header"
import {FaQuoteLeft} from "react-icons/fa"
import Card from "../UI/Card"
import {testimonials} from "../data"
import { useState } from "react"
import {GrNext,GrPrevious} from "react-icons/gr"

export default function Testimonial(){

    const [index,setindex]=useState(0)
    const {name,quote,job,avatar} =testimonials[index]

    function prevTestimonial(){
        setindex(prev=>prev-1)
        if(index<=0){
            setindex(testimonials.length-1)
        }
    }

    function nextTestimonial(){
        setindex(prev=>prev+1)
         if(index>=testimonials.length-1){
            setindex(0)
         }
    }
    return(
       <section className="Testiminials reveal">
            <div className="container test_container">
               <SectionHeader icon={<FaQuoteLeft />} title="Testiminial" classname="test_section_head"/>
                <Card className="Testiminial">
                    <div className="image">
                        <img src={avatar} alt="" />
                    </div>
                    <p>{`" ${quote} "`}</p>
                    <h5>{name}</h5>
                    <small>{job}</small>
                </Card>
                <div className="test_dots_container">
                    {
                    testimonials.map(({id})=>{
                        return(
                            <div key={id} className={`dot ${index+1===id? 'active':''}`}></div>
                        )
                    })
                    }
                </div>
                <div className="test_button_container">
                    <button onClick={prevTestimonial}><GrPrevious/></button>
                    <button onClick={nextTestimonial}><GrNext/></button>
                </div>
            </div>
       </section>
    )
}