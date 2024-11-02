import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "./layoutstyle.scss";

interface Props {
    children: React.ReactNode
}


const Layout = ({children}: Props) => {

    const [show, setShow] = useState(true);



    return ( 
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
    );
}
 
export default Layout;