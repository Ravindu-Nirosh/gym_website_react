import SectionHeader from "./Section_header"
import {FaQuestion} from "react-icons/fa"
import {faqs} from "../data"
import FAQ from "../UI/FAQ"


export default function FAQs(){
    return(
        <section className="section_faq reveal">
            <div className="container faq_container">
                <SectionHeader icon={<FaQuestion/>} title="FAQs"/>
                <div className="faq_wrapper">
                    {
                        faqs.map(({id,question,answer})=>{
                            return(
                            <FAQ key={id} question={question} answer={answer}/>
                            )
                        })
                    }
                    
                </div>
            </div>
        </section>
    )
}