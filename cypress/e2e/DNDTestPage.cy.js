import { checkDragAndDrop } from "../utils/dndUtils";

describe("DND Test Page", () => {
  it("Check DND in 3 container", () => {
    cy.visit(
      "https://65fda9edfe518826bd75a100--papaya-chimera-d41bb0.netlify.app/"
    );
    checkDragAndDrop("3Container", "zxczxczczxc", "asdasd");
    cy.wait(5000);
  });

  it("Check DND in saportal", () => {
    cy.visit(
      "http://localhost:3000/SOLOCOOPREFIX/recommendation/feeds/418248,penthouse"
    );
    cy.get('input[name="Email"]').type("zbigniew.kalinowski@oke.pl");
    cy.get('input[name="Password"]').type("Zeppelin2020!");
    cy.get('[data-test-id="Login"]').click();
    checkDragAndDrop(
      "Itemsinfeed(2)Container",
      "Bangbros Big Titty Black Beauties V3",
      "Anal Loving Euro Sluts"
    );
    cy.wait(5000);
  });
});
