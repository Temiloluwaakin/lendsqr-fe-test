import { NavLink } from "react-router-dom";
import notification from './icons/notification.png'
import './style.scss'


interface SidebarProps {
    show: boolean;
}


const Sidebar = ({show}: SidebarProps) => {
    return ( 
        <aside className={`sidebar ${show ? 'show' : null}`}>
            <nav className='nav'>
                <div className='topnav'>

                    <div className='nav-list'>
                        <NavLink to='/' className='nav-link '>
                            <img src={notification} className="notification-icon" alt="notification-icon" />
                            <span className='nav-link-name'>Dashboard</span>
                        </NavLink>
                        <NavLink to='/users' className='nav-link'>
                            <img src={notification} className="notification-icon" alt="notification-icon" />
                            <span className='nav-link-name'>Users</span>
                        </NavLink>
                        <NavLink to='/faciility' className='nav-link'>
                            <img src={notification} className="notification-icon" alt="notification-icon" />
                            <span className='nav-link-name'>Facility</span>
                        </NavLink>
                        <NavLink to='/trading' className='nav-link'>
                            <img src={notification} className="notification-icon" alt="notification-icon" />
                            <span className='nav-link-name'>Trading</span>
                        </NavLink>
                    
                    </div>
                </div>
            </nav>
        </aside>
    );
}
 
export default Sidebar;