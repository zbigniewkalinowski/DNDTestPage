import { checkDragAndDrop } from "../utils/dndUtils";
import credentials from "../../credentials.json";

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
      "https://m7be2a.solocoo.tv/m7be2asaportal/recommendation/feeds/418248,penthouse"
    );
    cy.get('input[name="Email"]').type(credentials.email);
    cy.get('input[name="Password"]').type(credentials.password);
    cy.get('[data-test-id="Login"]').click();
    checkDragAndDrop(
      "Itemsinfeed(3)Container",
      "Bangbros Big Titty Black Beauties V3",
      "Anal Loving Euro Sluts"
    );
    cy.wait(5000);
  });
});
