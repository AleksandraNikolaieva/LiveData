export interface Purpose {
    title: string;
    text: string;
    buttonTitle: string;
    buttonIcon: string;
    buttonClass: string;
    link: string;
}

export interface Job {
    id: number;
    title: string;
    date: string;
    count: number;
    type: 'contacts' | 'prospects';
}

export interface Contact {
    name: string;
    mail: string;
}

export interface Option {
    value: string;
    label: string;
}

export interface Report {
    date: string;
    title: string;
    contactsFound: number;
    contactsUpdated: number;
    emailsUpdated: number;
    companiesUpdated: number;
    linkedInInfo: number;
    creditsUsed: number;
}

export interface Package {
    value: number;
    totalPrice: string;
    pricePerCredit: string;
}

export interface ListItem {
    name: string;
    position: string;
    linkedIn: string;
}
