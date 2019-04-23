import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { ExtractManagerSharedModule } from 'app/shared';
import {
    OrganisationComponent,
    OrganisationDetailComponent,
    OrganisationUpdateComponent,
    OrganisationDeletePopupComponent,
    OrganisationDeleteDialogComponent,
    organisationRoute,
    organisationPopupRoute
} from './';

const ENTITY_STATES = [...organisationRoute, ...organisationPopupRoute];

@NgModule({
    imports: [ExtractManagerSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        OrganisationComponent,
        OrganisationDetailComponent,
        OrganisationUpdateComponent,
        OrganisationDeleteDialogComponent,
        OrganisationDeletePopupComponent
    ],
    entryComponents: [
        OrganisationComponent,
        OrganisationUpdateComponent,
        OrganisationDeleteDialogComponent,
        OrganisationDeletePopupComponent
    ],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExtractManagerOrganisationModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
