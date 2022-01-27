package net.moewes.berufsinfo.referenten;

import net.moewes.quarkus.odata.EntityProvider;
import net.moewes.quarkus.odata.annotations.ODataService;
import org.apache.olingo.server.api.ODataApplicationException;

import java.util.Map;
import java.util.Optional;

@ODataService(value = "ReferentenAnmeldungen", entityType = "ReferentenAnmeldung")
public class ReferentenAnmeldungenEntitySet implements EntityProvider<ReferentenAnmeldungOdata> {
    @Override
    public Optional<ReferentenAnmeldungOdata> find(Map<String, String> keys) {
        return Optional.empty();
    }

    @Override
    public ReferentenAnmeldungOdata create(Object entity) throws ODataApplicationException {
        return null;
    }

    @Override
    public void update(Map<String, String> keys, Object entity) {

    }

    @Override
    public void delete(Map<String, String> keys) {

    }
}
