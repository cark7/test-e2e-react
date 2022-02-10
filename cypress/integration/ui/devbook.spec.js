import { api } from "../../../src/services/api"

describe('Devbook application', () => {
  before(() => {
    return api.delete('books?_cleanup=true').catch((err) => err)
  })
  beforeEach(() => {
    const books = [
      {name: 'Refactoring', id: 1},
      {name: 'Domain-driven design', id: 2},
      {name: 'building Micorservices', id: 3},
    ]
    return books.map(item => api.post('books', item))
  })
  afterEach(( )=> {
    return api.delete('books?_cleanup=true').catch((err) => err)
  })
  it('Visits the DevBook', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h2[data-test="heading"]').contains('ola Dev!')
  })
  it('Visits the DevBook', () => {
    cy.get('div[data-test="book-list"]').should('exist')
    cy.get('div.book-item').should((books) => {
      expect(books).to.have.length(3)
      const title = [...books].map(book => book.querySelector('h2').innerHTML)
      expect(title).to.deep.equal(['Refactoring', 'Domain-driven design', 'building Micorservice'])
    })
  })

})