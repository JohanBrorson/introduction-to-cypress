/// <reference types="cypress" />

import {
  navigate,
  addTodo,
  getTodoListItems,
  toggleTodo,
  showAllTodos,
  showOnlyActiveTodos,
  showOnlyCompletedTodos
} from "../page-objects/todo-page";

describe("filtering", () => {
  beforeEach(() => {
    navigate();
    addTodo("Learn Cypress");
    addTodo("Learn WebdriverIO");
    addTodo("Learn Puppeteer");
    toggleTodo(1);
  });

  it('should filter "Active" correctly', () => {
    showOnlyActiveTodos();
    getTodoListItems().should("have.length", 2);
  });

  it('should filter "Completed" correctly', () => {
    showOnlyCompletedTodos();
    getTodoListItems().should("have.length", 1);
  });

  it('should filter "All" correctly', () => {
    showAllTodos();
    getTodoListItems().should("have.length", 3);
  });
});
