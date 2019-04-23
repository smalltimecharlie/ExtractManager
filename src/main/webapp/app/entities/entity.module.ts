import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'organisation',
                loadChildren: './organisation/organisation.module#ExtractManagerOrganisationModule'
            },
            {
                path: 'extract-config',
                loadChildren: './extract-config/extract-config.module#ExtractManagerExtractConfigModule'
            },
            {
                path: 'extract-organisation',
                loadChildren: './extract-organisation/extract-organisation.module#ExtractManagerExtractOrganisationModule'
            },
            {
                path: 'extract-parts',
                loadChildren: './extract-parts/extract-parts.module#ExtractManagerExtractPartsModule'
            },
            {
                path: 'extract-details',
                loadChildren: './extract-details/extract-details.module#ExtractManagerExtractDetailsModule'
            },
            {
                path: 'extract-tables',
                loadChildren: './extract-tables/extract-tables.module#ExtractManagerExtractTablesModule'
            },
            {
                path: 'extract-organisation-audit',
                loadChildren: './extract-organisation-audit/extract-organisation-audit.module#ExtractManagerExtractOrganisationAuditModule'
            },
            {
                path: 'extract-audit',
                loadChildren: './extract-audit/extract-audit.module#ExtractManagerExtractAuditModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExtractManagerEntityModule {}
