package io.github.jhipster.application.repository;

import io.github.jhipster.application.domain.ExtractOrganisation;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the ExtractOrganisation entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ExtractOrganisationRepository extends JpaRepository<ExtractOrganisation, Long> {

}
