import {ICharacter} from './ICharacter';

export class ITeam {
    characters: {[name: string]: ICharacter};
}