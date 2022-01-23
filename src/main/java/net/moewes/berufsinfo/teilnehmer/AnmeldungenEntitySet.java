package net.moewes.berufsinfo.teilnehmer;

import net.moewes.quarkus.odata.EntityProvider;
import net.moewes.quarkus.odata.annotations.ODataService;
import org.apache.olingo.server.api.ODataApplicationException;

import java.util.Map;
import java.util.Optional;

@ODataService(value = "Anmeldungen", entityType = "Anmeldung")
public class AnmeldungenEntitySet implements EntityProvider<AnmeldungOdata> {

    @Override
    public Optional<AnmeldungOdata> find(Map<String, String> keys) {
        return Optional.empty(); // FIXME
    }

    @Override
    public AnmeldungOdata create(Object entity) throws ODataApplicationException {
        return null;
    }

    @Override
    public void update(Map<String, String> keys, Object entity) {
        // Do nothing
    }

    @Override
    public void delete(Map<String, String> keys) {
        // Do nothing
    }

}
