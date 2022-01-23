package net.moewes.berufsinfo;

import net.moewes.quarkus.odata.EntityCollectionProvider;
import net.moewes.quarkus.odata.EntityProvider;
import net.moewes.quarkus.odata.annotations.ODataAction;
import net.moewes.quarkus.odata.annotations.ODataFunction;
import net.moewes.quarkus.odata.annotations.ODataService;
import org.apache.olingo.server.api.ODataApplicationException;

import javax.inject.Inject;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@ODataService(value = "Veranstaltungen", entityType = "Veranstaltung")
public class VeranstaltungenService implements EntityProvider<OdataVeranstaltung>,
        EntityCollectionProvider<OdataVeranstaltung> {

    @Inject
    VeranstaltungRepository repository;

    @Inject
    RegisterService registerService;

    @Override
    public List<OdataVeranstaltung> getCollection() {
        return repository.getAll();
    }

    @Override
    public Optional<OdataVeranstaltung> find(Map<String, String> keys) {

        String id = keys.get("Id");
        return repository.find(id);
    }

    @Override
    public OdataVeranstaltung create(Object entity) {
        return null;
    }

    @Override
    public void update(Map<String, String> keys, Object entity) {
        // No update possible is a read only service
    }

    @Override
    public void delete(Map<String, String> keys) {
        // No delete possible is a read only service
    }

    @ODataAction()
    public String register(OdataVeranstaltung entity, String name, String email) throws ODataApplicationException {

        return registerService.register(entity.getId(), name, email);
    }

    @ODataFunction()
    public String dummyFunction() {
        return "Hallo Welt";
    }
}
