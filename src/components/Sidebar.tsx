import { NavLink } from "react-router-dom";
import notification from './icons/notification.png'
import './style.scss'
import { sidebarData } from "./SidebarData";
import organizationIcon from './icons/organizationSb.png';
import dropdown from './icons/dropdown.png'
import dashboardIcon from './icons/dashboard.png'


interface SidebarProps {
    isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({isOpen}) => {


    return ( 
        <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
            <span className="org-switch">
                <img src={organizationIcon} alt="switch-organization"/>
                Switch Organization 
                <img src={dropdown} alt="dropdown-caret"/>
            </span>
            <nav>
                <NavLink to='/' className='first-Side-Nav'>
                    <img src={dashboardIcon} alt="dashboard-icon"/>
                    Dashboard 
                </NavLink>

                {sidebarData.map((category) => (
                    <div key={category.title} className="sidebar-category">
                        <h4 className="category-title">{category.title}</h4>

                        {category.items.map((item) => (
                            <NavLink to = {item.link} className="item-link">
                                <img src={item.icon} alt={`${item.label} icon`} className="item-icon" />
                                <span style={{marginLeft:'10px'}}>{item.label}</span>
                            </NavLink>
                        ))}
                    </div>
                ))}
                
            </nav>
        </aside>
    );
}
 
export default Sidebar;