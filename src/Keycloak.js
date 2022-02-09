import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "https://keycloak-sso.apps.ocp4.example.com/auth",
 realm: "ad240-realm",
 clientId: "ad240-secret",
});

export default keycloak;
