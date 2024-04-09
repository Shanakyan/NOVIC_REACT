import './ContactsSection.css'
import SocialSection from './SocialIcon/SocialIcon'
import SwitchBtn from '../SwitchBtn/SwitchBtn'
import inIcon from './SocialIcon/in.svg'
import instagramIcon from './SocialIcon/instagram.svg'
import behinceIcon from './SocialIcon/behance.svg'
import dribbleIcon from './SocialIcon/dribble.svg'
export default function ContactsSection(){
    return(
        <section id="contacts" className="contacts">
        <h2>Contacts</h2>
        <p>Want to know more or just chat? <br/> You are welcome!</p>
        <SwitchBtn title="Send Message"/>  
        
        {/* <button>Send message</button> */}
        <div className="social">
         <SocialSection src={inIcon} alt="LinkedIn"/>
         <SocialSection src={instagramIcon} alt="instagram"/>
         <SocialSection src={behinceIcon} alt="Behince"/>
         <SocialSection src={dribbleIcon} alt="Dribble"/>
      
        </div>
    </section>
    )
}