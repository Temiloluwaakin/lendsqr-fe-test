// src/datatable.tsx
import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { userRows, User } from '../datatableSource';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';

const userColumns: GridColDef[] = [
    { field: "organization", headerName: "ORGANIZATION", width: 116 },
    {
        field: "username",
        headerName: "USERNAME",
        width: 106,
        renderCell: (params) => (
        <div className="cellWithImg">
            {params.row.username}
        </div>
        ),
    },
    { field: "email", headerName: "EMAIL", width: 147 },
    { field: "phoneNumber", headerName: "PHONE NUMBER", width: 124 },
    { field: "dateJoined", headerName: "DATE JOINED", width: 154 },
    {
        field: "status",
        headerName: "STATUS",
        width: 100,
        renderCell: (params) => (
            <div className={`cellWithStatus ${params.row.status}`}>
                {params.row.status}
            </div>
        ),
    },
    {
        field: "actions",
        headerName: "ACTIONS",
        width: 150,
        sortable: false,
        renderCell: (params) => (
        <>
            <Tooltip title="View Details">
                <Link to="/users/:id" style={{ textDecoration: "none" }}>
                    <span className="viewButton">View</span>
                </Link>
            </Tooltip>
            <Tooltip title="Delete User">
                <IconButton onClick={() => handleDelete(params.row.id)}>
                    <span>d</span>
                </IconButton>
            </Tooltip>
            <Tooltip title="More Info">
            <IconButton onClick={() => handleMoreInfo(params.row)}>
                <span>Info</span>
            </IconButton>
            </Tooltip>
        </>
        ),
    },
];

const handleView = (user: User) => console.log("Viewing user", user);
const handleDelete = (userId: number) => console.log("Deleting user", userId);
const handleMoreInfo = (user: User) => console.log("Showing more info for", user);

const DataTable: React.FC = () => {
  return (
    <div className='table-bg'>
        <DataGrid
            className='data-grid'
            rows={userRows}
            columns={userColumns}
            initialState={{
                pagination: {
                    paginationModel: {
                        pageSize: 10,
                    },
                },
                filter: {
                    filterModel: {
                      items: [{ field: 'rating', operator: '>', value: '2.5' }],
                    },
                },
            }}
            pageSizeOptions={[5]}
        />
    </div>
  );
};

export default DataTable;
