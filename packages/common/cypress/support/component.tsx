import './commands';

import { mount } from '@example/cypress/support/mount';

import { ThemeProvider, theme } from '../../ui';

Cypress.Commands.add('mount', (component, props) => {
  console.log('theme', theme, ThemeProvider);

  const wrapped = <ThemeProvider theme={theme}>{component}</ThemeProvider>;

  return mount(wrapped, props);
});
