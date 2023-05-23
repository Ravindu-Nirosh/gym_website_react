export default function Header({image,title,children}){
    return(
        <header className="header">
            <div className="header_container">
                <div className="header_bg">
                    <img src={image} alt="image" />
                </div>
                <div className="header_content">
                    <h2>{title}</h2>
                    <p>{children}</p>
                </div>
                
            </div>
        </header>
    )
}