import './Header.css'
import mainImg from './main.jpg'
import Navigation  from '../Header/Navigation/Navigation'
export default function Header(){
    return(
        <header>
            <Navigation/>

        <div className="topContent">
            <div className="maininfo">
                <h1 id="home">Denis<br/>Novik</h1>
                <p>UX | UI designer 24 years old, Minsk</p>
            </div>
            <button className="burger">
                <img src="./icons/burger.svg" alt="burger-btn"/>
            </button>
        </div>
        <img className="mainphoto" src={mainImg} alt="Мое фото"/>
    </header>
    )
}