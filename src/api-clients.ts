import axios from "axios";
import {User} from './datasource'


export const fetchUsers = async (page: number, limit: number| '')/*: Promise<User[]>*/ => { 
    try {
        const response = await axios.get(
            `https://672551e5c39fedae05b47d71.mockapi.io/api/users?page=${page}&limit=${limit}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        /*const data = response.data
        return data*/
        return {
            data: response.data,
            total: (response.data).length//parseInt((response.headers).length) // MockAPI usually includes this in headers
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