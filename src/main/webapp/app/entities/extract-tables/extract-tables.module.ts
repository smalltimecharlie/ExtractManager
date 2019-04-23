import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { ExtractManagerSharedModule } from 'app/shared';
import {
    ExtractTablesComponent,
    ExtractTablesDetailComponent,
    ExtractTablesUpdateComponent,
    ExtractTablesDeletePopupComponent,
    ExtractTablesDeleteDialogComponent,
    extractTablesRoute,
    extractTablesPopupRoute
} from './';

const ENTITY_STATES = [...extractTablesRoute, ...extractTablesPopupRoute];

@NgModule({
    imports: [ExtractManagerSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ExtractTablesComponent,
        ExtractTablesDetailComponent,
        ExtractTablesUpdateComponent,
        ExtractTablesDeleteDialogComponent,
        ExtractTablesDeletePopupComponent
    ],
    entryComponents: [
        ExtractTablesComponent,
        ExtractTablesUpdateComponent,
        ExtractTablesDeleteDialogComponent,
        ExtractTablesDeletePopupComponent
    ],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExtractManagerExtractTablesModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
