import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CharactersSelectModule} from './components/charactersSelectComponent/charactersSelectModule';
import {SkillSelectModule} from './components/skillSelectComponent/skillSelectModule';
import {TeamBlockModule} from './components/teamBlockComponent/teamBlockModule';
import {CancelFightModule} from './components/cancelFightComponent/cancelFightModule';
import {NotesModule} from './components/notesComponent/notesModule';
import {APIService} from './services/api.service';
import {HttpClientModule} from '@angular/common/http';
import {GameService} from './services/game.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        CharactersSelectModule,
        SkillSelectModule,
        TeamBlockModule,
        CancelFightModule,
        NotesModule
    ],
    providers: [APIService, GameService],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(apiService: APIService) {
        apiService.init();
    }
}
