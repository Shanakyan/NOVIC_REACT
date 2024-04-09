
import PortfolioProject from '../PortfolioProject/PortfolioProject'
import levis from './levis.jpg'
import reebok from './reebok.jpg'
import braun from './braun.jpg'

import './PortfolioSection.css'

export default function PortfolioSection(){
    return(
        <section className='portfolio grey' id="portfolio">
            <h2>Portfolio</h2>
            <PortfolioProject src={levis} alt="company levis" text ="Online fashion store - Homepage"/>
            <PortfolioProject src={reebok} alt="сайт компании reebok" text ="Reebok Store - Concept"/>
            <PortfolioProject src={braun} alt="сайт компании braun" text ="Braun Landing Page - Concept"/>        

    </section>
    )
}