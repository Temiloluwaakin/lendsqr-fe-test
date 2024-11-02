// src/datasource.ts
export interface User {
    id: number;
    organization: string;
    username: string;
    email: string;
    phoneNumber: string;
    dateJoined: string;
    status: 'Active' | 'Inactive' | 'Pending' | 'Blacklisted';
}
  
export const users: User[] = [
    {
        id: 1,
        organization: 'Lendstar',
        username: 'Grace Effiom',
        email: 'grace@lendstar.com',
        phoneNumber: '07060780922',
        dateJoined: 'Apr 31, 2020 10:00 AM',
        status: 'Inactive',
    },
    {
        id: 2,
        organization: 'Irorun',
        username: 'Debby',
        email: 'debby2@irorun.com',
        phoneNumber: '08160780928',
        dateJoined: 'Apr 20, 2020 10:00 AM',
        status: 'Pending',
    },
    {
        id: 3,
        organization: 'Temiloluwa',
        username: 'Akinbo',
        email: 'temyAkin@gmail.com',
        phoneNumber: '08163927928',
        dateJoined: 'Apr 14, 2020 10:00 AM',
        status: 'Blacklisted',
    },
    {
        id: 4,
        organization: 'Tomiwa',
        username: 'Adedayo',
        email: 'tommya@gmail.com',
        phoneNumber: '09063935928',
        dateJoined: 'Apr 15, 2020 10:00 AM',
        status: 'Active',
    },
    {
        id: 5,
        organization: 'Lendstar',
        username: 'Grace Effiom',
        email: 'grace@lendstar.com',
        phoneNumber: '07060780922',
        dateJoined: 'Apr 31, 2020 10:00 AM',
        status: 'Inactive',
    },
    {
        id: 6,
        organization: 'Irorun',
        username: 'Debby',
        email: 'debby2@irorun.com',
        phoneNumber: '08160780928',
        dateJoined: 'Apr 20, 2020 10:00 AM',
        status: 'Pending',
    },
    {
        id: 7,
        organization: 'Temiloluwa',
        username: 'Akinbo',
        email: 'temyAkin@gmail.com',
        phoneNumber: '08163927928',
        dateJoined: 'Apr 14, 2020 10:00 AM',
        status: 'Blacklisted',
    },
    {
        id: 8,
        organization: 'Tomiwa',
        username: 'Adedayo',
        email: 'tommya@gmail.com',
        phoneNumber: '09063935928',
        dateJoined: 'Apr 15, 2020 10:00 AM',
        status: 'Active',
    },
    {
        id: 9,
        organization: 'Lendstar',
        username: 'Grace Effiom',
        email: 'grace@lendstar.com',
        phoneNumber: '07060780922',
        dateJoined: 'Apr 31, 2020 10:00 AM',
        status: 'Inactive',
    },
    {
        id: 10,
        organization: 'Irorun',
        username: 'Debby',
        email: 'debby2@irorun.com',
        phoneNumber: '08160780928',
        dateJoined: 'Apr 20, 2020 10:00 AM',
        status: 'Pending',
    },
    {
        id: 11,
        organization: 'Temiloluwa',
        username: 'Akinbo',
        email: 'temyAkin@gmail.com',
        phoneNumber: '08163927928',
        dateJoined: 'Apr 14, 2020 10:00 AM',
        status: 'Blacklisted',
    },
    {
        id: 12,
        organization: 'Tomiwa',
        username: 'Adedayo',
        email: 'tommya@gmail.com',
        phoneNumber: '09063935928',
        dateJoined: 'Apr 15, 2020 10:00 AM',
        status: 'Active',
    }
    // Add more user data here
];
  