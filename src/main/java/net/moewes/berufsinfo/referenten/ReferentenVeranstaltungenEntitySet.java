package net.moewes.berufsinfo.referenten;

import net.moewes.quarkus.odata.EntityProvider;
import net.moewes.quarkus.odata.annotations.ODataNavigationBinding;
import net.moewes.quarkus.odata.annotations.ODataService;
import org.apache.olingo.server.api.ODataApplicationException;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@ODataService(value = "ReferentenVeranstaltungen", entityType = "ReferentenVeranstaltung")
public class ReferentenVeranstaltungenEntitySet
        implements EntityProvider<ReferentenVeranstaltungOdata> {

    @ODataNavigationBinding
    public List<ReferentenAnmeldungOdata> getAnmeldungen(ReferentenVeranstaltungOdata veranstaltung) {
        return new ArrayList<>(); // TODO implement
    }

    @Override
    public Optional<ReferentenVeranstaltungOdata> find(Map<String, String> keys) {
        return Optional.empty(); // TODO implement
    }

    @Override
    public ReferentenVeranstaltungOdata create(Object entity) throws ODataApplicationException {
        return null; // Not supported, do nothing
    }

    @Override
    public void update(Map<String, String> keys, Object entity) {
        // Not supported, do nothing
    }

    @Override
    public void delete(Map<String, String> keys) {
        // Not supported, do nothing
    }
}
