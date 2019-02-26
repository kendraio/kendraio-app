import { IUser } from './user';

export interface IMusicRecording {
    Name: string;
    Artist: string;
    ISRC: string;
    ISWC: string;
    Date: string;
    Country: string;
    Owner: string;
    Collective: string;
    'Submitted to': string;
    Status: string;
}
