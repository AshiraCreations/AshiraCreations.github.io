import { Link } from "react-router-dom";
import "../styles/components/Header.css";

export default function Header(){
    return (
        <div className='header'>
            <Link to='/' className='header__link' onClick={window.scrollTo(0,0)}>Home</Link>
            <span className="header__seperator"> | </span>
            <Link to='/theatre' className='header__link' onClick={window.scrollTo(0,0)}>Theatre</Link>
            <span className="header__seperator"> | </span>
            <Link to='' className='header__link' onClick={window.scrollTo(0,0)}>Photography</Link>
        </div>
    );
}