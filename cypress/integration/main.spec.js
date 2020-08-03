/* eslint-disable no-undef */
describe("Page and navigation works", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("successfully loads a page", () => {
    cy.findByText("JAM SHOP")
    cy.title().should("include", "BEJAMAS | GATSBY SHOP")
  })

  it("redirects to product page on article click and add product to basket", () => {
    cy.findAllByText("Dummy Club").click()
    // description should match
    cy.findAllByText(
      "Something that you trully need, but haven’t know about it yet. Multiple winner of Community Awarads."
    ).should("have.length", 1)
    cy.findAllByText("Add to cart").click()
    // eslint-disable-next-line quotes
    cy.get('[data-cy="basket-counter"]').contains("1")
  })
})
