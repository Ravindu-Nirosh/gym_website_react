export default function About_content({image,des,title,classname}){
    return(
        <div className="about_container">
        <div className={`about_content ${classname}`}>
            <div className="image">
                <img src={image} alt="image" />
            </div>
            <div className="about_info">
                <h1>{title}</h1>
                <p>{des}</p>
            </div>
        </div>
        
        </div>
    )
}