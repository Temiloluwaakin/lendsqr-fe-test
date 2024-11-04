import axios from "axios";


export interface User {
    id: number;
    organization: string;
    username: string;
    email: string;
    phoneNumber: string;
    dateJoined: string;
    status: 'Active' | 'Inactive' | 'Pending' | 'Blacklisted';
}
  


export const fetchUsers = async (page: number, limit: number| '') => { 
    try {
        const response = await axios.get(
            `https://672551e5c39fedae05b47d71.mockapi.io/api/users?page=${page}&limit=${limit}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        return {
            data: response.data,
            total: (response.data).length
        };
    } catch (error) {
        console.error(error);
        throw error; 
    }
};


export const fetchUserDetails = async (id: string) => {
    try{

        const response = await axios.get(
            `https://672551e5c39fedae05b47d71.mockapi.io/api/users/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        return response.data;
    } catch (error) {console.error(error);
        throw error;
    }
};