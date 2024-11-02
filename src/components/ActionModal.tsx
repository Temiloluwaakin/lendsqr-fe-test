import viewDetail from './icons/view-user-icon.png'
import blacklist from './icons/blacklist-user-icon.png'
import activate from './icons/activate-user-icon.png'
import './datatable.scss';



const ActionModal: React.FC = () => {

    return (
        <div className="action-modal-overlay">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className='action-modal-items view-details'>
                    <img src={viewDetail} alt='view-user-icon' />
                    View Details
                </div>

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
