import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "../api-clients"
import { useState } from "react";
import avatar from '../components/images/avatar.png'
import GeneralDetails from "./GeneralDetails";


interface UserDetails {
    id: string;
    organization: string;
    username: string;
    email: string;
    accountBalance: number;
    bankDetails: {
      accountNumber: string;
      bankName: string;
    };
    bvn: string;
}

const sections = ["General Details", "Documents","Bank Details","Loans","Savings","App and Sytem"] as const;
type Section = typeof sections[number];


const Userdetails = () => {

    const {id} = useParams();
    const [activeSection, setActiveSection] = useState<Section>('General Details');

    const { data:UserDetail } = useQuery(
        'userDetails',
        () => apiClient.fetchUserDetails(id as string),
        {
            onSuccess: (fetchedData) => {
                localStorage.setItem("user", JSON.stringify(fetchedData));
            },
        }
    );

    const handleSectionChange = (section: Section) => {
        setActiveSection(section);
    };

    
    //const userDetail = localStorage.getItem("user");
    //const users = userDetail ? JSON.parse(userDetail) : null;
    /*const getUserData = (): UserDetails | null => {
        const userData = localStorage.getItem("user"); // Ensure "userData" is the key used to store the data
        return userData ? JSON.parse(userData) : null;
        
    };*/

    if (!UserDetail){
        return <p>no user found</p>
    }



    return ( 
        <div className="user-detail">
            <div className="user-detail-cont">
                <div className="detail-header">
                    <h2>User Details</h2>
                    <span style={{display:'flex',gap:'20px'}}>
                        <button className="blacklist">BLACKLIST USER</button>
                        <button className="activate">ACTIVATE USER</button>
                    </span>
                </div>

                <div className="header-card">
                    <div className="header-card-details">
                        <span className="avatar-part">
                            <img src={avatar} alt={`${UserDetail.username}'s profile`} />
                            <span>
                                <h2>{UserDetail.username}</h2>
                                <p>{UserDetail.userId}</p>
                            </span>
                        </span>

                        <span className="tier-part">
                            <p>User's Tier</p>
                            <p>{UserDetail.userTier} Stars</p>
                        </span>
                        
                        <span className="balance-part">
                            <h2>₦{UserDetail.accountBalance}</h2>
                            <p>{UserDetail.bankDetails.bankName}/{UserDetail.bankDetails.accountNumber}</p>
                        </span>    
                    </div>
                    <div className="change-section">
                        {sections.map((section) => (
                            <span
                                key={section}
                                onClick={() => handleSectionChange(section)}
                                className="section-name"
                                style={{
                                    cursor: 'pointer',
                                    color: activeSection === section ? 'rgba(57, 205, 204, 1)' : '#333', 
                                    borderBottom: activeSection === section ? '2px solid rgba(57, 205, 204, 1)' : 'none',
                                }}
                            >
                                {section}
                            </span>
                        ))}
                    </div>
                </div>

                {activeSection === 'General Details' && (
                    <GeneralDetails UserDetail={UserDetail}/>
                )}
            </div>

            
        </div>
     );
}
 
export default Userdetails;