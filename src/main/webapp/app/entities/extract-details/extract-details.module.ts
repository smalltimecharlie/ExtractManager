import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { ExtractManagerSharedModule } from 'app/shared';
import {
    ExtractDetailsComponent,
    ExtractDetailsDetailComponent,
    ExtractDetailsUpdateComponent,
    ExtractDetailsDeletePopupComponent,
    ExtractDetailsDeleteDialogComponent,
    extractDetailsRoute,
    extractDetailsPopupRoute
} from './';

const ENTITY_STATES = [...extractDetailsRoute, ...extractDetailsPopupRoute];

@NgModule({
    imports: [ExtractManagerSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ExtractDetailsComponent,
        ExtractDetailsDetailComponent,
        ExtractDetailsUpdateComponent,
        ExtractDetailsDeleteDialogComponent,
        ExtractDetailsDeletePopupComponent
    ],
    entryComponents: [
        ExtractDetailsComponent,
        ExtractDetailsUpdateComponent,
        ExtractDetailsDeleteDialogComponent,
        ExtractDetailsDeletePopupComponent
    ],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExtractManagerExtractDetailsModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
