import "./Skill.css"
import star from './star-black.svg'
export default function Skill({img, alt, text, str1, str2, str3, str4, str5}){
    return(
        <div className="skillCard">
        <img className="skillImg" src={img} alt={alt}/>
        <p>{text}</p>
        <div className="raiting">
            <img src={star} alt="star" className={str1?'':"starGrey"}/>
            <img src={star} alt="star" className={str2?'':"starGrey"}/>
            <img src={star} alt="star" className={str3?'':"starGrey"}/>
            <img src={star} alt="star" className={str4?'':"starGrey"}/>
            <img src={star} alt="star" className={str5?'':"starGrey"}/>
        </div>
    </div>
    );
}