import './PortfolioProject.css'

export default function PortfolioProject({src, alt, text}){
    return(
        <>
            
        <a href="#">
        <img src={src} alt={alt}/>
        </a>
        <p> <a href="#" className="portfolio_link">{text}</a></p>
    
    </>
    )
}