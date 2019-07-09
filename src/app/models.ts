export interface Purpose {
    title: string;
    text: string;
    buttonTitle: string;
    buttonIcon: string;
    buttonClass: string;
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

export interface ListItem {
    name: string;
    position: string;
    linkedIn: string;
}
