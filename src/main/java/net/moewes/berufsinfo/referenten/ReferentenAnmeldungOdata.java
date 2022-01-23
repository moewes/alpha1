package net.moewes.berufsinfo.referenten;

import lombok.Data;
import net.moewes.quarkus.odata.annotations.EntityKey;
import net.moewes.quarkus.odata.annotations.ODataEntity;

@Data
@ODataEntity("ReferentenAnmeldung")
public class ReferentenAnmeldungOdata {

    @EntityKey
    private String id;
    private String name;
}
