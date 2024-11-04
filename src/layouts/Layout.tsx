import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "./layoutstyle.scss";

interface Props {
    children: React.ReactNode
}


const Layout = ({children}: Props) => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);



    return ( 
        <div className="container">
            <Header onHamburgerClick={toggleSidebar} />

            <div className="main">
                <Sidebar isOpen={sidebarOpen} />
                <main className="content">
                    {children}
                </main>
            </div>
        </div>
        
    );
}
 
export default Layout;