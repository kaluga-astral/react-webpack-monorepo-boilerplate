import { UserInfo } from '../../../../src/pages/main/UserInfo';

describe('UserInfo', () => {
  it('Отображает информацию о пользователе', () => {
    const userInfo = {
      title: 'title',
      userName: 'name',
      userEmail: 'email@email.ru',
    };

    cy.mount(<UserInfo {...userInfo} />);
    cy.contains(userInfo.title);
    cy.contains(userInfo.userName);
    cy.contains(userInfo.userEmail);
  });
});
