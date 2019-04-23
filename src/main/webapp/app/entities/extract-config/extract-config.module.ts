import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { ExtractManagerSharedModule } from 'app/shared';
import {
    ExtractConfigComponent,
    ExtractConfigDetailComponent,
    ExtractConfigUpdateComponent,
    ExtractConfigDeletePopupComponent,
    ExtractConfigDeleteDialogComponent,
    extractConfigRoute,
    extractConfigPopupRoute
} from './';

const ENTITY_STATES = [...extractConfigRoute, ...extractConfigPopupRoute];

@NgModule({
    imports: [ExtractManagerSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ExtractConfigComponent,
        ExtractConfigDetailComponent,
        ExtractConfigUpdateComponent,
        ExtractConfigDeleteDialogComponent,
        ExtractConfigDeletePopupComponent
    ],
    entryComponents: [
        ExtractConfigComponent,
        ExtractConfigUpdateComponent,
        ExtractConfigDeleteDialogComponent,
        ExtractConfigDeletePopupComponent
    ],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExtractManagerExtractConfigModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
