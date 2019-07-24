import { Job, ListItem, Report, Billing } from './models';

export const report: Report = {
    date: new Date(2019, 6, 6, 2, 20).toISOString(),
    title: 'South West Region',
    contactsFound: 1492,
    contactsUpdated: 988,
    emailsUpdated: 853,
    companiesUpdated: 664,
    linkedInInfo: 994,
    creditsUsed: 1322
};

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

export const contacts: Array<ListItem> = [
    {
        name: 'Geoff Seeley',
        position: 'Global Marketing Director at Airbnb',
        linkedIn: 'geoff-seeley-aa9b319'
    },
    {
        name: 'Nelly Ortiz',
        position: 'Marketing Director at Roc Naion',
        linkedIn: 'wilnellyortiz'
    },
    {
        name: 'Tony Guerrero',
        position: 'Marketing Director at RTIC Coolers',
        linkedIn: 'tony-querrero-644585a7'
    },
    {
        name: 'Karla Evans',
        position: 'Si Director, integrated Marketing & Media at Ultra Beauty',
        linkedIn: 'karla-evans-davis-46b9494'
    },
    {
        name: 'Rebecca Gautrey',
        position: 'Marketing Director at Del Monte Fresh Produce N.A., Inc',
        linkedIn: 'rebeccagautrey'
    },
    {
        name: 'Rebecca Ritterbush',
        position: 'Marketing Director at Woodhouse Auto Family',
        linkedIn: 'rebecca-ritterbush-0b147a26'
    },
    {
        name: 'PennyMaria Jackson',
        position: 'Marketing Director at Appollo Theater',
        linkedIn: 'geoff-seeley-aa9b319'
    },
    {
        name: 'Erik Archer Smith',
        position: 'Marketing Director, ABM at Treasure Data',
        linkedIn: 'geoff-seeley-aa9b319'
    }
];

export const chartData: Array<number> = [
    60,
    190,
    110,
    60,
    110,
    60,
    60,
    160,
    190,
    110,
    60,
    160,
    60,
    160,
    190,
    235,
    60,
    160,
    60,
    235,
    110,
    160,
    60,
    260,
    160,
    60,
    110,
    190,
    160
];

export const billingHistoryData: Array<Billing> = [
    {
        date: 'March 20, 2019',
        credits: 100,
        cost: 10,
        receipt: ''
    },
    {
        date: 'May 1, 2019',
        credits: 1000,
        cost: 90,
        receipt: ''
    },
    {
        date: 'July 15, 2019',
        credits: 10000,
        cost: 750,
        receipt: ''
    }
];
export const token = 'uu3w8ye33kisdeYcs95Gd4i';
