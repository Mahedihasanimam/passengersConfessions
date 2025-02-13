import { IFetchStatus } from './main';

export interface IUser extends IFetchStatus {
  data: {
    _id: string;
    fullName: string;
    email:string;
    phoneNumber: string;
    avatar: string;
    interests: Array<string>;
    isPrivateProfile: boolean;
    status: 'active';
    createdAt: Date;
    updatedAt: Date;
    __v: 0;
    address: string;
    bio: string;
    gender: 'male';
    instagramUrl: string;
    occupations: string;
    relationshipStatus: string;
    studiedAt: string;
    worksAt: string;
  };
}
