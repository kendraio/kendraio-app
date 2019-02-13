import { IUser } from './user';

export interface IFile {
    ref: string;
    fileName: string;
    fileTitle: string;
    createdBy:  IUser;
    uploadedBy:  IUser;
    createdDate: Date;
    uploadedDate: Date;
    type: string;
    usedBy: string;
    status: string;
    statusId: number;
    }
