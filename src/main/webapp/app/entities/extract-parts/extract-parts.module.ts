import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { ExtractManagerSharedModule } from 'app/shared';
import {
    ExtractPartsComponent,
    ExtractPartsDetailComponent,
    ExtractPartsUpdateComponent,
    ExtractPartsDeletePopupComponent,
    ExtractPartsDeleteDialogComponent,
    extractPartsRoute,
    extractPartsPopupRoute
} from './';

const ENTITY_STATES = [...extractPartsRoute, ...extractPartsPopupRoute];

@NgModule({
    imports: [ExtractManagerSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ExtractPartsComponent,
        ExtractPartsDetailComponent,
        ExtractPartsUpdateComponent,
        ExtractPartsDeleteDialogComponent,
        ExtractPartsDeletePopupComponent
    ],
    entryComponents: [
        ExtractPartsComponent,
        ExtractPartsUpdateComponent,
        ExtractPartsDeleteDialogComponent,
        ExtractPartsDeletePopupComponent
    ],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExtractManagerExtractPartsModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
