// beforeEach('open application',()=>{
    
//     cy.visit('/')
// })

before('open application',()=>{
    
         cy.visit('/')
     })

function selectGroupMenuItem(groupName){

    cy.contains('a', groupName).then(menu=>{
        cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then(attr=>{
            if(attr.includes('left')){
                cy.wrap(menu).click()
            }
        })
    })

}

export class NavigationPage{

    FormsLayoutPage(){
        
        //cy.contains('Forms').click()
        selectGroupMenuItem('Forms')
        cy.contains('Form Layouts').click()
    }

    DatePickerPage(){
        //cy.contains('Forms').click()
        selectGroupMenuItem('Forms')
        cy.contains('Datepicker').click()

    }

    AccordionPage(){
        selectGroupMenuItem('Layout')
        cy.contains('Accordion').click()
    }

    AuthPage(){
        selectGroupMenuItem('Auth')
        cy.contains('Register').click()
    }

}

export const NavigateTo = new NavigationPage()
