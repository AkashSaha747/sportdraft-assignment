describe("Automated with sign up,sign in, add and remove books and sign out", () => {
    beforeEach(() => {
      cy.visit('https://www.goodreads.com/');
    });

    it('Sign Up',()=>{
        cy.contains('Sign up with email').should('have.text','Sign up with email').click();
        cy.get('#ap_customer_name').type('akash');
        cy.get('#ap_email').type('akashkaliyaganj4@gmail.com');
        cy.get('#ap_password').type('abcde1');
        cy.get('#ap_password_check').type('abcde1');
        cy.get('#continue').click();
    })


    it('Sign In', () => {
      cy.get('.authSwitchFlow > .gr-hyperlink').click();
      cy.contains('Sign in with email').click();
      cy.get('#ap_email').type('akashkaliyaganj3@gmail.com');
      cy.get('#ap_password').type('abcde1');
      cy.get('#signInSubmit').click()
    });


it('serch for books and add them to my books',()=>{
    // sign in first
    cy.get('.authSwitchFlow > .gr-hyperlink').click();
    cy.contains('Sign in with email').click();
    cy.get('#ap_email').type('akashkaliyaganj3@gmail.com');
    cy.get('#ap_password').type('abcde1');
    cy.get('#signInSubmit').click()

    cy.get('.siteHeader__contents > .searchBox > .searchBox__form > .searchBox__input').type("free");
    cy.contains('Fifty Shades Freed').click();
    cy.contains('Want to read').click();
})

it("remove books from shelves",()=>{
    cy.get('.authSwitchFlow > .gr-hyperlink').click();
    cy.contains('Sign in with email').click();
    cy.get('#ap_email').type('akashkaliyaganj3@gmail.com');
    cy.get('#ap_password').type('abcde1');
    cy.get('#signInSubmit').click()

    cy.visit("https://www.goodreads.com/review/list/168596552?ref=nav_mybooks");
    cy.contains("Want to Read").click();
    cy.get('.actionsWrapper > .smallText').click();
})



it("Sign out",()=>{
    cy.get('.authSwitchFlow > .gr-hyperlink').click();
    cy.contains('Sign in with email').click();
    cy.get('#ap_email').type('akashkaliyaganj3@gmail.com');
    cy.get('#ap_password').type('abcde1');
    cy.get('#signInSubmit').click();


    cy.get('.dropdown__trigger > .headerPersonalNav__icon > .circularIcon').click();
    cy.contains("Sign out").should("have.text","Sign out").click();
})
  });
  