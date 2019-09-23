/// <reference types="cypress" />

import * as todoPage from "../page-objects/todo-page";

describe("visual validation", () => {
  before(() => todoPage.navigate());

  beforeEach(() =>
    cy.eyesOpen({
      appName: "TodoMVC [TAU]",
      batchName: "TodoMVC [Introduction to Cypress]",
      browser: [
        { name: "chrome", width: 1024, height: 768 },
        { name: "chrome", width: 800, height: 600 },
        { name: "firefox", width: 1024, height: 768 },
        { deviceName: "Nexus 6" }
      ]
    })
  );

  afterEach(() => cy.eyesClose());

  it("should look good", () => {
    cy.eyesCheckWindow("empty todo list");

    todoPage.addTodo("Learn Cypress");
    todoPage.addTodo("Learn Puppeteer");
    cy.eyesCheckWindow("two todos");

    todoPage.toggleTodo(1);
    cy.eyesCheckWindow("mark as completed");
  });
});
