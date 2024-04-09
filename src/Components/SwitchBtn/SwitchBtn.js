import './SwitchBtn.css'
export default function SwitchBtn({title, option}){
    return(
        <button onClick={option}  className='btn'>{title}</button>
    )
}