import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { ExtractManagerSharedModule } from 'app/shared';
import {
    ExtractOrganisationComponent,
    ExtractOrganisationDetailComponent,
    ExtractOrganisationUpdateComponent,
    ExtractOrganisationDeletePopupComponent,
    ExtractOrganisationDeleteDialogComponent,
    extractOrganisationRoute,
    extractOrganisationPopupRoute
} from './';

const ENTITY_STATES = [...extractOrganisationRoute, ...extractOrganisationPopupRoute];

@NgModule({
    imports: [ExtractManagerSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ExtractOrganisationComponent,
        ExtractOrganisationDetailComponent,
        ExtractOrganisationUpdateComponent,
        ExtractOrganisationDeleteDialogComponent,
        ExtractOrganisationDeletePopupComponent
    ],
    entryComponents: [
        ExtractOrganisationComponent,
        ExtractOrganisationUpdateComponent,
        ExtractOrganisationDeleteDialogComponent,
        ExtractOrganisationDeletePopupComponent
    ],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExtractManagerExtractOrganisationModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
