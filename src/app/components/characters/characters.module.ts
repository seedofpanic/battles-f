import {NgModule} from '@angular/core';
import {BarbarianModule} from './barbarian/barbarian.module';
import {BarbarianSkillsComponent} from './barbarian/barbarianSkills.component';
import {AmazonModule} from './amazon/amazon.module';
import {BardModule} from './bard/bard.module';
import {DemonModule} from './demon/demon.module';
import {DraconiteModule} from './draconite/draconite.module';
import {DruidModule} from './druid/druid.module';
import {DwarfModule} from './dwarf/dwarf.module';
import {MageModule} from './mage/mage.module';
import {NecromancerModule} from './necromancer/necromancer.module';
import {NinjaModule} from './ninja/ninja.module';
import {PaladinModule} from './paladin/paladin.module';
import {PirateModule} from './pirate/pirate.module';
import {PriestModule} from './priest/priest.module';
import {RangerModule} from './ranger/ranger.module';
import {ThiefModule} from './thief/thief.module';
import {VampireModule} from './vampire/vampire.module';
import {WarriorModule} from './warrior/warrior.module';
import {WitchHunterModule} from './witchHunter/witchHunter.module';

@NgModule({
    imports: [
        AmazonModule,
        BarbarianModule,
        BardModule,
        DemonModule,
        DraconiteModule,
        DruidModule,
        DwarfModule,
        MageModule,
        NecromancerModule,
        NinjaModule,
        PaladinModule,
        PirateModule,
        PriestModule,
        RangerModule,
        ThiefModule,
        VampireModule,
        WarriorModule,
        WitchHunterModule
    ],
    exports: [
        BarbarianSkillsComponent
    ]
})
export class CharactersModule {
}