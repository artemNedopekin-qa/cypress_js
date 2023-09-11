describe('Покупаем Skin', function () {
    
    it('Проверка успешной покупки Skin тренера', function () {
        cy.visit('https://pokemonbattle.me/login');
        cy.get(':nth-child(1) > .auth__input').type('Введи свой логин');
        cy.get('#password').type('Введи свой пароль');
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get(':nth-child(12) > .shop__button').click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4627100101654724');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1223');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('pokemonov pokemon');
        cy.wait(5000);
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.contains('Покупка прошла успешно');
        cy.get('.payment__adv').click();
         })

})