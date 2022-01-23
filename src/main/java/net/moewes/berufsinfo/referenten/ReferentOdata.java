package net.moewes.berufsinfo.referenten;

import lombok.Data;
import net.moewes.quarkus.odata.annotations.EntityKey;
import net.moewes.quarkus.odata.annotations.ODataEntity;

@Data
@ODataEntity("Referent")
public class ReferentOdata {

    @EntityKey
    private String id;
    private String name;
}
