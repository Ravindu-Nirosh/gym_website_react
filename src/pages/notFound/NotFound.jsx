import "./notFound.css"
import { Link } from "react-router-dom"
export default function NotFound(){
    return(
        <section className="container notFound_container">
            <h2>Page Not Found</h2>
            <Link to="/" className="btn">Go Back</Link>
        </section>
    )
}