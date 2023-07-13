describe('login', () => {
    beforeEach(() => {
        // Se ejecuta antes de cada prueba dentro del bloque describe
        cy.visit('http://localhost:3000/');
    });


    // VALIDAR EMAIL ES DE TIPO EMAIL

    it('Should validate that the email field has a valid email format', () => {
        // Fill in the form with an invalid email format
        cy.get('[data-cy="email"]').type('invalid-email');
        cy.get('[data-cy="password"]').type('test123');
        cy.get('[data-cy="submit"]').click();
        // Check for validation error message
        cy.contains('Credenciales incorrectas').should('be.visible');
    });
    
    it('should only allow valid email addresses', () => {
        // Invalid email addresses
        const invalidEmails = [
            'test',
            'test@',
            'test.com',
            '@test.com',
            'test@test',
            'test@.com',
        ];
    
        // Attempt login with each invalid email address
        invalidEmails.forEach((email) => {
            cy.get('[data-cy="email"]').clear().type(email);
            cy.get('[data-cy="password"]').type('test123');
            cy.get('[data-cy="submit"]').click();
    
          // Check that error message is displayed
            cy.contains('Credenciales incorrectas').should('be.visible');
        });
    });
    
    it('should allow only valid email addresses', () => {
        // Valid email addresses
        const validEmails = [
            'test@test.com',
            'user@example.com',
            'john.doe@gmail.com',
            'jane_doe123@yahoo.co.uk',
        ];
    
        // Attempt login with each valid email address
        validEmails.forEach((email) => {
            cy.get('[data-cy="email"]').clear().type(email);
            cy.get('[data-cy="password"]').type('test123');
            cy.get('[data-cy="submit"]').click();
    
          // Check that no error message is displayed
            
        });
    });


      /////////////////////////////////////////////////////////////////////

    it('user should be able to log in', () => {
        // open the login modal
        cy.get('button').contains('Login').click();

        // fill in the form
        
        cy.get('[data-cy="email"]').type('test@test.com');

        cy.get('[data-cy="password"]').type('test@test.com');

        // submit the form 
        cy.get('[data-cy="submit"]').contains('Login').click();
        
    });

    it('user should not be able to log in with incorrect credentials', () => {
        // open the login modal
        cy.get('button').contains('Login').click();

        // fill in the form with incorrect credentials
        cy.get('[data-cy="email"]').type('test@test.com');
        cy.get('[data-cy="password"]').type('password123');
        
        // submit the form
        cy.get('[data-cy="submit"]').contains('Login').click();
        // check for error message
        cy.contains('Credenciales incorrectas').should('be.visible');

    });

    it('should redirect to /login when navigating to /', () => {
        cy.visit('http://localhost:3000/');
        cy.url().should('eq', 'http://localhost:3000/');
    });

    it('should stay in / when attempting to navigate to /Home from http://localhost:3000/', () => {
        cy.visit('http://localhost:3000/');
        cy.visit('http://localhost:3000/Home');
        cy.url().should('eq', 'http://localhost:3000/');
    });
    

    it('should stay in /login when entering incorrect credentials', () => {
        cy.get('[data-cy="email"]').type('incorrect');
        cy.get('[data-cy="password"]').type('credentials');
        cy.get('[data-cy="submit"]').click();
        cy.url().should('eq', 'http://localhost:3000/');
    });

    it('should redirect to / when attempting to navigate to /Home from /login', () => {
        cy.visit('http://localhost:3000/login');
        cy.visit('http://localhost:3000/Home');
        cy.url().should('eq', 'http://localhost:3000/');
    });

});
