import React, { useState } from 'react';
import { User } from '../api-clients';
import './datatable.scss';
import filtericon from '../components/icons/filter-results-button.png'
import FilterModal from './FilterModal';
import ActionModal from './ActionModal';
import { useQuery } from 'react-query';
import * as apiClients from  '../api-clients'
import Paging from './Paging'




const DataTable: React.FC= () => {

    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [selectedColumn, setSelectedColumn] = useState<keyof User | null>(null);
    const [activeFilter, setActiveFilter]= useState<string | null>(null)
    const [activeAction, setActiveAction] = useState<number | null>(null)
    const [dataReceived, setDataReceived] = useState<User[]>([]);
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number| ''>(10);
    

    const { data: UserData, error, isLoading} = useQuery(
        ['fetchUsers', page, limit],
        () => apiClients.fetchUsers(page, limit),
        {
            onSuccess: (fetchedData) => {
                setDataReceived(fetchedData.data);
            },
        }
    );

    
    const handleSort = (column: keyof User) => {
        const sortedData = [...dataReceived].sort((a, b) => {
        if (a[column] < b[column]) return sortOrder === 'asc' ? -1 : 1;
        if (a[column] > b[column]) return sortOrder === 'asc' ? 1 : -1;
        return 0;
        });
        setDataReceived(sortedData);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        setSelectedColumn(column);
    };

    const handleFilterIconClick = (header: string) => {
        setActiveFilter((prev) => (prev === header ? null : header));
    };

    const handleActionBtnClick = (id: number) => {
        setActiveAction((prev) => (prev === id ? null : id));
    };

    if (!UserData) {
        return <span> Loading...</span>
    }
    
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>error</p>;

    const total = UserData?.total || 0;


    return (
        <div className="datatable">
            <div className='datatable-cont'>
                <table>
                    <thead>
                        <tr>
                            {['organization', 'username', 'email', 'phoneNumber', 'dateJoined', 'status'].map((header) => (
                            <th key={header} >
                                <span onClick={() => handleSort(header as keyof User)}>
                                    {header.toUpperCase()}
                                </span>
                                <span className={`filter-icon-container ${activeFilter === header ?  'active' : ''}`}
                                    
                                    onClick={() => handleFilterIconClick(header)}
                                >
                                    <img src={filtericon} alt='filter-icon' className='filter-icon'/> 
                                    {activeFilter === header && (
                                        <div className='filter-modal'>
                                            <FilterModal />
                                        </div>
                                    )}
                                </span>
                            </th>
                            ))}
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataReceived?.map(user => (
                            <tr key={user.id}>
                                <td>{user.organization}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.dateJoined}</td>
                                <td className={`status ${user.status.toLowerCase() ?? 'unknown'}`}>
                                    <span className='status-bg'>{user.status ?? 'unknown'}</span>
                                </td>
                                <td className={`action-icon-container ${activeAction === user.id ?  'active' : ''}`}>
                                    <button
                                        onClick={() => handleActionBtnClick(user.id)}
                                    >
                                        ⋮
                                    </button>
                                    {activeAction === user.id && (
                                        <div className='action-modal'>
                                            <ActionModal id={1}/>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Paging 
                onLimitChange={setLimit}
                limitset={limit}
                onPageChange={(page) => setPage(page)}
                currentPage={page}
            />
        </div>
    );
};

export default DataTable;
