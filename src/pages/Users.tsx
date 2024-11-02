import Datatables from '../components/Datatables';
import InfoCard from '../components/InfoCards';
import './style.scss'
import usersicon from '../components/icons/users-icon.png'
import usersWLoan from '../components/icons/users-w-loan-icon.png'
import usersWSavings from '../components/icons/users-w-saving-icons.png'
import activeUsersIC from '../components/icons/active-users-icon.png'

const Users = () => {

    const totalUsers = 150;
    const activeUsers = 120;
    const newUsers = 30;
    const savinguser = 293



    return ( 
        <div className="users-page">
            <h2>Users</h2>
            <div className="userStats">
                <InfoCard
                    label="USERS"
                    value={totalUsers}
                    icon={<img src={usersicon} alt='users-icon'/>}
                />
                <InfoCard
                    label="ACTIVE USERS"
                    value={activeUsers}
                    icon={<img src={usersWLoan} alt='users-icon'/>}
                />
                <InfoCard
                    label="USERS WITH LOAN"
                    value={newUsers}
                    icon={<img src={activeUsersIC} alt='users-icon'/>}
                />
                <InfoCard
                    label="USERS WITH SAVIGNS"
                    value={savinguser}
                    icon={<img src={usersWSavings} alt='users-icon'/>}
                />
            </div>

            
            <Datatables/>
        </div>
    );
}
 
export default Users;