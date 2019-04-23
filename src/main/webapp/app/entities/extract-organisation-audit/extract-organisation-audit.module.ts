import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { ExtractManagerSharedModule } from 'app/shared';
import {
    ExtractOrganisationAuditComponent,
    ExtractOrganisationAuditDetailComponent,
    ExtractOrganisationAuditUpdateComponent,
    ExtractOrganisationAuditDeletePopupComponent,
    ExtractOrganisationAuditDeleteDialogComponent,
    extractOrganisationAuditRoute,
    extractOrganisationAuditPopupRoute
} from './';

const ENTITY_STATES = [...extractOrganisationAuditRoute, ...extractOrganisationAuditPopupRoute];

@NgModule({
    imports: [ExtractManagerSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ExtractOrganisationAuditComponent,
        ExtractOrganisationAuditDetailComponent,
        ExtractOrganisationAuditUpdateComponent,
        ExtractOrganisationAuditDeleteDialogComponent,
        ExtractOrganisationAuditDeletePopupComponent
    ],
    entryComponents: [
        ExtractOrganisationAuditComponent,
        ExtractOrganisationAuditUpdateComponent,
        ExtractOrganisationAuditDeleteDialogComponent,
        ExtractOrganisationAuditDeletePopupComponent
    ],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExtractManagerExtractOrganisationAuditModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
