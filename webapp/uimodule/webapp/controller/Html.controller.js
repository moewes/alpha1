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
					"<p>TBD ...</p>" +
					"<h1>Corona</h1>" +
					"<p>Unter den aktuellen Umstellen können wir die Veranstaltung leider nicht in der Kreisbibliothek durchführen. Deshalb haben wir uns entschlossen" +
					" wie bereits im Jahr 2021 die Veranstaltung online durchzuführen.</p>" + 
					"<h1>Ablauf</h1>" +
					"<p>Über diese Webseite können Sie die Veranstaltungen, die in diesem Jahr anbieten können einsehen. " + 
					"Bewust bieten wir bei einigen Berufsfelder auch mehrere Veranstaltungen bei unterschiedlichen Referenten an." + 
					"</p><p>Wenn Sie einen Termin anklicken kommen Sie in in eine weitere Sicht, in der weitere Informationen zum Termin angezeigt werden" + 
					" und die Möglichkeit zur Anmeldung zur Veranstaltung besteht.</p>" +
					"<p>Direkt nach der Anmeldung erhalten Sie eine Email zur Bestätigung. Über den n der Email angegebenen Link ist es Möglich Ihre Anmeldung einzusehen." +
					" Rechtzeitig vor der Veranstaltung erhalten Sie eine weitere Mail mit den Zugangsdaten zum Online Meeting." +

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