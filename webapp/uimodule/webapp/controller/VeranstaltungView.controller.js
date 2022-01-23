

sap.ui.define([
	"rcBerufsinfo/controller/BaseController",
	'sap/m/MessageToast',
	'sap/ui/core/BusyIndicator'
], function (BaseController,MessageToast,BusyIndicator) {
	"use strict";
	return BaseController.extend("rcBerufsinfo.controller.VeranstaltungView", {
		onInit: function () {
			var oRouter = this.getRouter();
			oRouter.getRoute("veranstaltung").attachMatched(this._onRouteMatched, this);
		},
		myData: {
			veranstaltungId: "",
		},
		_onRouteMatched: function (oEvent) {
			var oArgs, oView;
			oArgs = oEvent.getParameter("arguments");
			oView = this.getView();
			this.myData.veranstaltungId = oArgs.id;

			oView.bindElement({
				path: "/Veranstaltungen('" + oArgs.id + "')",
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
		onAnmelden: function (oEvent) {
			console.log("Anmelden");
			var bOk = true;
			var oNameFeld = this.byId("name");
			var sName = oNameFeld.getValue();
			if (sName == "") {
				oNameFeld.setValueState(sap.ui.core.ValueState.Error);
				oNameFeld.setValueStateText("Bitte Ihren Namen eingeben");
				bOk = false;
			} else {
				oNameFeld.setValueState(sap.ui.core.ValueState.None);
			}
			var oEmailFeld = this.byId("email");
			var sEmail = oEmailFeld.getValue();
			if (sEmail == "") {
				oEmailFeld.setValueState(sap.ui.core.ValueState.Error);
				oEmailFeld.setValueStateText("Bitte Ihre Emailadresse eingeben");
			} else {
				var mailregex = /^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/;
				if (!mailregex.test(sEmail)) {
					oEmailFeld.setValueState(sap.ui.core.ValueState.Error);
					oEmailFeld.setValueStateText("Bitte eine gültige Emailadresse eingeben");
					bOk = false;
				} else {
					oEmailFeld.setValueState(sap.ui.core.ValueState.None);
				}
			}
			var oAgreeFeld = this.byId("agreement");
			var bAgree = oAgreeFeld.getSelected();
			if (!bAgree) {
				oAgreeFeld.setValueState(sap.ui.core.ValueState.Error);
				bOk = false;
			} else {
				oAgreeFeld.setValueState(sap.ui.core.ValueState.None);
			}
			var oRobotFeld = this.byId("roboter");
			var bRoboter = oRobotFeld.getSelected();
			if (!bRoboter) {
				oRobotFeld.setValueState(sap.ui.core.ValueState.Error);
				bOk = false;
			} else {
				oRobotFeld.setValueState(sap.ui.core.ValueState.None);
			}

			if (bOk) {
				var oModel = this.getView().getModel();
				var viewContext = this.getView().getBindingContext();
				var oList = oModel.bindContext("Quarkus.OData.register(...)", viewContext);
				BusyIndicator.show();
				let me = this;

				oList.setParameter("name", sName).setParameter("email", sEmail).execute().then(function () {
					var oResults = oList.getBoundContext().getObject();
					console.log(oResults);
					BusyIndicator.hide();
					MessageToast.show(oResults.value);
					oAgreeFeld.setSelected(false);
					oRobotFeld.setSelected(false);
					me.onNavBack();
				}).catch( function (error) {
					BusyIndicator.hide();
					MessageToast.show("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal.");
					console.log("Fehler" + error);
				});
			}
		}

	});
});