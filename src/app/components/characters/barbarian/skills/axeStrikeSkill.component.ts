import {Component, Input} from '@angular/core';

@Component({
    selector: 'axeStrikeSkill',
    templateUrl: '../../skill.template.html',
    styleUrls: ['../../skill.style.css']
})
export class AxeStrikeSkillComponent {
    @Input() full;

    title = 'Axe strike';
    description = 'do medium damage';
    fullDescription = '<div>Минимальный урон 5</div>' +
        '<div>Макс урон 7</div>' +
        '<div>Шанс крита 10%</div>' +
        '<div>Крит урон 1.5</div>' +
        '<div>Тип урона - рубящий</div>';
    type = 'attack';
}