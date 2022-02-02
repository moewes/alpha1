

sap.ui.define([
	"rcBerufsinfo/controller/BaseController",
	'sap/m/MessageToast',
	'sap/ui/core/BusyIndicator'
], function (BaseController, MessageToast, BusyIndicator) {
	"use strict";
	return BaseController.extend("rcBerufsinfo.controller.ReferentenView", {
		onInit: function () {
			var oRouter = this.getRouter();
			oRouter.getRoute("referenten").attachMatched(this._onRouteMatched, this);
		},
		myData: {
			veranstaltungId: "",
		},
		_onRouteMatched: function (oEvent) {
			var oArgs, oView;
			oArgs = oEvent.getParameter("arguments");
			oView = this.getView();

			var otable = oView.byId("veranstaltungsListe");
			//otable.bindAggregation("/Teilnehmer('" + oArgs.id + "')/Anmeldungen");

			oView.bindElement({
				path: "/Referenten('" + oArgs.id + "')",
				events: {
					change: this._onBindingChange.bind(this),
					dataRequested: function (oEvent) {
						oView.setBusy(true);
					},
					dataReceived: function (oEvent) {
						oView.setBusy(false);
					}
				}
			});
		},
		_onBindingChange: function (oEvent) {
			// No data for the binding
			if (!this.getView().getBindingContext()) {
				this.getRouter().getTargets().display("notFound");
			}
		},
		onDetail: function (oEvent) {

			console.log("Detail");
			var oItem, oCtx;
			oItem = oEvent.getParameter("listItem");
			oCtx = oItem.getBindingContext();
			this.getRouter().navTo("referentenAnmeldungen", {
				id: oCtx.getProperty("Id")
			}, false);
		},
	});
});