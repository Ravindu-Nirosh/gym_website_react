import "./plans.css"
import Header from "../../components/Header"
import planImage from "../../images/header_bg_3.jpg"
import {plans} from "../../data"
import Card from "../../UI/Card"

export default function Plans(){
    return(
       <>
        <Header title="Our Plans" image={planImage}> 
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi molestiae inventore id corrupti nemo, ullam ducimus atque accusantium expedita unde, adipisci ut. Quod nobis similique sunt nemo earum omnis distinctio!
        </Header>

        <div className="container plans_container">
            {
                plans.map(({name,desc,price,features,id})=>{
                    return(
                        <Card>
                        <h3>{name}</h3>
                        <p>{desc}</p>
                        <h1>{price}</h1>
                        <div className="features">
                            <h5>Features</h5>
                            {
                            features.map(({feature,available})=>{
                                return(
                                    <p className={available? "feture_avalbale":"feture_disable" }>{feature}</p>
                                )
                            })
                            }
                        </div>
                        <div className="btn chooes_plane" id={id}>
                            Pick This Plan
                        </div>
                    </Card>
                    )
                })
            }
        </div>
       </>
    )
}