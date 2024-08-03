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
    it('should see a new list of results from a search', () => {
      cy.get('.input-box').type('monet')
        .get('.search-button').click()
        .get('.exhibitions-container').get('.exhibition-card').should('have.length', 4)
        .get('.exhibition-card').first().should('contain.text', 'Water Lilies')
        .get('.exhibition-card').last().should('contain.text', 'Cliff Walk at Pourville')
    })
    it('exhibition cards should NOT be visible when SEE MORE is clicked', () => {
        cy.get('.exhibition-info-button').first().click()
        .get('.exhibitions-container').should('not.exist')
    })
    it('displayed movies should NOT be visible when last movie details are clicked', () => {
        cy.get('.exhibition-info-button').last().click()
        .get('.exhibitions-container').should('not.exist')
    })
    it('should see exhibition details of the first card', () => {
        cy.get('.input-box').type('monet')
        .get('.search-button').click()
        .get('.exhibitions-container').get('.exhibition-card').first()
        .get('.exhibition-info-button').first().click()
        .get('.title').should('contain.text', 'Water Lilies')
        .get('.artist_title').should('contain.text', 'Claude Monet')
        .get('.description').should('contain.text', '“One instant, one aspect of nature contains it all,” said Claude Monet, referring to his late masterpieces, the water landscapes that he produced at his home in Giverny between 1897 and his death in 1926.')
      })
      it('should see exhibition details of the last card', () => {
        cy.get('.input-box').type('monet')
        .get('.search-button').click()
        .get('.exhibitions-container').get('.exhibition-card').last()
        .get('.exhibition-info-button').last().click()
        .get('.title').should('contain.text', 'Cliff Walk at Pourville')
        .get('.description').should('contain.text', 'In addition, the artist was unenthusiastic about the upcoming seventh Impressionist exhibition—divisions within the group had become pronounced by this time—and he delegated the responsibility for his contribution to his dealer, Paul Durand-Ruel.Disappointed in the area around the harbor city of Dieppe, which he found too urban, Monet settled in Pourville and remained in this fishing village until mid-April.')
      })
})
