package net.moewes.berufsinfo.referenten;

import net.moewes.quarkus.odata.EntityProvider;
import net.moewes.quarkus.odata.annotations.ODataNavigationBinding;
import net.moewes.quarkus.odata.annotations.ODataService;
import org.apache.olingo.server.api.ODataApplicationException;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@ODataService(value = "Referenten", entityType = "Referent")
public class ReferentenEntitySet implements EntityProvider<ReferentOdata> {

    @Override
    public Optional<ReferentOdata> find(Map<String, String> keys) {
        return Optional.empty(); // TODO
    }

    @Override
    public ReferentOdata create(Object entity) throws ODataApplicationException {
        return null;  // Not Supported, Do nothing
    }

    @Override
    public void update(Map<String, String> keys, Object entity) {
        // Not Supported, Do nothing
    }

    @Override
    public void delete(Map<String, String> keys) {
        // Not Supported, Do nothing
    }

    @ODataNavigationBinding
    public List<ReferentenVeranstaltungOdata> getVerantstaltungen(ReferentOdata referent) {
        return new ArrayList<>(); // TODO implements
    }
}
