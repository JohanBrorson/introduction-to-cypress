/// <reference types="cypress" />

export function navigate() {
  cy.visit("http://todomvc-app-for-testing.surge.sh/");
}

export function addTodo(todoText) {
  cy.get(".new-todo").type(todoText + "{enter}");
}

export function toggleTodo(todoIndex) {
  cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`).click();
}

export function showOnlyCompletedTodos() {
  cy.contains("Completed").click();
}

export function showOnlyActiveTodos() {
  cy.contains("Active").click();
}

export function showAllTodos() {
  cy.contains("All").click();
}

export function clearCompletedTodos() {
  cy.contains("Clear").click();
}

export function getTodoList() {
  return cy.get(".todo-list");
}

export function getTodoTextItem(todoIndex) {
  return getTodoList().within(() => {
    cy.get(`li:nth-child(${todoIndex + 1}) label`);
  });
}

export function getTodoListItems() {
  return getTodoList().within(() => {
    cy.get("li");
  });
}

export function getToggle() {
  return cy.get(".toggle");
}
