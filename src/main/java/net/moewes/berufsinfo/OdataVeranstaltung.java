package net.moewes.berufsinfo;

import lombok.Data;
import net.moewes.quarkus.odata.annotations.EntityKey;
import net.moewes.quarkus.odata.annotations.ODataEntity;

@Data
@ODataEntity("Veranstaltung")
public class OdataVeranstaltung {

    @EntityKey
    private String id;

    private String datum;
    private String zeit;
    private String berufsfeld;
    private String referent;
    private String beschreibung;
}
