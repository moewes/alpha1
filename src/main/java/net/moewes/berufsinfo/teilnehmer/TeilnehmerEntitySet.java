package net.moewes.berufsinfo.teilnehmer;

import com.microsoft.azure.storage.StorageException;
import net.moewes.Dao;
import net.moewes.berufsinfo.VeranstaltungRepository;
import net.moewes.berufsinfo.entities.Anmeldung;
import net.moewes.berufsinfo.entities.Teilnehmer;
import net.moewes.quarkus.odata.EntityProvider;
import net.moewes.quarkus.odata.annotations.ODataNavigationBinding;
import net.moewes.quarkus.odata.annotations.ODataService;
import org.apache.olingo.commons.api.ex.ODataRuntimeException;
import org.apache.olingo.server.api.ODataApplicationException;

import javax.inject.Inject;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@ODataService(value = "Teilnehmer", entityType = "Teilnehmer")
public class TeilnehmerEntitySet implements EntityProvider<TeilnehmerOdata> {

    @Inject
    Dao<Teilnehmer> teilnehmerDao;

    @Inject
    Dao<Anmeldung> anmeldungDao;

    @Inject
    VeranstaltungRepository veranstaltungRepository;

    @Override
    public Optional<TeilnehmerOdata> find(Map<String, String> keys) {

        try {
            TeilnehmerOdata data = new TeilnehmerOdata();
            teilnehmerDao.getAll()
                    .stream()
                    .filter(item -> item.getToken().equals(keys.get("Id")))
                    .findFirst()
                    .ifPresent(result -> {
                        data.setId(result.getToken());
                        data.setName(result.getName());
                        data.setEmail(result.getEmail());
                    });
            return Optional.of(data);
        } catch (URISyntaxException | StorageException e) {
            e.printStackTrace();
            throw new ODataRuntimeException("Storage Exception");
        }
    }

    @Override
    public TeilnehmerOdata create(Object entity) throws ODataApplicationException {
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

    @ODataNavigationBinding
    public List<AnmeldungOdata> getAnmeldungen(TeilnehmerOdata teilnehmer) {

        try {
            List<AnmeldungOdata> result = new ArrayList<>();
            List<Anmeldung> anmeldungen = anmeldungDao.getAll()
                    .stream()
                    .filter(item -> item.getRowKey().equals(teilnehmer.getEmail()))
                    .collect(
                            Collectors.toList());
            anmeldungen.forEach(item -> {
                veranstaltungRepository.find(item.getPartitionKey())
                        .ifPresent(odataVeranstaltung -> {
                            AnmeldungOdata data = new AnmeldungOdata();
                            data.setId(item.getPartitionKey());
                            data.setVeranstaltung("Berufsfeld: " + odataVeranstaltung.getBerufsfeld() +
                                    " am " + odataVeranstaltung.getDatum() + " um " + odataVeranstaltung.getZeit());
                            result.add(data);
                        });
            });
            return result;
        } catch (URISyntaxException | StorageException e) {
            e.printStackTrace();
            throw new ODataRuntimeException("Storage Exception");
        }
    }
}
