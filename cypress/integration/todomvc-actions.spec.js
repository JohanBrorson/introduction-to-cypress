/// <reference types="cypress" />

import {
  navigate,
  addTodo,
  getTodoList,
  getToggle,
  toggleTodo,
  clearCompletedTodos,
  getTodoTextItem
} from "../page-objects/todo-page";

describe("todo actions", () => {
  beforeEach(() => {
    navigate();
    addTodo("Learn Cypress");
  });

  it("should add a new todo to the list", () => {
    getTodoTextItem(0).should("have.text", "Learn Cypress");
    getToggle().should("not.be.checked");
  });

  it("should mark a todo as completed", () => {
    toggleTodo(0);
    getTodoTextItem(0).should(
      "have.css",
      "text-decoration-line",
      "line-through"
    );
  });

  it("should clear completed todos", () => {
    toggleTodo(0);
    clearCompletedTodos();
    getTodoList().should("not.have.descendants", "li");
  });
});
