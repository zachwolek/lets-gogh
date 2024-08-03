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
    it('should see exhibition details of the first card', () => {
      cy.get('.exhibitions-container').get('.exhibition-card').first()
      .get('.exhibition-info-button').first().click()
      .get('.title').should('contain.text', 'Starry Night and the Astronauts')
      .get('.description').should('contain.text', 'After decades as a representational painter, in her seventies Alma Thomas turned to abstraction, creating shimmering, mosaic-like fields of color with rhythmic dabs of paint that were often inspired by forms from nature.')
    })
    it('should return back to the home from the first exhibition page', () => {
        cy.get('.exhibitions-container').get('.exhibition-card').first()
        .get('.exhibition-info-button').first().click()
        .get('.title').should('contain.text', 'Starry Night and the Astronauts')
        .get('.artist_title').should('contain.text', 'Alma Thomas')
        .get('.home_button').click()
        .get('h1').should('contain.text', 'Let\'s Gogh')
        .get('.exhibitions-container').get('.exhibition-card').should('have.length', 4)
        .get('.exhibition-card').first().should('contain.text', 'Starry Night and the Astronauts')
        .get('.exhibition-card').last().should('contain.text', 'Many Mansions')
      })
      it('should see exhibition details of the last card', () => {
        cy.get('.exhibitions-container').get('.exhibition-card').last()
        .get('.exhibition-info-button').last().click()
        .get('.title').should('contain.text', 'Many Mansions')
        .get('.artist_title').should('contain.text', 'Kerry James Marshall')
        .get('.description').should('contain.text', 'Struck by the absurdity of the term “garden” to describe these failed solutions to low-income housing, Marshall was inspired to represent the profound contradictions of living in such an environment.')
      })
      it('should return back to the home from the last exhibition page', () => {
        cy.get('.exhibitions-container').get('.exhibition-card').last()
        .get('.exhibition-info-button').last().click()
        .get('.title').should('contain.text', 'Many Mansions')
        .get('.artist_title').should('contain.text', 'Kerry James Marshall')
        .get('.home_button').click()
        .get('h1').should('contain.text', 'Let\'s Gogh')
        .get('.exhibitions-container').get('.exhibition-card').should('have.length', 4)
        .get('.exhibition-card').first().should('contain.text', 'Starry Night and the Astronauts')
        .get('.exhibition-card').last().should('contain.text', 'Many Mansions')
      })
  });

  
  
  