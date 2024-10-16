describe("Share functionality", () => {
  beforeEach(() => {
    // Prevent external network request for adapter config
    cy.intercept(
      "GET",
      "https://kendraio.github.io/kendraio-adapter/config.json",
      {
        fixture: "adapterConfig.json",
      },
    ).as("adapterConfig.json");

    // Prevent external network requests for Workflow cloud
    cy.intercept(
      "GET",
      "https://app.kendra.io/api/workflowCloud/listWorkflows",
      {
        fixture: "workflow-cloud.json",
      },
    ).as("workflow-cloud.json");

    // Prevent external network requests for fonts with empty CSS rule
    cy.intercept("https://fonts.googleapis.com/**", "*{ }");
  });

  it("should assert a shared database loads as expected using given URL", () => {
    const databaseUrl =
      "/workflow-builder?metadata=NobwRArhCWAmYC4wGZkEMAsAOWBTADALT4BsAjLoRgKwCcAZobbWbYblgEwDGJyJnarGTwANGDSw0ABwAuuAE4A5NAFtciMAGduAC1yq0WsOJ37DK9ZukLo6gPqroAO2hb5C4+Kmy0icM5qGkgASm660GAAvuIANmgARrixmmFaEdGi4FBwmhj41NT0+ADsyIQlFGzYZGSEWCU87PjIZdTc+LQkuLQmElJyipbB2noGRn1m48PWtg5Oru6KXmA+fggBQZoAQgD2tsYxYPFJKUh7B5nZMPBIlZwJ1D3cVCW4JVS0aNT1WBgkxGQtGQ+FwsBKGH+Yn6Mg8MyQU0MK0RaHhYBsdlwjhcbg8KzW-jAgSsSAAMtAAF6ZY6JZKaclUmLXXJId5oTi1ESEJLvKj4WCwJiFH5oLokDD0LDIehkBJ+cSSWFDLYIsZIyZq1Eq0bmCbeNC+Qk5W5gNkcshcnkffICoWFQiikjiyXS2Xy9EKXbSRSyaC4YwIUBgADWuAAnppiRpxL7ZLERjMY2HvZoACq4AAesmiAF1xFHZpjsYs8X08DpbHJoLtnJoAAoAWQABLFcX0TnSkAWjh2zh6iwtcctc0A";
    const flowUrl =
      "/workflow-builder?data=NobwRALgngDgpmAXGA5gewM4FcBGYA0YAhgCZEwRwBOAckQLYLIYDGAFnPURgWAO5oqAawBmAGzR8AkiSRhWHLj0I4JLIQGE09RgDsIcgDJpSAAgWduYAL75w0eHICWupwdv3YTSJxhiilLyU9H4B3gA8bABMAHwAIgFEONxwpixo nD6GOEA9NExNnaQXnJcMDAuKLzllbrVyGQQRMAA-FhYTiQAvN0ABnAA7ERRAIyjAMwkALQ4cEPTACwADCQzAJwArNvTROsAbPuLIgAcEyKjyX0AuqYAPqbAy9e8qmjqWjpZBsgAYk5iShUczsSymCBoUxYKhiUwwIhUBhFTyOZDpTIADwg0wwRAAbghCOjKFiANJwKByCxcV5qTTaPQ-eT41JoaHmeAsJwiJwsEGKIjIkqosCMDC4lCEyBuMTeQxODAQUxuTgYUwiKjafmWRCmEAgNIZEkQAB01KIJt0DFS1msQoc3hIeEIaHgiIgTgycklBkIpHIQLojCpoKUvHNAHE4BAgXJiXAsWbQxarcGVHTPoyjCYSKYmkR1Zr6NqaR5hd5alUauQ6g0wPngNcTYwqJKABQAAXwetM-jmYl1Ps73YAJCb44nzSa 3AxABKaxz2nvelffRyKNKiAcUwAHWlEFl 9M9tKjTgOCw1Rd8F0SFGhAwbEkCWaSAgVCwcEfz74WkxPwiEQYgYN 8i-gAys0gSIEBIFwGWDrelQXS8CgKEkAA8hQnq6DwiDgPCKAuAEuHvp YFESRHoZAACkQkoQU4ABeTArLYYDpGIWD0LocRwCI GgGAHCkNQQZykks68Dys6yMgM5iEKokkOJ1pyNh1CkRkyicbOYgAEpZKpVDUHIAjCOIkhGboJlmUS k2XZVD0Yi9D4eAbzqEJKLeEQLA0XhrxYDGOlIMJilyAAoiQbjLt54W XI-hYLo7C8P6FBmcwya6RZogSNI8lgHAsUQFIwS8BOPzgOaMhxkaCamgAjl VBQK5DAYEmAr1YQqGNIkJodKhtrXIQWRJLK8kfl 1jXPNtrFCpanBsgUhxDJThyXII2yPN6Yrpm3xyKeIr YFumXqFQWIBFUlKcgACCaymBVnBVWgEhUHIqlAVggLxUIPnlslRCpelfpkFlP05QKeWCAVkj1cgpVuO99CfQBSC1cmKOcY1iatdQHUIl1PWWH1YADWAe1tkuY0TVaqileRc3FJFyDyoqpjAbC5pXXSINIQp4NpWwGXQ7GcOWAjlmFfjYgKu440lcz01swhqteauWbIGd3joNgzrEFLq3eE4ISCLGhD5VZRVyCIaBoDbYA68d65-M7QK7ne81AA";

    cy.visit(databaseUrl).contains("Flow");
    cy.on("window:confirm", () => true);

    cy.wait(3000);

    cy.visit(flowUrl).contains("Boris");
    cy.contains("Liz");
    cy.contains("Rishi");

    // Now we press the share button, and select share database:
    cy.get("mat-icon").contains("settings").click();
    cy.get("mat-icon").contains("share").click();
    cy.get('button:contains("Share database")').click();

    // assert shareValue is in the databaseUrl
    cy.get("app-show-share-link-dialog textarea").should(
      "contain",
      databaseUrl,
    );
  });
});
