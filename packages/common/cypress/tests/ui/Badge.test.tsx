import { Badge } from '../../../ui/Badge';

describe('Badge', () => {
  it('Отображается, если isShow:true', () => {
    cy.mount(<Badge isShow color="red" />);
    cy.contains('Badge').should('exist');
  });
});
