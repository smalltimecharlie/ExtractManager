import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { ExtractManagerSharedModule } from 'app/shared';
import {
    ExtractAuditComponent,
    ExtractAuditDetailComponent,
    ExtractAuditUpdateComponent,
    ExtractAuditDeletePopupComponent,
    ExtractAuditDeleteDialogComponent,
    extractAuditRoute,
    extractAuditPopupRoute
} from './';

const ENTITY_STATES = [...extractAuditRoute, ...extractAuditPopupRoute];

@NgModule({
    imports: [ExtractManagerSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ExtractAuditComponent,
        ExtractAuditDetailComponent,
        ExtractAuditUpdateComponent,
        ExtractAuditDeleteDialogComponent,
        ExtractAuditDeletePopupComponent
    ],
    entryComponents: [
        ExtractAuditComponent,
        ExtractAuditUpdateComponent,
        ExtractAuditDeleteDialogComponent,
        ExtractAuditDeletePopupComponent
    ],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExtractManagerExtractAuditModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
