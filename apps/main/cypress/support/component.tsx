import './commands';

import { theme } from 'config';

import { ThemeProvider } from '@example/common';
import { mount } from '@example/cypress/support/mount';

Cypress.Commands.add('mount', (component, props) => {
  console.log('theme', theme, ThemeProvider);

  const wrapped = <ThemeProvider theme={theme}>{component}</ThemeProvider>;

  return mount(wrapped, props);
});
