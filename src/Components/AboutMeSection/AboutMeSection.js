import Title from '../Title/Title'
import './AboutMeSection.css'

export default function AboutMeSection(){
    return(
        <section className='grey aboutMe' id="aboutMe"> 
       <Title/>
        <div className="content">
            <p>Hi, I'm Denis – UX/UI designer from Minsk. <br/>I'm interested in design and everything connected with it.</p><br/>
            <p>I'm studying at courses "Web and mobile design <br/>interfaces" in IT-Academy.</p><br/>
            <p>Ready to implement excellent projects <br/> with wonderful people.</p>
        </div>
    </section>
    )
}