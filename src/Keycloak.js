import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "https://keycloak-sso.apps.ocp4.example.com/auth",
 realm: "ad240",
 clientId: "e345f38f",
 clientSecret: "7f35495f5550c9b3de2ce22da55e89ee"
});

export default keycloak;
