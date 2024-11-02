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
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}


const Header = ({show, setShow}: HeaderProps) => {


    return (
        <header>
            <div className='header-cont'>

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
            </div>
        </header>
     );
}
 
export default Header;