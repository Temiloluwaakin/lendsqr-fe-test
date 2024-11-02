import { Link } from 'react-router-dom';
import avatar from './icons/avatar.png'
import notification from './icons/notification.png'
import search from './icons/search.png'
import logo from './images/logo.png'
import dropdown from './icons/dropdown.png'
import sidebaricon from './icons/Vector.png'
import './style.scss'
import { useState } from 'react';


interface HeaderProps {
    onHamburgerClick: () => void;
}

const Header: React.FC<HeaderProps>  = ({onHamburgerClick}) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    /*<div className='header-cont'>

            <div className="hamburger" onClick={onHamburgerClick}>
                ☰
            </div>
            <div style={{display:'flex'}}>
                <div className='header-toggle' onClick={() => setShow(!show)}>
                    <img src={sidebaricon} alt='side-bar-icon' width={5}/>
                </div>

                <div className='nav-logo'>
                    <Link to='/'>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
            </div>

            
            <div className='search'>
                <input placeholder='search for anything'/>
                <div className='search-icon'> 
                <img src={search} alt='search-icon'/> 
                </div>
            </div>

            <div className='right-side-header'>
                <Link to='/'> <p>Docs</p> </Link>
                <Link to='/'>
                    <img src={notification} className="notification-icon" alt="notification-icon" />
                </Link>
                <Link to='/'>
                    <img src={avatar} alt="avatar" className='avatar' />
                </Link>
                <p>Ayodeji</p>
                <img src={dropdown} alt='dropdown-caret' className='dropdown-caret'/>
            </div>
        </div> */

    return (
        <header className="header">
            <div className="hamburger" onClick={onHamburgerClick}>
                ☰
            </div>

            <div className='nav-logo'>
                <Link to='/'>
                    <img src={logo} alt="logo" />
                </Link>
            </div>

            <div className='search'>
                <input placeholder='search for anything'/>
                <div className='search-icon'> 
                <img src={search} alt='search-icon'/> 
                </div>
            </div>

            <div className='right-side-header'>
                <Link to='/'> <p>Docs</p> </Link>
                <Link to='/'>
                    <img src={notification} className="notification-icon" alt="notification-icon" />
                </Link>
                <Link to='/'>
                    <img src={avatar} alt="avatar" className='avatar' />
                </Link>
                <p>Ayodeji</p>
                <img src={dropdown} alt='dropdown-caret' className='dropdown-caret'/>
            </div>
            
            <div className="dropdown-container">
                <button onClick={toggleDropdown} className="dropdown-toggle">
                Menu ▼
                </button>
                {dropdownOpen && (
                <div className="dropdown">
                    <a href="#">Profile</a>
                    <a href="#">Settings</a>
                    <a href="#">Logout</a>
                </div>
                )}
            </div>
        </header>
    );
}
 
export default Header;