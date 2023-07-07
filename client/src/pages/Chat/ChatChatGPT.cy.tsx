import React from 'react'
import ChatGPT from './Chat'

describe('<ChatGPT />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ChatGPT />)
  })
})