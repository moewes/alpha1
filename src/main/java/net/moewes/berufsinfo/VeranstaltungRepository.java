package net.moewes.berufsinfo;

import com.microsoft.azure.storage.StorageException;
import lombok.SneakyThrows;
import net.moewes.Dao;
import net.moewes.berufsinfo.entities.Berufsfeld;
import net.moewes.berufsinfo.entities.Referent;
import net.moewes.berufsinfo.entities.Veranstaltung;

import javax.annotation.PostConstruct;
import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@ApplicationScoped
public class VeranstaltungRepository {

    @Inject
    Dao<Veranstaltung> veranstaltungDao;

    @Inject
    Dao<Referent> referentDao;

    @Inject
    Dao<Berufsfeld> berufsfeldDao;

    @PostConstruct
    public void init() {
    }

    @SneakyThrows
    public List<OdataVeranstaltung> getAll() {

        List<OdataVeranstaltung> result = new ArrayList<>();

        List<Veranstaltung> veranstaltungList = veranstaltungDao.getAll();

        veranstaltungList.sort(Comparator.comparing(Veranstaltung::getDatum)
                .thenComparing(Veranstaltung::getZeit));

        veranstaltungList.forEach(veranstaltung -> {
            OdataVeranstaltung resultItem = new OdataVeranstaltung();
            resultItem.setId(veranstaltung.getRowKey());
            resultItem.setDatum(formatDate(veranstaltung.getDatum()));
            resultItem.setZeit(formatZeit(veranstaltung.getZeit()));
            resultItem.setBeschreibung(veranstaltung.getBeschreibung());
            resultItem.setBerufsfeld(getBerufsfeldName(veranstaltung.getBerufsfeld()));
            resultItem.setReferent(getReferentName(veranstaltung.getReferent()));
            result.add(resultItem);
        });

        return result;
    }

    private String formatZeit(String zeit) {
        return zeit.substring(0, 5);
    }

    private String formatDate(String datum) {
        String[] parts = datum.split("-");
        return parts[2] + "." + parts[1] + "." + parts[0];
    }

    @SneakyThrows
    public Optional<OdataVeranstaltung> find(String id) {

        Veranstaltung veranstaltung = veranstaltungDao.get("Berufsinformationsveranstaltung", id);
        if (veranstaltung != null) {
            OdataVeranstaltung resultItem = new OdataVeranstaltung();
            resultItem.setId(veranstaltung.getRowKey());
            resultItem.setDatum(formatDate(veranstaltung.getDatum()));
            resultItem.setZeit(formatZeit(veranstaltung.getZeit()));
            resultItem.setBeschreibung(veranstaltung.getBeschreibung());
            resultItem.setBerufsfeld(getBerufsfeldName(veranstaltung.getBerufsfeld()));
            resultItem.setReferent(getReferentName(veranstaltung.getReferent()));
            return Optional.of(resultItem);
        } else {
            return Optional.empty();
        }
    }

    private String getReferentName(String referentId) {

        try {
            Referent referent = referentDao.get("R", referentId);
            return referent.getName();
        } catch (URISyntaxException | StorageException e) {
            e.printStackTrace();
            return "";
        }
    }

    private String getBerufsfeldName(String berufsfeldId) {
        try {
            Berufsfeld berufsfeld = berufsfeldDao.get("BF", berufsfeldId);
            return berufsfeld.getName();
        } catch (URISyntaxException | StorageException e) {
            e.printStackTrace();
            return "";
        }
    }
}
