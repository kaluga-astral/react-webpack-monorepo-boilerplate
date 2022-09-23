/*
 Code-gen
*/
import { mount } from 'cypress/react';

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      headlessScreenshot(): Cypress.Chainable<T>;
      loadFileFileInMultiFileUploaderField(
        inputName: string,
        params?: { fileBase64: string; name: string; type: string },
      ): Cypress.Chainable<T>;
      chainSpy(spy: Cypress.Agent, wait?: number): Cypress.Chainable<T>;
    }
  }
}

export declare global {
  namespace Cypress {
    interface Chainable {
      awaitPromise<T>(promise: () => Promise<T>): Cypress.Chainable<T>;

      gqlIntercept(operationName: string): Cypress.Chainable<void>;

      getByTestId(
        selector: string,
        options?: Partial<Cypress.SelectOptions>,
      ): Cypress.Chainable<JQuery>;

      getInputByName(
        name: string,
        options?: Cypress.SelectOptions,
      ): Cypress.Chainable<JQuery>;

      getBtnByText(
        text: string,
        options?: Partial<Cypress.SelectOptions>,
      ): Cypress.Chainable<JQuery>;

      getTextAreaByName(
        name: string,
        options?: Cypress.SelectOptions,
      ): Cypress.Chainable<JQuery>;

      waitSuccess(alias: string): Cypress.Chainable<void>;

      submitForm(alias: string, selector?: string): Cypress.Chainable<void>;

      interceptFormData(
        // eslint-disable-next-line
        cb: (formData: Record<string, any>) => void,
      ): Chainable<Subject>;
    }
  }
}

declare module '@cypress/code-coverage/task' {
  const task: Cypress.PluginConfig;

  export = task;
}
