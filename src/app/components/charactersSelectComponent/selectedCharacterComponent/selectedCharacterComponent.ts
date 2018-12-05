import {Component, Input} from '@angular/core';
import {ICharacter} from '../../../models/ICharacter';
import {ISkill} from '../../../models/ISkill';
import {GameService} from '../../../services/game.service';
import {BarbarianSkillsComponent} from '../../characters/barbarian/barbarianSkills.component';
import {AmazonSkillsComponent} from '../../characters/amazon/amazonSkills.component';
import {BardSkillsComponent} from '../../characters/bard/bardSkills.component';
import {DemonSkillsComponent} from '../../characters/demon/demonSkills.component';
import {DraconiteSkillsComponent} from '../../characters/draconite/draconiteSkills.component';
import {DruidSkillsComponent} from '../../characters/druid/druidSkills.component';
import {DwarfSkillsComponent} from '../../characters/dwarf/dwarfSkills.component';
import {MageSkillsComponent} from '../../characters/mage/mageSkills.component';
import {NecromancerSkillsComponent} from '../../characters/necromancer/necromancerSkills.component';
import {NinjaSkillsComponent} from '../../characters/ninja/ninjaSkills.component';
import {PaladinSkillsComponent} from '../../characters/paladin/paladinSkills.component';
import {PirateSkillsComponent} from '../../characters/pirate/pirateSkills.component';
import {PriestSkillsComponent} from '../../characters/priest/priestSkills.component';
import {RangerSkillsComponent} from '../../characters/ranger/rangerSkills.component';
import {ThiefSkillsComponent} from '../../characters/thief/thiefSkills.component';
import {VampireSkillsComponent} from '../../characters/vampire/vampireSkills.component';
import {WarriorSkillsComponent} from '../../characters/warrior/warriorSkills.component';
import {WitchHunterSkillsComponent} from '../../characters/witchHunter/witchHunterSkills.component';

@Component({
    selector: 'selectedCharacterComponent',
    templateUrl: 'selectedCharacterComponent.html',
    styleUrls: ['selectedCharacterComponent.css']
})
export class SelectedCharacterComponent {
    @Input() character: ICharacter;
    @Input() skills: ISkill[];

    skillsComponents = {
        'amazon': AmazonSkillsComponent,
        'barbarian': BarbarianSkillsComponent,
        'bard': BardSkillsComponent,
        'demon': DemonSkillsComponent,
        'draconite': DraconiteSkillsComponent,
        'druid': DruidSkillsComponent,
        'dwarf': DwarfSkillsComponent,
        'mage': MageSkillsComponent,
        'necromancer': NecromancerSkillsComponent,
        'ninja': NinjaSkillsComponent,
        'paladin': PaladinSkillsComponent,
        'pirate': PirateSkillsComponent,
        'priest': PriestSkillsComponent,
        'ranger': RangerSkillsComponent,
        'thief': ThiefSkillsComponent,
        'vampire': VampireSkillsComponent,
        'warrior': WarriorSkillsComponent,
        'witch_hunter': WitchHunterSkillsComponent
    };

    constructor(private gameService: GameService) {
    }

    selectCharacter() {
        this.gameService.selectCharacter(this.character);
    }
}