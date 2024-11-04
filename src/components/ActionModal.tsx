import viewDetail from './icons/view-user-icon.png'
import blacklist from './icons/blacklist-user-icon.png'
import activate from './icons/activate-user-icon.png'
import './datatable.scss';
import { Link } from 'react-router-dom';


export interface ActionProps {
    id: number;
}


const ActionModal: React.FC<ActionProps> = ({id}) => {

    return (
        <div className="action-modal-overlay">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <Link to={`/users/${id}`} className='action-modal-items view-details' style={{textDecoration:'none'}}>
                    <img src={viewDetail} alt='view-user-icon' />
                    View Details
                </Link>

                <div className='action-modal-items blacklist-user'>
                    <img src={blacklist} alt='blacklist-user-icon'/>
                    Blacklist User
                </div>

                <div className='action-modal-items activate-user'>
                <img src={activate} alt='activate-user-icon'/>
                    Activate User
                </div>
                
            </div>
        </div>
    );
};

export default ActionModal;
