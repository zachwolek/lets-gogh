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
    cy.intercept('GET', 'https://api.artic.edu/api/v1/artworks/129884?fields=id,title,image_id,artist_title,description,short_description,place_of_origin,date_display,style_title',{
      statusCode: 200,
      fixture: 'starrynightinfo.json'
    })
    cy.intercept('GET', 'https://api.artic.edu/api/v1/artworks/137125?fields=id,title,image_id,artist_title,description,short_description,place_of_origin,date_display,style_title',{
      statusCode: 200,
      fixture: 'manymansionsinfo.json'
    })
    .visit('http://localhost:3000')
  });
  it('should see exhibition cards on page load', () => {
    cy.get('h1').should('contain.text', 'Let\'s Gogh')
    .get('.exhibitions-container').get('.exhibition-card').should('have.length', 4)
    .get('.exhibition-card').first().should('contain.text', 'Starry Night and the Astronauts')
    .get('.exhibition-card').last().should('contain.text', 'Many Mansions')
  })
  it('exhibition cards should NOT be visible when SEE MORE is clicked', () => {
    cy.get('.exhibition-info-button').first().click()
    .get('.exhibitions-container').should('not.exist')
  })
  it('displayed movies should NOT be visible when last movie details are clicked', () => {
    cy.get('.exhibition-info-button').last().click()
    .get('.exhibitions-container').should('not.exist')
  })
});

describe('Landing page API server error', () => {
  it('should display a failed to fetch message if the server returns a 500 error', () => {
    cy.intercept('GET','https://api.artic.edu/api/v1/artworks/search?q=', {
      statusCode: 500
    }).as('getServerFailure')
    .visit('http://localhost:3000')
  })
})


