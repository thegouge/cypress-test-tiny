/// <reference types="Cypress" />
import { mount } from '@cypress/vue'
import SlotTest from './SlotTest.vue'

it('renders a slot', () => {
  mount(SlotTest, {
    slots: {
      default: 'Hello Cypress!',
    },
  })

  cy.contains('Hello Cypress!')
})
