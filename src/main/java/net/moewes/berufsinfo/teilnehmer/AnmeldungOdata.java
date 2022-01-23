package net.moewes.berufsinfo.teilnehmer;

import lombok.Data;
import net.moewes.quarkus.odata.annotations.EntityKey;
import net.moewes.quarkus.odata.annotations.ODataEntity;

@Data
@ODataEntity("Anmeldung")
public class AnmeldungOdata {

    @EntityKey
    private String id;

    private String veranstaltung;
    private String meta;

}
