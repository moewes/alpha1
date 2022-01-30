sap.ui.define([
    "rcBerufsinfo/controller/BaseController",
    'sap/m/Popover',
    'sap/m/Button',
    'sap/m/library'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, Popover, Button, library) {
        "use strict";

        var ButtonType = library.ButtonType,
            PlacementType = library.PlacementType;

        return BaseController.extend("rcBerufsinfo.controller.MainView", {
            onInit: function () {

                var tile = this.getView().byId("myAppointments33");
                var userMenu = this.getView().byId("userMenu");
                var referentenTile = this.getView().byId("_IDGenGenericTile444");

                if (this.getCookieData("token") != false) {
                    tile.setVisible(true);
                    userMenu.setVisible(true);
                    referentenTile.setVisible(false);
                } else if (this.getCookieData("referent") != false) {
                    referentenTile.setVisible(true);
                    userMenu.setVisible(true);
                    tile.setVisible(false);
                } else {
                    tile.setVisible(false);
                    userMenu.setVisible(false);
                    referentenTile.setVisible(false);
                }
            },
            onBerufsfelder: function () {
                this.getRouter().navTo("berufsfelder", {}, false);
            },
            onPress: function () {
                sap.m.URLHelper.redirect("https://clouduiapp.azurewebsites.net/api/todos", false);
            },
            onPress2: function () {
                this.getRouter().navTo("html", {}, false /*no history*/);
            },
            onAnmeldungen: function () {
                console.log("Anmeldungen");
                var token = this.getCookieData("token");
                console.log("Token " + token);
                this.getRouter().navTo("anmeldungen", { id: token }, false);
            },
            onVeranstaltungen: function () {
                this.getRouter().navTo("veranstaltungen", {}, false);
            },
            onReferenten: function () {
                var token = this.getCookieData("referent");
                console.log("Token " + token);
                this.getRouter().navTo("referenten", { id: token}, false);
            },
            onInfo: function () {
                this.getRouter().navTo("info", {}, false);
            },

            onUserMenu: function (oEvent) {

                var logoutfkt;
                if (this.getCookieData("referent") != false) {
                    logoutfkt = this.onLogoutReferent;
                } else {
                    logoutfkt = this.onLogout;
                }

                var oPopover = new Popover({
                    showHeader: false,
                    placement: PlacementType.Bottom,
                    content: [
                        new Button({
                            text: 'Feedback',
                            type: ButtonType.Transparent
                        }),
                        new Button({
                            text: 'Logout',
                            type: ButtonType.Transparent,
                            press: logoutfkt
                        })
                    ]
                }).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');

                oPopover.openBy(oEvent.getSource());
            },
            onLogout: function (oEvent) {
                document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                sap.m.URLHelper.redirect("/logout", false);
            },
            onLogoutReferent: function (oEvent) {
                document.cookie = 'referent=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                sap.m.URLHelper.redirect("/logoutReferent", false);
            }
        });
    });
