//@ui5-bundle rcBerufsinfo/Component-preload.js
sap.ui.require.preload({
	"rcBerufsinfo/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","rcBerufsinfo/model/models"],function(e,t,s){"use strict";return e.extend("rcBerufsinfo.Component",{metadata:{manifest:"json"},myData:{_isLoading:true,_sHash:"",navigationNeeded:false},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();var t=this.getRouter();t.attachBypassed(this._onBypassed,this);this.setModel(s.createDeviceModel(),"device")},_onBypassed:function(e){var t=e.getParameter("hash");console.log("_onBypassed Hash="+t);if(this.myData._isLoading){console.log(" isloading "+this.myData._isLoading);this.myData._sHash=t;this.myData.navigationNeeded=true}else{var s=this.getRouter();var a=s.getRouteByHash(t);console.log("route "+a+" isloading "+this._loading);if(a){console.log("parse "+t);s.parse(t)}else{s.navTo("notFound")}}}})});
},
	"rcBerufsinfo/controller/AnmeldungenView.controller.js":function(){sap.ui.define(["rcBerufsinfo/controller/BaseController","sap/m/MessageToast","sap/ui/core/BusyIndicator"],function(e,t,n){"use strict";return e.extend("rcBerufsinfo.controller.AnmeldungenView",{onInit:function(){var e=this.getRouter();e.getRoute("anmeldungen").attachMatched(this._onRouteMatched,this)},myData:{veranstaltungId:""},_onRouteMatched:function(e){var t,n;t=e.getParameter("arguments");n=this.getView();var i=n.byId("anmeldungenListe");n.bindElement({path:"/Teilnehmer('"+t.id+"')",events:{change:this._onBindingChange.bind(this),dataRequested:function(e){n.setBusy(true)},dataReceived:function(e){n.setBusy(false)}}})},_onBindingChange:function(e){if(!this.getView().getBindingContext()){this.getRouter().getTargets().display("notFound")}}})});
},
	"rcBerufsinfo/controller/App.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/UIComponent"],function(n,e){"use strict";return n.extend("rcBerufsinfo.controller.App",{onInit:function(){}})});
},
	"rcBerufsinfo/controller/BaseController.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History","sap/ui/core/UIComponent"],function(e,t,o){"use strict";return e.extend("rcBerufsinfo.controller.BaseController",{getModel:function(e){return this.getView().getModel(e)},setModel:function(e,t){return this.getView().setModel(e,t)},getResourceBundle:function(){return this.getOwnerComponent().getModel("i18n").getResourceBundle()},navTo:function(e,t,o){this.getRouter().navTo(e,t,o)},getRouter:function(){return o.getRouterFor(this)},onNavBack:function(){var e=t.getInstance().getPreviousHash();if(e!==undefined){window.history.back()}else{this.getRouter().navTo("appHome",{},true)}},getCookieData:function(e){var t=document.cookie.split("; "),o=t.length,n;while(o--){n=t[o].split("=");if(n[0]===e)return n[1]}return false},deleteCookie:function(e){document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"}})});
},
	"rcBerufsinfo/controller/Html.controller copy.js":function(){sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/core/mvc/Controller","sap/ui/core/HTML"],function(t,e,o){"use strict";return e.extend("rcBerufsinfo.controller.Html",{onInit:function(){var t=this.byId("htmlControl");if(!t){var e=this.createId("htmlControl");t=new o(e,{content:"<div style='width=100%'><cloudui-view backend='http://localhost:8080/api/net.moewes.app.todo.TodoListView'></cloudui-view></div>",preferDOM:true});var i=this.byId("staticContentLayout");i.addContent(t)}}})});
},
	"rcBerufsinfo/controller/Html.controller.js":function(){sap.ui.define(["sap/ui/thirdparty/jquery","rcBerufsinfo/controller/BaseController","sap/ui/core/HTML"],function(e,n,i){"use strict";return n.extend("rcBerufsinfo.controller.Html",{onInit:function(){var e=this.byId("htmlControl");if(!e){var n=this.createId("htmlControl");e=new i(n,{content:"<div style='width=100%'><div style=\"padding:10px\">"+"<h1>Hintergrund</h1>"+"<p>Seit vielen Jahren schon führt der Rotary Club Eutin im Februar einen Berufsinformationsabend für die Schülerinnen und Schüler "+" der Eutiner Gymnasien durch. Seit einigen Jahren ist auch der Rotary Club Neustadt und das Neustädter Gymnansium dabei.</p>"+"<p>Bei diesem Berufsinformationsabenden geht es nicht um eine Berufs- oder Studienberatung im klassischen Sinne, sondern darum jungen Menschen, die "+" vor der Entscheidung stehen, sich für eine Berufsausbildung oder ein Studium zu entscheiden, die Möglichkeit zu geben mit Frauen und Männern ins "+" Gespräch zu kommen, die in diesen Berufsfeldern tätig sind oder dies waren. Persönliche Erfahrungen und Einblicke aus der Praxis können so im Gespräch"+" geteilt werden. Und das in lockerer Athmosphäre in der auch jede Frage gestellt werden kann."+"<h1>Corona</h1>"+"<p>Unter den aktuellen Umständen können wir die Veranstaltung leider nicht in der Kreisbibliothek durchführen. Deshalb haben wir uns entschlossen"+" wie bereits im Jahr 2021 die Veranstaltung online durchzuführen.</p>"+"<h1>Ablauf</h1>"+"<p>Über diese Webseite können Sie die Veranstaltungen, die wir in diesem Jahr anbieten können, einsehen. "+"Bewusst bieten wir bei einigen Berufsfeldern auch mehrere Veranstaltungen bei unterschiedlichen Referenten an."+"</p><p>Wenn Sie einen Termin anklicken kommen Sie in in eine weitere Sicht, in der weitere Informationen zum Termin angezeigt werden"+" und die Möglichkeit zur Anmeldung besteht.</p>"+"<p>Direkt nach der Anmeldung erhalten Sie eine Email zur Bestätigung. Über den in der Email angegebenen Link ist es möglich Ihre Anmeldungen einzusehen."+" Rechtzeitig vor der Veranstaltung erhalten Sie eine weitere Email mit den Zugangsdaten zum Online Meeting."+"<h1>Über Rotary </h1>"+"<p>Rotary ist ein globales Netzwerk mit dem Ziel, eine Welt aufzubauen, in der sich Menschen "+"zusammenfinden und aktiv werden, um dauerhafte Veränderungen zu bewirken. Rotary "+"schätzt Vielfalt und die Beiträge von Menschen aller Herkunft, unabhängig von Alter, ethnischer "+"Zugehörigkeit, Rasse, Hautfarbe, Fähigkeiten, Religion, sozioökonomischem Status, Kultur, "+"Geschlecht, sexueller Orientierung und Geschlechtsidentität.<p>"+"<p><a href='https://eutin.rotary.de' target='_new'>Mehr Informationen zum Club Eutin</a>, "+"<a href='https://neustadt-ostsee.rotary.de' target='_new'>Mehr Informationen zum Club Neustadt</a>"+"</div></div>",preferDOM:true});var r=this.byId("staticContentLayout");r.addContent(e)}}})});
},
	"rcBerufsinfo/controller/MainView.controller.js":function(){sap.ui.define(["rcBerufsinfo/controller/BaseController","sap/m/Popover","sap/m/Button","sap/m/library"],function(e,t,n,o){"use strict";var s=o.ButtonType,i=o.PlacementType;return e.extend("rcBerufsinfo.controller.MainView",{onInit:function(){var e=this.getView().byId("myAppointments33");var t=this.getView().byId("userMenu");var n=this.getView().byId("_IDGenGenericTile444");if(this.getCookieData("token")!=false){e.setVisible(true);t.setVisible(true);n.setVisible(false)}else if(this.getCookieData("referent")!=false){n.setVisible(true);t.setVisible(true);e.setVisible(false)}else{e.setVisible(false);t.setVisible(false);n.setVisible(false)}},onBerufsfelder:function(){this.getRouter().navTo("berufsfelder",{},false)},onPress:function(){sap.m.URLHelper.redirect("https://clouduiapp.azurewebsites.net/api/todos",false)},onPress2:function(){this.getRouter().navTo("html",{},false)},onAnmeldungen:function(){console.log("Anmeldungen");var e=this.getCookieData("token");console.log("Token "+e);this.getRouter().navTo("anmeldungen",{id:e},false)},onVeranstaltungen:function(){this.getRouter().navTo("veranstaltungen",{},false)},onReferenten:function(){var e=this.getCookieData("referent");console.log("Token "+e);this.getRouter().navTo("referenten",{id:e},false)},onInfo:function(){this.getRouter().navTo("info",{},false)},onUserMenu:function(e){var o;if(this.getCookieData("referent")!=false){o=this.onLogoutReferent}else{o=this.onLogout}var r=new t({showHeader:false,placement:i.Bottom,content:[new n({text:"Feedback",type:s.Transparent}),new n({text:"Logout",type:s.Transparent,press:o})]}).addStyleClass("sapMOTAPopover sapTntToolHeaderPopover");r.openBy(e.getSource())},onLogout:function(e){document.cookie="token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";sap.m.URLHelper.redirect("/logout",false)},onLogoutReferent:function(e){document.cookie="referent=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";sap.m.URLHelper.redirect("/logoutReferent",false)}})});
},
	"rcBerufsinfo/controller/NotFound.controller.js":function(){sap.ui.define(["rcBerufsinfo/controller/BaseController"],function(n){"use strict";return n.extend("rcBerufsinfo.controller.NotFound",{onInit:function(){}})});
},
	"rcBerufsinfo/controller/ReferentenAnmeldungenView.controller.js":function(){sap.ui.define(["rcBerufsinfo/controller/BaseController","sap/m/MessageToast","sap/ui/core/BusyIndicator"],function(e,t,n){"use strict";return e.extend("rcBerufsinfo.controller.ReferentenAnmeldungenView",{onInit:function(){var e=this.getRouter();e.getRoute("referentenAnmeldungen").attachMatched(this._onRouteMatched,this)},myData:{veranstaltungId:""},_onRouteMatched:function(e){var t,n;t=e.getParameter("arguments");n=this.getView();var i=n.byId("veranstaltungsListe");n.bindElement({path:"/ReferentenVeranstaltungen('"+t.id+"')",events:{change:this._onBindingChange.bind(this),dataRequested:function(e){n.setBusy(true)},dataReceived:function(e){n.setBusy(false)}}})},_onBindingChange:function(e){if(!this.getView().getBindingContext()){this.getRouter().getTargets().display("notFound")}},onDetail:function(e){console.log("Detail");var t,n;t=e.getParameter("listItem");n=t.getBindingContext();this.getRouter().navTo("referentenAnmeldungen",{id:n.getProperty("Id")},false)}})});
},
	"rcBerufsinfo/controller/ReferentenView.controller.js":function(){sap.ui.define(["rcBerufsinfo/controller/BaseController","sap/m/MessageToast","sap/ui/core/BusyIndicator"],function(e,t,n){"use strict";return e.extend("rcBerufsinfo.controller.ReferentenView",{onInit:function(){var e=this.getRouter();e.getRoute("referenten").attachMatched(this._onRouteMatched,this)},myData:{veranstaltungId:""},_onRouteMatched:function(e){var t,n;t=e.getParameter("arguments");n=this.getView();var i=n.byId("veranstaltungsListe");n.bindElement({path:"/Referenten('"+t.id+"')",events:{change:this._onBindingChange.bind(this),dataRequested:function(e){n.setBusy(true)},dataReceived:function(e){n.setBusy(false)}}})},_onBindingChange:function(e){if(!this.getView().getBindingContext()){this.getRouter().getTargets().display("notFound")}},onDetail:function(e){console.log("Detail");var t,n;t=e.getParameter("listItem");n=t.getBindingContext();this.getRouter().navTo("referentenAnmeldungen",{id:n.getProperty("Id")},false)}})});
},
	"rcBerufsinfo/controller/VeranstaltungView.controller.js":function(){sap.ui.define(["rcBerufsinfo/controller/BaseController","sap/m/MessageToast","sap/ui/core/BusyIndicator"],function(e,t,a){"use strict";return e.extend("rcBerufsinfo.controller.VeranstaltungView",{onInit:function(){var e=this.getRouter();e.getRoute("veranstaltung").attachMatched(this._onRouteMatched,this)},myData:{veranstaltungId:""},_onRouteMatched:function(e){var t,a;t=e.getParameter("arguments");a=this.getView();this.myData.veranstaltungId=t.id;a.bindElement({path:"/Veranstaltungen('"+t.id+"')",events:{change:this._onBindingChange.bind(this),dataRequested:function(e){a.setBusy(true)},dataReceived:function(e){a.setBusy(false)}}})},_onBindingChange:function(e){if(!this.getView().getBindingContext()){this.getRouter().getTargets().display("notFound")}},onAnmelden:function(e){console.log("Anmelden");var n=true;var s=this.byId("name");var i=s.getValue();if(i==""){s.setValueState(sap.ui.core.ValueState.Error);s.setValueStateText("Bitte Ihren Namen eingeben");n=false}else{s.setValueState(sap.ui.core.ValueState.None)}var r=this.byId("email");var o=r.getValue();if(o==""){r.setValueState(sap.ui.core.ValueState.Error);r.setValueStateText("Bitte Ihre Emailadresse eingeben")}else{var u=/^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/;if(!u.test(o)){r.setValueState(sap.ui.core.ValueState.Error);r.setValueStateText("Bitte eine gültige Emailadresse eingeben");n=false}else{r.setValueState(sap.ui.core.ValueState.None)}}var l=this.byId("agreement");var c=l.getSelected();if(!c){l.setValueState(sap.ui.core.ValueState.Error);n=false}else{l.setValueState(sap.ui.core.ValueState.None)}var g=this.byId("roboter");var d=g.getSelected();if(!d){g.setValueState(sap.ui.core.ValueState.Error);n=false}else{g.setValueState(sap.ui.core.ValueState.None)}if(n){var h=this.getView().getModel();var V=this.getView().getBindingContext();var f=h.bindContext("Quarkus.OData.register(...)",V);a.show();let e=this;f.setParameter("name",i).setParameter("email",o).execute().then(function(){var n=f.getBoundContext().getObject();console.log(n);a.hide();t.show(n.value);l.setSelected(false);g.setSelected(false);e.onNavBack()}).catch(function(e){a.hide();t.show("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal.");console.log("Fehler"+e)})}}})});
},
	"rcBerufsinfo/controller/VeranstaltungenView.controller.js":function(){sap.ui.define(["rcBerufsinfo/controller/BaseController"],function(e){"use strict";return e.extend("rcBerufsinfo.controller.VeranstaltungenView",{onInit:function(){console.log("init");var e=this.getRouter();e.getRoute("veranstaltungen").attachMatched(this._onRouteMatched,this)},_onRouteMatched:function(e){console.log("route matched");var t=this.byId("veranstaltungenList"),n=t.getBinding("items");n.refresh()},onRefresh:function(){var e=this.byId("veranstaltungenList"),t=e.getBinding("items");t.refresh()},onDetail:function(e){var t,n;t=e.getParameter("listItem");n=t.getBindingContext();this.getRouter().navTo("veranstaltung",{id:n.getProperty("Id")},false)},onCreate:function(){var e=this.byId("veranstaltungenList"),t=e.getBinding("items");var n=this.getRouter();t.attachCreateCompleted(function(e){let t=e.getParameter("context");console.log(t.getProperty("Id"));n.navTo("veranstaltung",{id:t.getProperty("Id")})}.bind(this));var i=t.create({Id:"Neu"})},onDelete:function(){var e=this.byId("veranstaltungenList").getSelectedItem();if(e){e.getBindingContext().delete("$auto").then(function(){MessageToast.show(this._getText("deletionSuccessMessage"))}.bind(this),function(e){MessageBox.error(e.message)})}}})});
},
	"rcBerufsinfo/i18n/i18n.properties":'# This is the resource bundle for net.moewes.myUI5App\n#Texts for manifest.json\n#XTIT: Application name\nappTitle=Berufsinfo 2022\n#YDES: Application description\nappDescription=Berufsinfo 2022\n#XTIT: Main view title\ntitle=Berufsinfo 2022\n# NotFoundView\nNotFound=Not Found\nNotFound.text=Sorry, but the requested resource is not available.\nNotFound.description=Please check the URL and try again.\n# Header\nTitle=Berufsinformation 2022\nSecondaryTitle=Eine Veranstaltung der Rotary Clubs Eutin und Neustadt\n# ButtonTexts\ndeleteButtonText=Eintrag l\\u00f6schen\ncreateButtonText=Eintrag anlegen\nrefreshButtonText=Neu laden\nsortButtonText=Sortieren\n# searchField\nsearchFieldPlaceholder=\n# Apps\nHome=Berufsinformation 2022\nBerufsfelder=Berufsfelder\nReferenten=Referenten\nVeranstaltungen=Veranstaltungen\n# Felder\nfieldId=Id\nfieldDatum=Datum\nfieldZeit=Zeit\nfieldReferent=Referent\nfieldBerufsfeld=Berufsfeld\nfieldBeschreibung=Beschreibung',
	"rcBerufsinfo/i18n/i18n_de_DE.properties":'# This is the resource bundle for net.moewes.myUI5App\n#Texts for manifest.json\n#XTIT: Application name\nappTitle=Berufsinfo 2022\n#YDES: Application description\nappDescription=Berufsinfo 2022\n#XTIT: Main view title\ntitle=Berufsinfo 2022\n# NotFoundView\nNotFound=Not Found\nNotFound.text=Sorry, but the requested resource is not available.\nNotFound.description=Please check the URL and try again.\n# Header\nTitle=Berufsinformation 2022\nSecondaryTitle=Eine Veranstaltung der Rotary Clubs Eutin und Neustadt\n# ButtonTexts\ndeleteButtonText=Eintrag l\\u00f6schen\ncreateButtonText=Eintrag anlegen\nrefreshButtonText=Neu laden\nsortButtonText=Sortieren\n# searchField\nsearchFieldPlaceholder=\n# Apps\nHome=Berufsinformation 2022\nBerufsfelder=Berufsfelder\nReferenten=Referenten\nVeranstaltungen=Veranstaltungen\n# Felder\nfieldId=Id\nfieldDatum=Datum\nfieldZeit=Zeit\nfieldReferent=Referent\nfieldBerufsfeld=Berufsfeld\nfieldBeschreibung=Beschreibung',
	"rcBerufsinfo/i18n/i18n_en.properties":'# This is the resource bundle for net.moewes.myUI5App\n#Texts for manifest.json\n#XTIT: Application name\nappTitle=Berufsinfo 2022\n#YDES: Application description\nappDescription=Berufsinfo 2022\n#XTIT: Main view title\ntitle=Berufsinfo 2022\n# NotFoundView\nNotFound=Not Found\nNotFound.text=Sorry, but the requested resource is not available.\nNotFound.description=Please check the URL and try again.\n# Header\nTitle=Berufsinformation 2022\nSecondaryTitle=Eine Veranstaltung der Rotary Clubs Eutin und Neustadt\n# ButtonTexts\ndeleteButtonText=Eintrag l\\u00f6schen\ncreateButtonText=Eintrag anlegen\nrefreshButtonText=Neu laden\nsortButtonText=Sortieren\n# searchField\nsearchFieldPlaceholder=\n# Apps\nHome=Berufsinformation 2022\nBerufsfelder=Berufsfelder\nReferenten=Referenten\nVeranstaltungen=Veranstaltungen\n# Felder\nfieldId=Id\nfieldDatum=Datum\nfieldZeit=Zeit\nfieldReferent=Referent\nfieldBerufsfeld=Berufsfeld\nfieldBeschreibung=Beschreibung',
	"rcBerufsinfo/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"rcBerufsinfo","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","dataSources":{"default":{"uri":"http://localhost:8080/odata/","type":"OData","settings":{"odataVersion":"4.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.60","libs":{"sap.ui.core":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"rcBerufsinfo.i18n.i18n"}},"":{"dataSource":"default","settings":{"autoExpandSelect":true,"operationMode":"Server","groupId":"$direct","synchronizationMode":"None"}}},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"rcBerufsinfo.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"appHome","pattern":"","target":"home"},{"name":"veranstaltungen","pattern":"veranstaltungen","target":"veranstaltungen"},{"name":"notFound","pattern":"notFound","target":"notFound"},{"name":"veranstaltung","pattern":"veranstaltungen/{id}","target":"veranstaltung"},{"name":"anmeldungen","pattern":"anmeldungen/{id}","target":"anmeldungen"},{"name":"referenten","pattern":"referenten/{id}","target":"referenten"},{"name":"referentenAnmeldungen","pattern":"referenten/anmeldungen/{id}","target":"referentenAnmeldungen"},{"name":"info","pattern":"information","target":"info"}],"targets":{"home":{"viewId":"mainView","viewName":"MainView","viewLevel":1},"notFound":{"viewId":"notFound","viewName":"NotFound","transition":"show"},"html":{"viewId":"html","viewName":"Html","transition":"fade"},"info":{"viewId":"info","viewName":"Informationen","transition":"fade"},"anmeldungen":{"viewId":"anmeldungen","viewName":"Anmeldungen","transition":"fade"},"veranstaltungen":{"viewId":"veranstaltungen","viewName":"Veranstaltungen","transition":"fade"},"veranstaltung":{"viewId":"veranstaltung","viewName":"Veranstaltung","transition":"fade"},"referenten":{"viewId":"referenten","viewName":"Referenten","transition":"fade"},"referentenAnmeldungen":{"viewId":"referentenAnmeldungen","viewName":"ReferentenAnmeldungen","transition":"fade"}}},"rootView":{"viewName":"rcBerufsinfo.view.App","type":"XML","async":true,"id":"app"}}}',
	"rcBerufsinfo/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"rcBerufsinfo/view/Anmeldungen.view.xml":'<mvc:View xmlns:uxap="sap.uxap" xmlns:semantic="sap.f.semantic" xmlns:form="sap.ui.layout.form" xmlns:layout="sap.ui.layout" xmlns:f="sap.f" controllerName="rcBerufsinfo.controller.AnmeldungenView" xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m"><Page id="_IDGenPage1" title="Referenten pflegen" showNavButton="false" showHeader="true" showFooter="true" class="sapUiResponsiveContentPadding"><customHeader><f:ShellBar id="_IDGenShellBar1" title="{i18n>Home}" secondTitle="{i18n>SecondaryTitle}" showNavButton="true" navButtonPressed=".onNavBack"></f:ShellBar></customHeader><content><ObjectHeader id="_IDGenObjectHeader1" title="Anmeldungen {Name}" backgroundDesign="Solid" condensed="true"></ObjectHeader><Table id="anmeldungenListe2" items="{path: \'Anmeldungen\',\n                            parameters: {\n                                $$ownRequest: true\n                            }}"><columns><Column id="veranstaltungColumn"><Text id="_IDGenText2" text="Veranstaltung"></Text></Column></columns><items><ColumnListItem id="_IDGenColumnListItem1"><cells><Text id="_IDGenText1" text="{Veranstaltung}"></Text></cells></ColumnListItem></items></Table></content><footer><Toolbar id="_IDGenToolbar1"><ToolbarSpacer id="_IDGenToolbarSpacer1" /><Button id="helpButton" press=".onShowHelp" icon="sap-icon://sys-help" /></Toolbar></footer></Page></mvc:View>',
	"rcBerufsinfo/view/App.view.xml":'<mvc:View\n\t\tcontrollerName="rcBerufsinfo.controller.App"\n\t\txmlns="sap.m"\n\t\txmlns:mvc="sap.ui.core.mvc"\n\t\tdisplayBlock="true"><Shell><App id="app"/></Shell></mvc:View>',
	"rcBerufsinfo/view/Html.view.xml":'<mvc:View\n\txmlns:l="sap.ui.layout"\n\txmlns:core="sap.ui.core"\n\txmlns:mvc="sap.ui.core.mvc"\n\txmlns="sap.m"\n\tcontrollerName="net.moewes.myUI5App.controller.html"\n><l:VerticalLayout id="staticContentLayout" width="100%"></l:VerticalLayout></mvc:View>',
	"rcBerufsinfo/view/Informationen.view.xml":'<mvc:View xmlns:f="sap.f" xmlns:l="sap.ui.layout" xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m" controllerName="rcBerufsinfo.controller.Html"><Page title="Referenten pflegen" showNavButton="false" showHeader="true" showFooter="true"><customHeader><f:ShellBar title="{i18n>Home}" secondTitle="{i18n>SecondaryTitle}" showNavButton="true" navButtonPressed=".onNavBack"></f:ShellBar></customHeader><content><l:VerticalLayout id="staticContentLayout" width="100%"></l:VerticalLayout></content><footer><Toolbar visible="{appView>/hasUIChanges}"><ToolbarSpacer /></Toolbar></footer></Page></mvc:View>',
	"rcBerufsinfo/view/MainView.view.xml":'<mvc:View xmlns:f="sap.f"\n          controllerName="rcBerufsinfo.controller.MainView" xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m"><Page title="Club Admin" showNavButton="false" showHeader="true" showFooter="true"><customHeader><f:ShellBar title="{i18n>Home}" secondTitle="{i18n>SecondaryTitle}"><f:profile><f:Avatar id="userMenu" src= "sap-icon://visits" press="onUserMenu" backgroundColor="Accent1"></f:Avatar></f:profile></f:ShellBar></customHeader><content><f:GridContainer id="_IDGenGridContainer2" class="sapUiSmallMargin"><f:layout><f:GridContainerSettings id="_IDGenGridContainerSettings1" rowSize="84px"\n                                             columnSize="84px" gap="8px"/></f:layout><f:layoutXS><f:GridContainerSettings id="_IDGenGridContainerSettings2" rowSize="70px"\n                                             columnSize="70px" gap="8px"/></f:layoutXS><GenericTile id="info11" header="Allgemeine Informationen"\n                             press=".onInfo"><layoutData><f:GridContainerItemLayoutData id="_IDGenGridContainerItemLayoutData111" minRows="2"\n                                                       columns="2"/></layoutData><TileContent><ImageContent src="sap-icon://information"/></TileContent></GenericTile><GenericTile id="_IDGenGenericTile522"\n                             header="Überblick Berufsfelder und Termine" press=".onVeranstaltungen"><layoutData><f:GridContainerItemLayoutData id="_IDGenGridContainerItemLayoutData522" minRows="2"\n                                                       columns="2"/></layoutData><TileContent><ImageContent src="sap-icon://collaborate"/></TileContent></GenericTile><GenericTile id="myAppointments33" header="Meine Anmeldungen"\n                             press=".onAnmeldungen"><layoutData><f:GridContainerItemLayoutData id="_IDGenGridContainerItemLayoutData233" minRows="2"\n                                                       columns="2"/></layoutData><TileContent><ImageContent src="sap-icon://activity-items"/></TileContent></GenericTile><GenericTile id="_IDGenGenericTile444"\n                             header="Zugang für Referenten" press=".onReferenten"><layoutData><f:GridContainerItemLayoutData id="_IDGenGridContainerItemLayoutData444" minRows="2"\n                                                       columns="2"/></layoutData><TileContent><ImageContent src="sap-icon://personnel-view"/></TileContent></GenericTile></f:GridContainer></content><footer><Toolbar><ToolbarSpacer/><Button\n                        id="helpButton"\n                        press=".onShowHelp"\n                        icon="sap-icon://sys-help"/></Toolbar></footer></Page></mvc:View>',
	"rcBerufsinfo/view/NotFound.view.xml":'<mvc:View\n        controllerName="rcBerufsinfo.controller.NotFound"\n        xmlns="sap.m"\n        xmlns:mvc="sap.ui.core.mvc"><MessagePage id="_IDGenMessagePage1"\n                 title="{i18n>NotFound}"\n                 text="{i18n>NotFound.text}"\n                 description="{i18n>NotFound.description}"\n                 showNavButton="true"\n                 navButtonPress="onNavBack"/>/></mvc:View>',
	"rcBerufsinfo/view/Referenten.view.xml":'<mvc:View xmlns:layout="sap.ui.layout" xmlns:f="sap.f" controllerName="rcBerufsinfo.controller.ReferentenView" xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m"><Page id="_IDGenPage1" title="Referenten pflegen" showNavButton="false" showHeader="true" showFooter="true"><customHeader><f:ShellBar id="_IDGenShellBar1" title="{i18n>home}" secondTitle="{i18n>SecondaryTitle}" showNavButton="true" navButtonPressed=".onNavBack"></f:ShellBar></customHeader><content><ObjectHeader id="_IDGenObjectHeader1" title="Veranstaltungen {Name}" backgroundDesign="Solid" condensed="true"></ObjectHeader><Table id="veranstaltungenListe" itemPress="onDetail" items="{path: \'ReferentenVeranstaltungen\',\n                            parameters: {\n                                $$ownRequest: true\n                            }}" ><columns><Column id="_IDGenColumn1"><Text id="_IDGenText1" text="Datum"></Text></Column><Column id="_IDGenColumn2"><Text id="_IDGenText2" text="Zeit"></Text></Column><Column id="_IDGenColumn3"><Text id="_IDGenText3" text="Berufsfeld"></Text></Column></columns><items><ColumnListItem id="_IDGenColumnListItem1" type="Active"><cells><Text id="_IDGenText4" text="{Datum}"></Text><Text id="_IDGenText5" text="{Zeit}"></Text><Text id="_IDGenText6" text="{Berufsfeld}"></Text></cells></ColumnListItem></items></Table></content><footer><Toolbar id="_IDGenToolbar1" visible="{appView>/hasUIChanges}"><ToolbarSpacer id="_IDGenToolbarSpacer1" /><Button id="helpButton" press=".onShowHelp" icon="sap-icon://sys-help" /></Toolbar></footer></Page></mvc:View>',
	"rcBerufsinfo/view/ReferentenAnmeldungen.view.xml":'<mvc:View xmlns:layout="sap.ui.layout" xmlns:f="sap.f" controllerName="rcBerufsinfo.controller.ReferentenAnmeldungenView" xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m"><Page id="_IDGenPage1" title="Referenten pflegen" showNavButton="false" showHeader="true" showFooter="true"><customHeader><f:ShellBar id="_IDGenShellBar1" title="{i18n>home}" secondTitle="{i18n>SecondaryTitle}" showNavButton="true" navButtonPressed=".onNavBack"></f:ShellBar></customHeader><content><ObjectHeader id="_IDGenObjectHeader1" title="Veranstaltung: {Berufsfeld} am {Datum} um {Zeit}" backgroundDesign="Solid" condensed="true"></ObjectHeader><Table id="veranstaltungenListe" items="{path: \'ReferentenAnmeldungen\',\n                            parameters: {\n                                $$ownRequest: true\n                            }}"><columns><Column id="_IDGenColumn1"><Text id="_IDGenText1" text="Name"></Text></Column><Column id="_IDGenColumn2"><Text id="_IDGenText2" text="Email"></Text></Column></columns><items><ColumnListItem id="_IDGenColumnListItem1" type="Active"><cells><Text id="_IDGenText4" text="{Name}"></Text><Text id="_IDGenText5" text="{Email}"></Text></cells></ColumnListItem></items></Table></content><footer><Toolbar id="_IDGenToolbar1" visible="{appView>/hasUIChanges}"><ToolbarSpacer id="_IDGenToolbarSpacer1" /><Button id="helpButton" press=".onShowHelp" icon="sap-icon://sys-help" /></Toolbar></footer></Page></mvc:View>',
	"rcBerufsinfo/view/Veranstaltung.view.xml":'<mvc:View xmlns:f2="sap.f" controllerName="rcBerufsinfo.controller.VeranstaltungView" xmlns="sap.m" xmlns:mvc="sap.ui.core.mvc" xmlns:f="sap.ui.layout.form" busyIndicatorDelay="0"><Page id="employeePage" title="" showNavButton="true" navButtonPress=".onNavBack" class="sapUiResponsiveContentPadding"><customHeader><f2:ShellBar title="{i18n>Home}" secondTitle="{i18n>SecondaryTitle}" showNavButton="true" navButtonPressed=".onNavBack"></f2:ShellBar></customHeader><content><ObjectHeader title="{Berufsfeld}" backgroundDesign="Solid" condensed="true"><statuses><ObjectStatus title="Status" text="für Anmeldungen offen" state="Success" /></statuses></ObjectHeader><f:SimpleForm minWidth="1024" editable="true" layout="ResponsiveGridLayout" labelSpanL="3" labelSpanM="3" emptySpanL="4" emptySpanM="4" columnsL="1" columnsM="1"><f:content><Label text="{i18n>fieldDatum}" /><Text text="{Datum}" ></Text><Label text="{i18n>fieldZeit}" /><Text text="{Zeit}" ></Text><Label text="{i18n>fieldBerufsfeld}" /><Text text="{Berufsfeld}" /><Label text="{i18n>fieldReferent}" /><Text text="{Referent}" /><Label text="{i18n>fieldBeschreibung}" /><Text text="{Beschreibung}" wrapping="true" /></f:content></f:SimpleForm><f:SimpleForm minWidth="1024" editable="true" layout="ResponsiveGridLayout" labelSpanL="3" labelSpanM="3" emptySpanL="4" emptySpanM="4" columnsL="1" columnsM="1"><Title text="Zu dieser Veranstaltug anmelden:"></Title><f:content><Label text="Name" /><Input id="name" value="" /><Label text="Email" /><Input id="email" value="" type="Email" /><Label text="" /><CheckBox id="agreement" wrapping="true" text="Ich bin mit der Speicherung meines Namens und meiner Emailadresse zum Zweck der Organisations der Berufinformation einverstanden. "></CheckBox><Label text="" /><CheckBox id="roboter" text="Ich bin kein Roboter"></CheckBox><Button text="Anmelden" press="onAnmelden"></Button></f:content></f:SimpleForm></content><footer><Toolbar visible="{appView>/hasUIChanges}"><ToolbarSpacer /><Button id="helpButton" press=".onShowHelp" icon="sap-icon://sys-help" /></Toolbar></footer></Page></mvc:View>',
	"rcBerufsinfo/view/Veranstaltungen.view.xml":'<mvc:View xmlns:core="sap.ui.core" xmlns:layout="sap.ui.layout" xmlns:f="sap.f"\n          controllerName="rcBerufsinfo.controller.VeranstaltungenView" xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m"><Page id="_IDGenPage1" title="Berufsinformation 2022" showNavButton="true" showHeader="true" showFooter="true"><customHeader><f:ShellBar id="_IDGenShellBar1" title="{i18n>Home}" secondTitle="{i18n>SecondaryTitle}" showNavButton="true"\n                        navButtonPressed=".onNavBack"></f:ShellBar></customHeader><content><layout:VerticalLayout id="_IDGenVerticalLayout1" class="sapUiContentPadding"><Table id="veranstaltungenList" headerText="Veranstaltungen" items="{/Veranstaltungen}"\n                       itemPress=".onDetail" enableBusyIndicator="true" ><headerToolbar><OverflowToolbar id="_IDGenOverflowToolbar1"><content><ToolbarSpacer id="_IDGenToolbarSpacer1"/><SearchField id="searchField" width="20%" placeholder="{i18n>searchFieldPlaceholder}"\n                                             enabled="{= !${appView>/hasUIChanges}}" search=".onSearch"/><Button id="refreshUsersButton" icon="sap-icon://refresh"\n                                        enabled="{= !${appView>/hasUIChanges}}" tooltip="{i18n>refreshButtonText}"\n                                        press=".onRefresh"/><Button id="sortUsersButton" icon="sap-icon://sort"\n                                        enabled="{= !${appView>/hasUIChanges}}" tooltip="{i18n>sortButtonText}"\n                                        press=".onSort"/></content></OverflowToolbar></headerToolbar><columns><Column id="dateColumn"><Text id="_IDGenText1" text="Datum"/></Column><Column id="timeColumn"><Text id="_IDGenText2" text="Uhrzeit"/></Column><Column id="berufsfeldColumn"><Text id="_IDGenText3" text="Berufsfeld"/></Column><Column id="berufsfeldColumn2"><Text id="_IDGenText32" text="Referent"/></Column></columns><items><ColumnListItem id="_IDGenColumnListItem1" type="Active"><cells><Text id="_IDGenText4" text="{Datum}" /><Text id="_IDGenText5" text="{Zeit}" /><Text id="_IDGenText6" text="{Berufsfeld}" /><Text id="_IDGenText7" text="{Referent}" /></cells></ColumnListItem></items></Table></layout:VerticalLayout></content><footer><Toolbar id="_IDGenToolbar1" visible="{appView>/hasUIChanges}"><ToolbarSpacer id="_IDGenToolbarSpacer2"/><Button id="helpButton" press=".onShowHelp" icon="sap-icon://sys-help"/></Toolbar></footer></Page></mvc:View>'
});
