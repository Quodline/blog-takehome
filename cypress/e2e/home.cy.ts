/* eslint-disable */

import {baseURL} from '@/lib/fetch'
import {postsApiData} from '../fixtures/posts-api-data'

describe('Home page', () => {
    beforeEach(() => {
        cy.intercept('GET', `${baseURL}/post?page=0`, req => {
            req.reply({
                body: postsApiData,
            })
        }).as('fetchPosts')

        cy.visit('/')

        cy.wait('@fetchPosts')
    })

    it('can fetch blog posts correctly', () => {
        cy.get('#home-posts').children()
            .should('have.length', 20)
    })

    it('can link to new page', () => {
        cy.get('#pagination a[href="/?page=2"]').click()
        cy.url().should('include', '/?page=2')
    })
})
