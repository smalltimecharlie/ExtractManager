import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IOrganisation } from 'app/shared/model/organisation.model';
import { OrganisationService } from './organisation.service';

@Component({
    selector: 'jhi-organisation-delete-dialog',
    templateUrl: './organisation-delete-dialog.component.html'
})
export class OrganisationDeleteDialogComponent {
    organisation: IOrganisation;

    constructor(
        protected organisationService: OrganisationService,
        public activeModal: NgbActiveModal,
        protected eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.organisationService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'organisationListModification',
                content: 'Deleted an organisation'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-organisation-delete-popup',
    template: ''
})
export class OrganisationDeletePopupComponent implements OnInit, OnDestroy {
    protected ngbModalRef: NgbModalRef;

    constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ organisation }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(OrganisationDeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.organisation = organisation;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate(['/organisation', { outlets: { popup: null } }]);
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate(['/organisation', { outlets: { popup: null } }]);
                        this.ngbModalRef = null;
                    }
                );
            }, 0);
        });
    }

    ngOnDestroy() {
        this.ngbModalRef = null;
    }
}
