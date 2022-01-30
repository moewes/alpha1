package net.moewes;

import io.quarkus.vertx.web.Route;
import io.quarkus.vertx.web.RoutingExchange;
import io.vertx.core.http.Cookie;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class LandingPages {

    @Route(path = "/login")
    void loginRoute(RoutingExchange ex) {
        ex.getParam("token")
                .ifPresent(token -> ex.context().addCookie(Cookie.cookie("token", token)));
        ex.context().redirect("/");
    }

    @Route(path = "/logout")
    void logoutRoute(RoutingExchange ex) {
        ex.context().removeCookie("token");
        ex.context().redirect("/");
    }

    @Route(path = "/referent")
    void loginReferent(RoutingExchange ex) {
        ex.getParam("token")
                .ifPresent(token -> ex.context().addCookie(Cookie.cookie("referent", token)));
        ex.context().redirect("/");
    }

    @Route(path = "/logoutReferent")
    void logoutReferent(RoutingExchange ex) {
        ex.context().removeCookie("referent");
        ex.context().redirect("/");
    }
}
