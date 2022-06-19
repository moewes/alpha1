package net.moewes.berufsinfo;

import com.microsoft.azure.storage.StorageException;
import io.vertx.ext.mail.MailClient;
import io.vertx.ext.mail.MailMessage;
import net.moewes.Dao;
import net.moewes.berufsinfo.entities.Anmeldung;
import net.moewes.berufsinfo.entities.Teilnehmer;
import net.moewes.berufsinfo.entities.Veranstaltung;
import org.apache.olingo.commons.api.ex.ODataRuntimeException;
import org.apache.olingo.server.api.ODataApplicationException;
import org.eclipse.microprofile.config.inject.ConfigProperty;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import java.net.URISyntaxException;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Locale;
import java.util.UUID;
import java.util.logging.Logger;

@ApplicationScoped
public class RegisterService {

    @ConfigProperty(name = "sender")
    String sender_email;

    @ConfigProperty(name = "serviceurl")
    String service_url;

    @ConfigProperty(name = "bcc")
    String bcc_recipient;

    @Inject
    VeranstaltungRepository veranstaltungRepository;

    @Inject
    Dao<Veranstaltung> veranstaltungDao;

    @Inject
    Dao<Teilnehmer> teilnehmerDao;

    @Inject
    Dao<Anmeldung> anmeldungDao;

    @Inject
    MailClient mailClient;


    public String register(String id, String name, String email) throws ODataApplicationException {

        Logger.getLogger("Anmeldung").info("Anmeldung: " + name + ", " + email + ", " + id); // TODO
        String result = "";

        // Check Veranstaltung
        try {
            Veranstaltung veranstaltung =
                    veranstaltungDao.get("Berufsinformationsveranstaltung", id);

            if (veranstaltung == null) {
                throw new ODataRuntimeException("Veranstaltung existiert nicht");
            }

            // Check Name
            if (name == null || name.isEmpty()) {
                throw new ODataApplicationException("Bad Request - parameter is missing 001",
                        400,
                        Locale.ENGLISH);
                // TODO
            }
            // Check Email
            if (email == null || email.isEmpty()) {
                throw new ODataApplicationException("Bad Request - parameter is missing 002",
                        400,
                        Locale.ENGLISH);
            }

            Teilnehmer teilnehmer = teilnehmerDao.get("Berufsinfo", email);
            if (teilnehmer == null) {
                teilnehmer = new Teilnehmer("Berufsinfo", email);
                teilnehmer.setName(name);
                teilnehmer.setEmail(email);
                teilnehmer.setToken(UUID.randomUUID().toString());
                teilnehmerDao.save(teilnehmer);
            }

            Anmeldung anmeldung = anmeldungDao.get(id, email);
            if (anmeldung != null) {
                result = "Sie sind bereits für diese Veranstaltung angemeldet";
            } else {
                anmeldung = new Anmeldung(id, email);
                anmeldung.setDatum(LocalDate.now().toString());
                anmeldung.setZeit(LocalTime.now().toString());
                anmeldungDao.save(anmeldung);

                result = "Vielen Dank für Ihre Anmeldung";
                sendMail(teilnehmer, veranstaltung); // FIXME
            }

            return result;


        } catch (URISyntaxException | StorageException e) {
            e.printStackTrace();
            throw new ODataApplicationException("technical error 1", 400, Locale.ENGLISH);
        }
    }

    private void sendMail(Teilnehmer teilnehmer, Veranstaltung veranstaltung)
            throws ODataApplicationException {

        // TODO escape?!!! // FIXME

        OdataVeranstaltung odataVeranstaltung =
                veranstaltungRepository.find(veranstaltung.getRowKey()).orElseThrow(() ->
                        new ODataApplicationException("technical error 2", 400, Locale.ENGLISH));

        String datum = odataVeranstaltung.getDatum();
        String uhrzeit = odataVeranstaltung.getZeit();
        String berufsfeld = odataVeranstaltung.getBerufsfeld();
        String link = service_url +
                "/login?token=" + teilnehmer.getToken();

        String messageText = "Hallo " + teilnehmer.getName()
                + ",<br/><br/> vielen Dank für Ihr Interesse! Ihre Anmeldung zur Veranstaltung am "
                + datum + " um " + uhrzeit + " Berufsfeld " + berufsfeld + " ist gespeichert. <br/>" +
                "Sie erhalten rechtzeitig vor dem Termin eine weitere Mail mit den Zugangsdaten zum Online Meeting. <br/>" +
                "Ihre Anmeldungen können Sie <a href=\"" + link + "\">hier</a> einsehen." +
                "<br/><br/>" +
                "Viele Grüße<br/>";

        MailMessage message = new MailMessage();
        message.setFrom(sender_email);
        message.setTo(teilnehmer.getEmail());
        message.setBcc(bcc_recipient);
        message.setSubject("Berufsinformation 2022");
        //message.setText("this is the plain message text");
        message.setHtml(messageText);
        mailClient.sendMail(message)
                .onSuccess(System.out::println)
                .onFailure(Throwable::printStackTrace);
    }
}
