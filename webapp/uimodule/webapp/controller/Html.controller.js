sap.ui.define([
	'sap/ui/thirdparty/jquery',
	"rcBerufsinfo/controller/BaseController",
	'sap/ui/core/HTML'
], function(
	jQuery,
	BaseController,
	HTML
) {
	"use strict";

	return BaseController.extend("rcBerufsinfo.controller.Html", {

		onInit: function() {
			var oHtml = this.byId("htmlControl");

			if (!oHtml) {
				var sId = this.createId("htmlControl");
				oHtml = new HTML(sId, {
					// the static content as a long string literal
					content:
					"<div style='width=100%'><div style=\"padding:10px\">" +
					"<h1>Hintergrund</h1>" +
					"<p>Seit vielen Jahren schon führt der Rotary Club Eutin im Februar einen Berufsinformationsabend für die Schülerinnen und Schüler " +
					" der Eutiner Gymnasien durch. Seit einigen Jahren ist auch der Rotary Club Neustadt und das Neustädter Gymnansium dabei.</p>" +
					"<p>Bei diesem Berufsinformationsabenden geht es nicht um eine Berufs- oder Studienberatung im klassischen Sinne, sondern darum jungen Menschen, die " +
					" vor der Entscheidung stehen, sich für eine Berufsausbildung oder ein Studium zu entscheiden, die Möglichkeit zu geben mit Frauen und Männern ins " +
					" Gespräch zu kommen, die in diesen Berufsfeldern tätig sind oder dies waren. Persönliche Erfahrungen und Einblicke aus der Praxis können so im Gespräch"
					+" geteilt werden. Und das in lockerer Athmosphäre in der auch jede Frage gestellt werden kann."  +
					"<h1>Corona</h1>" +
					"<p>Unter den aktuellen Umständen können wir die Veranstaltung leider nicht in der Kreisbibliothek durchführen. Deshalb haben wir uns entschlossen" +
					" wie bereits im Jahr 2021 die Veranstaltung online durchzuführen.</p>" + 
					"<h1>Ablauf</h1>" +
					"<p>Über diese Webseite können Sie die Veranstaltungen, die wir in diesem Jahr anbieten können, einsehen. " + 
					"Bewusst bieten wir bei einigen Berufsfeldern auch mehrere Veranstaltungen bei unterschiedlichen Referenten an." + 
					"</p><p>Wenn Sie einen Termin anklicken kommen Sie in in eine weitere Sicht, in der weitere Informationen zum Termin angezeigt werden" + 
					" und die Möglichkeit zur Anmeldung besteht.</p>" +
					"<p>Direkt nach der Anmeldung erhalten Sie eine Email zur Bestätigung. Über den in der Email angegebenen Link ist es möglich Ihre Anmeldungen einzusehen." +
					" Rechtzeitig vor der Veranstaltung erhalten Sie eine weitere Email mit den Zugangsdaten zum Online Meeting." +
					"<h1>Über Rotary </h1>" +
					"<p>Rotary ist ein globales Netzwerk mit dem Ziel, eine Welt aufzubauen, in der sich Menschen " +
					"zusammenfinden und aktiv werden, um dauerhafte Veränderungen zu bewirken. Rotary " +
					"schätzt Vielfalt und die Beiträge von Menschen aller Herkunft, unabhängig von Alter, ethnischer " +
					"Zugehörigkeit, Rasse, Hautfarbe, Fähigkeiten, Religion, sozioökonomischem Status, Kultur, " +
					"Geschlecht, sexueller Orientierung und Geschlechtsidentität.<p>" +
					"<p><a href='https://eutin.rotary.de' target='_new'>Mehr Informationen zum Club Eutin</a>, " +
					"<a href='https://neustadt-ostsee.rotary.de' target='_new'>Mehr Informationen zum Club Neustadt</a>" +
					"</div></div>",

					preferDOM : true,

					// use the afterRendering event for 2 purposes
					
				});

				var oLayout = this.byId("staticContentLayout");
				oLayout.addContent(oHtml);
			}
		}
    });
});