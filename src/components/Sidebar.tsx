import { NavLink } from "react-router-dom";
import notification from './icons/notification.png'
import './style.scss'


interface SidebarProps {
    isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({isOpen}) => {
    return ( 
        <aside className={`sidebar ${isOpen ? '' : 'hidden'}`}>
            <nav>
                <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                </ul>
            </nav>
        </aside>
    );
}
 
export default Sidebar;