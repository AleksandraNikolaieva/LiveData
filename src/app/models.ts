export interface AppData {
    title: string;
    text: string;
    buttonTitle: string;
    buttonIcon: string;
    buttonColor: string;
}

export interface Job {
    id: number;
    title: string;
    date: string;
    count: number;
    type: 'contacts' | 'prospects';
}
