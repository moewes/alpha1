package net.moewes.berufsinfo.teilnehmer;

import lombok.Data;
import net.moewes.quarkus.odata.annotations.EntityKey;
import net.moewes.quarkus.odata.annotations.ODataEntity;

@Data
@ODataEntity("Teilnehmer")
public class TeilnehmerOdata {

    @EntityKey
    private String id;
    private String name;
    private String email;

}
