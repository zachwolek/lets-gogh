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
      cy.intercept('GET', 'https://api.artic.edu/api/v1/artworks/search?q=monet',{
        statusCode: 200,
        fixture: 'monetsearch.json'
      })
      cy.intercept('GET', 'https://api.artic.edu/api/v1/artworks/16568?fields=id,title,image_id,artist_title,alt_text,short_description',{
        statusCode: 200,
        fixture: 'waterliliescard.json'
      })
      cy.intercept('GET', 'https://api.artic.edu/api/v1/artworks/16571?fields=id,title,image_id,artist_title,alt_text,short_description',{
        statusCode: 200,
        fixture: 'normandytraincard.json'
      })
      cy.intercept('GET', 'https://api.artic.edu/api/v1/artworks/64818?fields=id,title,image_id,artist_title,alt_text,short_description',{
        statusCode: 200,
        fixture: 'stacksofwheatcard.json'
      })
      cy.intercept('GET', 'https://api.artic.edu/api/v1/artworks/14620?fields=id,title,image_id,artist_title,alt_text,short_description',{
        statusCode: 200,
        fixture: 'cliffwalkcard.json'
      })
      cy.intercept('GET', 'https://api.artic.edu/api/v1/artworks/16568?fields=id,title,image_id,artist_title,description,short_description,place_of_origin,date_display,style_title',{
        statusCode: 200,
        fixture: 'waterliliesinfo.json'
      })
      cy.intercept('GET', 'https://api.artic.edu/api/v1/artworks/14620?fields=id,title,image_id,artist_title,description,short_description,place_of_origin,date_display,style_title',{
        statusCode: 200,
        fixture: 'cliffwalkinfo.json'
      })

      .visit('http://localhost:3000')
    });
    it('should see a list of saved items', () => {
        cy.get('.save-button').first().click()
            .get('.save-button').last().click()
            .get('.input-box').type('monet')
            .get('.search-button').click()
            .get('.save-button').first().click()
            .get('.saved-link').click()
            .get('.saved-exhibitions-container').get('.exhibition-card').should('have.length', 3)
            .get('.exhibition-card').first().should('contain.text', 'Starry Night and the Astronauts')
            .get('.exhibition-card').last().should('contain.text', 'Water Lilies')
      })
      it('should unsave items', () => {
        cy.get('.save-button').first().click()
            .get('.save-button').last().click()
            .get('.input-box').type('monet')
            .get('.search-button').click()
            .get('.save-button').first().click()
            .get('.saved-link').click()
            .get('.save-button').first().click()
            .get('.save-button').last().click()
            .get('.saved-exhibitions-container').get('.exhibition-card').should('have.length', 1)
            .get('.exhibition-card').first().should('contain.text', 'Many Mansions')
      })
      it('should return to the main page and back again to see saved', () => {
        cy.get('.save-button').first().click()
            .get('.save-button').last().click()
            .get('.input-box').type('monet')
            .get('.search-button').click()
            .get('.save-button').first().click()
            .get('.saved-link').click()
            .get('.save-button').first().click()
            .get('.save-button').last().click()
            .get('.saved-exhibitions-container').get('.exhibition-card').should('have.length', 1)
            .get('.exhibition-card').first().should('contain.text', 'Many Mansions')
            .get('.home-button').click()
            .get('.save-state').last().click()
            .get('.saved-link').click()
            .get('.saved-exhibitions-container').get('.exhibition-card').should('have.length', 2)
            .get('.exhibition-card').first().should('contain.text', 'Many Mansions')
            .get('.exhibition-card').last().should('contain.text', 'Buddha Shakyamuni Seated in Meditation (Dhyanamudra)')
      })
})
