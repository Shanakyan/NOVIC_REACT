import { useState } from 'react';
import PortfolioProject from '../PortfolioProject/PortfolioProject'

import levis from './levis.jpg'
import reebok from './reebok.jpg'
import braun from './braun.jpg'

import './PortfolioSection.css'
import SwitchBtn from '../SwitchBtn/SwitchBtn'

export default function PortfolioSection(){
    const [state, setProject]= useState();
    return(
        <section className='portfolio grey' id="portfolio">
            <h2>Portfolio</h2>
            <div className='wrapp_btns'>
                <SwitchBtn option={()=>setProject(<PortfolioProject src={levis} alt="company levis" text ="Online fashion store - Homepage"/>)} title="Project 1"/>
                <SwitchBtn  option={()=>setProject(<PortfolioProject src={reebok} alt="сайт компании reebok" text ="Reebok Store - Concept"/>)} title="Project 2"/>
                <SwitchBtn  option={()=>setProject(<PortfolioProject src={braun} alt="сайт компании braun" text ="Braun Landing Page - Concept"/>)} title="Project 2"/>
          
                {/* <SwitchBtn title="Project 3"/> */}
            </div>
            <div>{state}</div>
            {/* <PortfolioProject src={levis} alt="company levis" text ="Online fashion store - Homepage"/>
            <PortfolioProject src={reebok} alt="сайт компании reebok" text ="Reebok Store - Concept"/>
            <PortfolioProject src={braun} alt="сайт компании braun" text ="Braun Landing Page - Concept"/>         */}

    </section>
    )
}