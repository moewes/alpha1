package net.moewes.berufsinfo.referenten;

import lombok.Data;
import net.moewes.quarkus.odata.annotations.EntityKey;
import net.moewes.quarkus.odata.annotations.ODataEntity;

@Data
@ODataEntity("ReferentenVeranstaltung")
public class ReferentenVeranstaltungOdata {

    @EntityKey
    private String id;

    private String datum;
    private String zeit;
    private String berufsfeld;
    private String beschreibung;
}
