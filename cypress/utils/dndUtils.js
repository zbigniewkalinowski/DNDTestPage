export const checkDragAndDrop = (tableId, subject, target) => {
  const selector = `[data-test-id="${tableId}"]`;
  cy.get(selector)
    .contains(subject)
    .parents("tr")
    .find('[data-test-class="DragDropIcon"]')
    .as("subject");

  cy.get(selector).find("tr").contains(target).parents("tr").as("target");

  performDND("@target", "@subject");
};

const performDND = (target, subject) => {
  const BUTTON_INDEX = 0;
  const SLOPPY_CLICK_THRESHOLD = 10;
  cy.get(target)
    .first()
    .then(($target) => {
      let coordsDrop = $target[0].getBoundingClientRect();
      cy.get(subject)
        .first()
        .then(($subject) => {
          const coordsDrag = $subject[0].getBoundingClientRect();
          cy.wrap($subject)
            .trigger("mousedown", {
              button: BUTTON_INDEX,
              clientX: coordsDrag.x,
              clientY: coordsDrag.y,
              force: true,
            })
            .trigger("mousemove", {
              button: BUTTON_INDEX,
              clientX: coordsDrag.x + SLOPPY_CLICK_THRESHOLD,
              clientY: coordsDrag.y,
              force: true,
            });
          cy.get("body")
            .trigger("mousemove", {
              button: BUTTON_INDEX,
              clientX: coordsDrop.x,
              clientY: coordsDrop.y,
              force: true,
            })
            .trigger("mouseup");
          cy.wait(250);
        });
    });
};
