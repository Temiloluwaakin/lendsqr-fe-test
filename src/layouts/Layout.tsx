import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "./layoutstyle.scss";

interface Props {
    children: React.ReactNode
}


const Layout = ({children}: Props) => {

    //const [show, setShow] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
        setDropdownOpen(false);  // Close dropdown when toggling sidebar
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    /* 
    <main className={show ? 'space-toggle' : ''}>

            <Header show={show} setShow={setShow} />

            <div className="main">
                <div className="sidebar">
                    <Sidebar show={show}/>
                </div>
                <div className='content'>
                    {children}
                </div >
            </div>
        </main> 
        */



    return ( 
        <div className="container">
            <header className="header">
                <h1>My App</h1>
                <div className="hamburger" onClick={toggleSidebar}>
                    ☰
                </div>
                <div className={`dropdown ${dropdownOpen ? 'active' : ''}`}>
                    Profile
                    Settings
                    Logout
                </div>
                <button onClick={toggleDropdown} className="dropdown-toggle">
                    Menu ▼
                </button>
            </header>
            <div className="main">
                <aside className={`sidebar ${sidebarOpen ? '' : 'hidden'}`} style={{marginTop:'100px'}}>
                    <nav>
                        <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        </ul>
                    </nav>
                    {/* Dropdown Menu for Mobile */}
                </aside>

                    <main className="content">
                        {children}
                    </main>
            </div>
        </div>
        
    );
}
 
export default Layout;