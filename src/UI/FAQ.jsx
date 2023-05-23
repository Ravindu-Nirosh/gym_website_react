import { useState } from "react"
import {BiPlus} from "react-icons/bi"
import {BiMinus} from "react-icons/bi"

export default function FAQ({question,answer}){

    const [faqVisibliity,setFaqVisibility]=useState(false)

    return(
        <article className="faq_artical"  onClick={()=>setFaqVisibility(prevst=>!prevst)}>
            <div>
                <h4>{question}</h4>
                <button className="faq_icon">
                    {
                        faqVisibliity?<BiMinus/>:<BiPlus/>
                    }
                </button>
            </div>
            {faqVisibliity && <p>{answer}</p>}
        </article>
    )
}