import {ISkill} from './ISkill';

export interface ICharacter {
    target: ICharacter;
    id: string;
    name: string;
    skills: ISkill[];
}