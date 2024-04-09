
import './SkillSection.css'
import Skill from '../Skill/Skill'
import photoshop from './skills/ps.jpg'
import illustartor from './skills/ai.jpg'
import aftereffect from './skills/ae.jpg'
import figma from './skills/figma.png'

export default function SkillSection(){
    return (
        <section id="skills" class="skills">
            <h2>Skills</h2>
            <p className="descr">I work in such programs as</p>
            <div className="cards">
              <Skill img={photoshop}  alt='photoshop' text='Adobe Photoshop' str1='0' str2='0' str3='0' str4='0'/>
              <Skill img={illustartor}  alt='photoshop' text='Adobe Illustrator' str1='0'  str2='0' str3='0'/>
              <Skill img={aftereffect}  alt='photoshop' text='Adobe After Effects' str1='0' str2='0' str3='0' str4='0'/>
              <Skill img={figma}  alt='photoshop' text='Figma' str1='0' str2='0' str3='0' str4='0'/>
           
            </div>
    </section>
    );
} 