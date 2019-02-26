import { IUser, ICountry } from '.';

export interface IMusicRecording {
    Name: string;
    Artist: string;
    ISRC: string;
    ISWC: string;
    Date: string;
    Country: ICountry;
    Owner: string;
    Collective: string;
    'Submitted to': string;
    Status: string;
}



