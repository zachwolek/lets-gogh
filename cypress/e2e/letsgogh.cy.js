describe('template spec', () => {
  beforeEach(() => {
    cy.fixture('homepage').then((json) => {
      cy.intercept('GET', 'https://api.artic.edu/api/v1/artworks/search?q=', json);
      cy.intercept('GET', 'https://api.artic.edu/api/v1/artworks/129884?fields=id,title,image_id,artist_title,alt_text,short_description',{
        statusCode: 200,
        fixture: 'starrynightcard.json'
      })
      cy.intercept('GET', 'https://api.artic.edu/api/v1/artworks/28560?fields=id,title,image_id,artist_title,alt_text,short_description',{
        statusCode: 200,
        fixture: 'thebedroomcard.json'
      })
      cy.intercept('GET', 'https://api.artic.edu/api/v1/artworks/21023?fields=id,title,image_id,artist_title,alt_text,short_description',{
        statusCode: 200,
        fixture: 'buddhacard.json'
      })
      cy.intercept('GET', 'https://api.artic.edu/api/v1/artworks/137125?fields=id,title,image_id,artist_title,alt_text,short_description',{
        statusCode: 200,
        fixture: 'manymansionscard.json'
      })
    });
  });
  
  it('passes', () => {
    cy.visit('http://localhost:3000/');
  });
});

