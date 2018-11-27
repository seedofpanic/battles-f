import {ISkill} from './ISkill';

export interface ICharacter {
    id: string;
    name: string;
    skills: ISkill[];
}