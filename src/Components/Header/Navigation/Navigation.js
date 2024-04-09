import './Navigation.css'

export default function Naavigation(){
    return(
        <nav className='navigation'>
            <ul>
                <li><a href="#home" className="active">Home</a></li>
                <button className="close">
                    <img src="./icons/close.svg" alt="close-icon"/>
                </button>
                <li><a href="#aboutMe">About me</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contacts">Contacts</a></li>
            </ul>
            <hr/>
        </nav>
    )
}