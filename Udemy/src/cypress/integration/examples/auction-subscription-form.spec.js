// todo: click range slider randomly and check results
const apiUrl = 'https://8mc9jttzol.execute-api.eu-west-1.amazonaws.com/dev'
import faker from 'faker';
describe('Auction Subscription Flow', () => {
  it.skip('should complete frist form successfully', () => {
    const email = faker.internet.email();
    const postalCode = faker.address.zipCode('#####')
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    cy.fixture('isEmailSubscribed.json').as("isEmailSubscribedJSON");
    cy.fixture('getPrices.json').as("getPrices");
    cy.fixture('getRunningOffer.json').as('getRunningOfferJSON');
    cy.fixture('subscribe.json').as('subscribeJSON');
    cy.server();
    cy.route('POST', `${apiUrl}/is_email_subscribed`, "@isEmailSubscribedJSON").as("emailSubscribed")
    cy.route('POST', `${apiUrl}/get_prices`, "@getPrices").as("getPrices")
    cy.route('GET', `${apiUrl}/get_running_offer`, "@getRunningOfferJSON").as("runningOffer")
    cy.route('POST', `${apiUrl}/subscribe`, "@subscribeJSON").as("getPrices")
    cy.visit('/');
    // todo: refactor all selectors to data-test format
    cy.get('[data-test=postCode]').as('postalCode');
    cy.get('app-button > div').should('have.class', 'disabled')
    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#email').type(email);
    cy.get('@postalCode').type(postalCode);
    cy.get('app-checkbox').click();
    cy.get('[data-test=submit-button]').should('not.have.class', 'disabled');
    // cy.get('form').scrollIntoView({duration: 100, offset: {top: -110}});
    cy.get('form').screenshot({padding: 10});
    cy.get('[data-test=submit-button]').click();
    cy.get('[data-test=submit-button]').click();
    cy.contains('FACEBOOK').as('facebook').should('be.visible');
    cy.contains('TWITTER').as('twitter').should('be.visible');
    cy.contains('E-MAIL').as('e-mail').should('be.visible');
  }) 
  
  it ('все что хочешь', () => {
    cy.server();
    cy.fixture('isofferrunning.json').as("isOfficeRunningJSON");
    cy.route('GET', "https://8mc9jttzol.execute-api.eu-west-1.amazonaws.com/dev/is_offer_running", "@isOfficeRunningJSON");
    cy.visit('/');
    cy.get('.no-auction-container > .text-bold').should("have.text", "next auction is coming soon.");
  })
}) 

