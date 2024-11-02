import { useState } from "react";
import { useQuery } from "react-query";
import * as apiClients from  '../api-clients'


interface PaginationProp {
    onLimitChange: (newLimit: number) => void;
    limitset: number | ''
    onPageChange: (newPage: number) => void;
    currentPage: number;
}


const Paging: React.FC<PaginationProp> = ({onLimitChange, limitset, onPageChange, currentPage}) => {
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number| ''>('');
    
    
    const { data: TotalUsers, error, isLoading} = useQuery(
        ['fetchUsers', page, limit],
        () => apiClients.fetchUsers(page, limit),
        {
            onSuccess: (fetchedData) => {
                console.log(fetchedData.total);
            },
        }
    );

    const totalPages = Math.ceil(TotalUsers?.total / (limitset || 1));

    const pageNumbers = []
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };


    return ( 
        <div className="pagination">
            <div className="left-pag">
                showing
                <select value='' onChange={(e) => onLimitChange(Number(e.target.value))}>
                    <option value="">{limitset}</option>
                    {[10, 20, 50].map((numm) => (
                        <option value={numm}> {numm} </option>
                    ))}
                </select>
                out of {TotalUsers?.total}
            </div>

            <div className="right-pag">
                <button disabled={currentPage === 1} onClick={handlePrevPage}> &lt; </button>

                {pageNumbers.map((number) => (
                    <span className="page-list">
                        <button 
                            onClick={() => onPageChange(number)}
                            key={number}
                            className={`page-list ${number === currentPage ? 'active' : ''}`}
                        >
                             {number} 
                        </button>
                    </span>
                ))}

                <button disabled={currentPage === totalPages} onClick={handleNextPage}> &gt; </button>
                    
            </div>
        </div>
     );
}
 
export default Paging;