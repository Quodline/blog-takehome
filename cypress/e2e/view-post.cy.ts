/* eslint-disable */

import {baseURL} from '@/lib/fetch'
import {postsApiData} from '../fixtures/posts-api-data'

const post = postsApiData.data[0]

describe('View post', () => {
    beforeEach(() => {
        cy.intercept('GET', `${baseURL}/post/${post.id}`, req => {
            req.reply({
                body: post,
            })
        }).as('fetchPost')

        cy.visit(`/posts/${post.id}`)

        cy.wait('@fetchPost')
    })

    it('can render post title and content correctly', () => {
        cy.get('#banner-title').contains(post.text)
        cy.get('.article-para').should('have.length', post.tags.length)
    })
})
