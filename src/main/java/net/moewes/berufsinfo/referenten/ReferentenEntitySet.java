package net.moewes.berufsinfo.referenten;

import com.microsoft.azure.storage.StorageException;
import net.moewes.Dao;
import net.moewes.berufsinfo.VeranstaltungRepository;
import net.moewes.berufsinfo.entities.Referent;
import net.moewes.berufsinfo.entities.Veranstaltung;
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

@ODataService(value = "Referenten", entityType = "Referent")
public class ReferentenEntitySet implements EntityProvider<ReferentOdata> {

    @Inject
    Dao<Referent> referentDao;

    @Inject
    Dao<Veranstaltung> veranstaltungDao;

    @Inject
    VeranstaltungRepository veranstaltungRepository;

    @Override
    public Optional<ReferentOdata> find(Map<String, String> keys) {

        ReferentOdata result = new ReferentOdata();
        try {
            Referent referent = referentDao.get("R", keys.get("Id"));
            if (referent != null) {
                result.setId(referent.getRowKey());
                result.setName(referent.getName());
            }
        } catch (URISyntaxException | StorageException e) {

            e.printStackTrace();
            throw new ODataRuntimeException("Storage error");
        }
        return Optional.of(result);
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

        List<ReferentenVeranstaltungOdata> result = new ArrayList<>();
        try {
            List<Veranstaltung> veranstaltungen = veranstaltungDao.getAll()
                    .stream()
                    .filter(item -> item.getReferent().equals(referent.getId()))
                    .collect(
                            Collectors.toList());
            for (Veranstaltung veranstaltung : veranstaltungen) {
                veranstaltungRepository.find(veranstaltung.getRowKey()).ifPresent(vdata -> {
                    ReferentenVeranstaltungOdata data = new ReferentenVeranstaltungOdata();
                    data.setId(vdata.getId());
                    data.setBerufsfeld(vdata.getBerufsfeld());
                    data.setDatum(vdata.getDatum());
                    data.setZeit(vdata.getZeit());
                    data.setBeschreibung(vdata.getBeschreibung());

                    result.add(data);
                });
            }
        } catch (URISyntaxException | StorageException e) {
            e.printStackTrace();
            throw new ODataRuntimeException("Storage error");
        }
        return result;
    }
}
