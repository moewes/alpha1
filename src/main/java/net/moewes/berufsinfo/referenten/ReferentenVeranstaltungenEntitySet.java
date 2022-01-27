package net.moewes.berufsinfo.referenten;

import com.microsoft.azure.storage.StorageException;
import com.microsoft.azure.storage.table.TableQuery;
import net.moewes.Dao;
import net.moewes.berufsinfo.VeranstaltungRepository;
import net.moewes.berufsinfo.entities.Anmeldung;
import net.moewes.berufsinfo.entities.Teilnehmer;
import net.moewes.quarkus.odata.EntityProvider;
import net.moewes.quarkus.odata.annotations.ODataNavigationBinding;
import net.moewes.quarkus.odata.annotations.ODataService;
import org.apache.olingo.server.api.ODataApplicationException;

import javax.inject.Inject;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@ODataService(value = "ReferentenVeranstaltungen", entityType = "ReferentenVeranstaltung")
public class ReferentenVeranstaltungenEntitySet
        implements EntityProvider<ReferentenVeranstaltungOdata> {

    @Inject
    VeranstaltungRepository veranstaltungRepository;

    @Inject
    Dao<Anmeldung> anmeldungDao;

    @Inject
    Dao<Teilnehmer> teilnehmerDao;

    @ODataNavigationBinding
    public List<ReferentenAnmeldungOdata> getAnmeldungen(ReferentenVeranstaltungOdata veranstaltung) {

        List<ReferentenAnmeldungOdata> result = new ArrayList<>();
        try {
            TableQuery<Anmeldung> query =
                    TableQuery.from(Anmeldung.class)
                            .where("PartitionKey eq '" + veranstaltung.getId() + "'");
            List<Anmeldung> queryResult = anmeldungDao.query(query);

            for (Anmeldung anmeldung : queryResult) {
                ReferentenAnmeldungOdata data = new ReferentenAnmeldungOdata();
                data.setId(anmeldung.getPartitionKey());
                data.setEmail(anmeldung.getRowKey());

                Teilnehmer teilnehmer = teilnehmerDao.get("Berufsinfo", anmeldung.getRowKey());
                if (teilnehmer != null) {
                    data.setName(teilnehmer.getName());
                }
                result.add(data);
            }
        } catch (URISyntaxException | StorageException e) {
            e.printStackTrace();
        }
        return result;
    }

    @Override
    public Optional<ReferentenVeranstaltungOdata> find(Map<String, String> keys) {

        ReferentenVeranstaltungOdata data = new ReferentenVeranstaltungOdata();
        veranstaltungRepository.find(keys.get("Id")).ifPresent(vdata -> {
            data.setId(vdata.getId());
            data.setBerufsfeld(vdata.getBerufsfeld());
            data.setDatum(vdata.getDatum());
            data.setZeit(vdata.getZeit());
            data.setBeschreibung(vdata.getBeschreibung());
        });

        return Optional.of(data);
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
