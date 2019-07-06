import { Job } from './models';

export const jobs: Job[] = [
    {
        id: 1,
        title: 'Quis nostrud exercitation',
        date: new Date(2019, 6, 6, 2, 20).toISOString(),
        count: 2498,
        type: 'contacts'
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet',
        date: new Date(2019, 6, 4, 6, 30).toISOString(),
        count: 21000,
        type: 'contacts'
    },
    {
        id: 3,
        title: 'Duis aute irure dolor',
        date: new Date(2019, 5, 10).toISOString(),
        count: 100,
        type: 'prospects'
    },
    {
        id: 4,
        title: 'Excepteur sint occaecat',
        date: new Date(2019, 5, 9).toISOString(),
        count: 1103,
        type: 'contacts'
    },
    {
        id: 5,
        title: 'Quisque non tellus orci ac',
        date: new Date(2019, 4, 3).toISOString(),
        count: 401,
        type: 'contacts'
    },
    {
        id: 6,
        title: 'Vitae sapien pellentesque habitant',
        date: new Date(2019, 4, 2).toISOString(),
        count: 600,
        type: 'contacts'
    },
    {
        id: 7,
        title: 'Tempor id eu nisl',
        date: new Date(2019, 4, 1).toISOString(),
        count: 500,
        type: 'prospects'
    },
    {
        id: 8,
        title: 'Commodo ullamcorper',
        date: new Date(2018, 3, 1).toISOString(),
        count: 1480,
        type: 'contacts'
    }
];

